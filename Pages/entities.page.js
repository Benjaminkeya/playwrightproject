import { expect } from '@playwright/test';

const account = require('../fixtures/erm.json');
const randomNum = Math.floor(Math.random() * 1000) + 1;

export class entityPage {
   constructor(page) { this.page = page; }

   // --- ELEMENTS (GETTERS) ---
  get entitiesTab () { return this.page.getByRole('link', { name: /Entities/i }); }
  // get entitiesTab () { return this.page.locator('text=Entities').first().click();};
  //get entitiesTab () { return this.page.locator('div').filter({ hasText: /^Entities$/ })} 
  //get firstEntity() { return this.page.locator('tbody tr').first().locator('.text-decoration-none'); }
  get firstEntity() { return this.page.getByRole('link', { name: /PlaywrightTestName\+QA-\d+/ })}
  get newEntityBtn() { return this.page.getByRole('button', { name: 'new entity', exact: false }); }
  get entityName() { return this.page.getByRole('textbox', { name: 'Name*' }); }
  get entityAddress() { return this.page.getByRole('textbox', { name: 'Address' }); }
  get tag() { return this.page.locator('.rbt-input-multi'); }
  get firstTag() { return this.page.locator('#tagsTypeahead-item-0'); }
  get clearTag() { return this.page.getByRole('button', { name: 'Clear' }); }
  get chooseJuris2() { return this.page.locator('#jurisdiction-typeahead-item-0'); }
  get entityDesc() { return this.page.getByRole('textbox', { name: 'Description' }); }
  get facilityIDField() { return this.page.getByRole('textbox', { name: 'Facility ID' }); }
  get nextBtn() { return this.page.locator('.px-4'); }
  get genInfoTab() { return this.page.locator('#controlled-tab-example-tab-step-1'); }
  get locationAndContactInfoTab() { return this.page.getByRole('tab', { name: 'Location & Contact Info' }); }
  get advancedInfoTab() { return this.page.getByRole('tab', { name: 'Advanced Information' }); }
  get mannedRdioBtn() { return this.page.locator('#checkbox-manned'); }
  get createEntityBtn() { return this.page.getByRole('button', { name: 'Create Entity' }); }
  get delEntity() { return this.page.getByRole('button', { name:'delete Delete'}); }
  get confirmDelEntityCheckboxBtn() { return this.page.locator('.form-check-input'); }
  get updatedAtFilter() { return this.page.locator('tr > th').nth(4); }
  get updateEntityBtn1() { return this.page.locator('tbody tr').first().locator('button').filter({ hasText: /edit|update/i }); }
  get updateEntityBtn2() { return this.page.getByRole('button', { name: 'Update Entity' }); }
  get entitydeleteBtn() { return this.page.locator('.btn-danger'); }
  get entityNameInnerText() { return this.page.locator('tbody tr').first().locator('.text-decoration-none'); }
  get entitySearchField() { return this.page.getByPlaceholder(/search/i); }
  get dateFilter() { return this.page.locator('.react-datepicker__input-container > .form-control'); }
  get dateModal() { return this.page.locator('.react-datepicker'); }
  get assessmentsBtn() { return this.page.locator('.mx-2'); }

   // --- PAGE ACTIONS ---
  async clickEntitiesTab() {
    await expect(this.entitiesTab).toBeVisible();
    await this.entitiesTab.click();
    await expect(this.page).toHaveURL(`${process.env.BASE_URL}/facilities`,);
}

    async clickFirstEntityLink(){
    //await this.firstEntity.first().click();
      const link = await this.firstEntity.first();
      await expect(link).toBeVisible({ timeout: 40000 });
      await link.click();
      await this.page.waitForLoadState('networkidle');}
      async clickFirstAssessmentLink(){
      await this.page.getByRole('row')
                    .nth(1)                // nth(0) is usually header row, so 1 = first data row
                    .getByRole('cell')
                    .first()
                    .getByRole('link')
                    .click();
    }

   async createEntity(entityName, entityAddress, facility, desc, msg) {
  const fullName = entityName + randomNum;

  await this.newEntityBtn.waitFor({ state: 'visible' });
  await this.newEntityBtn.click();

  await this.entityName.fill(fullName);
  await this.entityAddress.fill(entityAddress);
  await this.facilityIDField.fill(facility);
  await this.tag.click();
  await this.firstTag.click();
  await this.entityDesc.fill(desc);
  await this.locationAndContactInfoTab.click();
  await this.advancedInfoTab.click();
  await this.mannedRdioBtn.check();
  await expect(this.createEntityBtn).toBeEnabled();

  // Wait for backend response + click together
  const [response] = await Promise.all([
    this.page.waitForResponse(resp =>
      resp.url().includes('/facilities') && resp.status() === 201
    ),
    this.createEntityBtn.click()
  ]);
  await this.page.waitForSelector(`text=${msg}`, { state: 'visible' });
  await this.page.waitForSelector(`text=${fullName}`, { state: 'visible' });
}

   async updateEntity(name, entityAddress, desc) {
    const updatedName = name + randomNum;
    await expect(this.updateEntityBtn1).toBeVisible();
    await this.updateEntityBtn1.click();
    await expect(this.entityName).toBeVisible();
    await this.entityName.fill(updatedName);
    await this.entityAddress.fill(entityAddress + randomNum);
    await expect(this.entityDesc).toBeVisible();
    await this.entityDesc.fill(desc);
    await this.locationAndContactInfoTab.click();
    await this.advancedInfoTab.click();
    await this.updateEntityBtn2.click({force:true});
    await expect(this.page.getByText(updatedName)).toBeVisible();
  }

   async deleteEntityPositive(notification) {
    // Perform Delete Actions
    await expect(this.delEntity).toBeVisible();
    await this.delEntity.click();
    // Confirm via Checkbox
    await this.confirmDelEntityCheckboxBtn.check();
    //  Click Final Delete
    // Playwright auto-waits for the button to be enabled before clicking
    await expect(this.entitydeleteBtn).toBeEnabled();
    await this.entitydeleteBtn.click();
    // Verifications
    // Wait for the success toast/notification text
    await expect(this.page.getByText(notification)).toBeVisible();
    // Verify redirection to dashboard (Home)
    await expect(this.page).toHaveURL(/\/$/); 
  }
}