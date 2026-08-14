const { expect } = require('@playwright/test');

// Generate a random number
const randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

export class ManageAccount {
  constructor(page) {
    this.page = page;
  }

  // Page Element selectors using 'get' format
  get userMenu() { return this.page.locator('#collasible-nav-dropdown'); }
  get manageUserLink() { return this.page.locator('a:has-text("Manage")'); }
  get pageTitle() { return this.page.getByRole('heading', { name: 'Account Management' }) }
  get firstName() { return this.page.locator('#firstName'); }
  get lastName() { return this.page.locator('#lastName'); }
  get email() { return this.page.locator('#email'); }
  get addMemberBtn1() { return this.page.locator('button:has-text("Add Member")'); }
  get cancelAddMember() { return this.page.locator('.bg-secondary'); }
  get addMemberBtn2() { return this.page.locator("//button[@type='submit']"); }
  get submitBtn() { return this.page.locator('button:has-text("Submit")'); }
  get userEmail() { return this.page.locator('.table-group-divider > tr > :nth-child(3)'); }
  // XPath Conversions
  get delLastMember() { return this.page.locator("//tbody[@class='table-group-divider']/tr[1]/td/span/button/span[contains(text(),'delete')]"); }
  get confirmDelMemberCheckbox() { return this.page.getByRole('checkbox'); }
  get editLastMemberBtn() { return this.page.locator("//tbody[@class='table-group-divider']/tr[1]/td/span/button/span[contains(text(),'edit')]"); }
  get resendLastAddedMemberRequest() { return this.page.locator("//tbody[@class='table-group-divider']/tr[1]/td/span/button/span[contains(text(),'refresh')]"); }
  get confirmDelMemberBtn() { return this.page.locator("input[type='checkbox']"); }
  get delMemberBtn() { return this.page.locator("button[class='btn btn-danger btn-sm']"); }
  get updateMemberBtn() { return this.page.locator('.align-bottom > .float-end'); }
  get memberStatus() { return this.page.locator("//tbody[@class='table-group-divider']/tr[1]/td[6]/span"); }
  get entitiesTab() { return this.page.locator("//button[@id='controlled-tab-example-tab-facilities']"); }
  get allEntitiesToggleBtn() { return this.page.locator("#controlled-tab-example-tabpane-facilities > .table > .table-group-divider > .border > :nth-child(2) > .float-end > .form-check-input"); }
  get portfolioTab() { return this.page.locator("#controlled-tab-example-tab-portfolios"); }
  get allPortfliosToggleBtn() { return this.page.getByRole('row', { name: 'All Portfolios' }).getByRole('checkbox'); }
  get searchMember() { return this.page.locator(".form-control"); }
  get exportMemberBtn() { return this.page.locator('button:has-text("Export Members")'); }
  get entityTagsTab() { return this.page.locator('a:has-text("Entity tags")'); }
  get assessmentTagsTab() { return this.page.locator(".mb-3 > :nth-child(4) > .nav-link"); }
  get addTagBtn() { return this.page.locator('button:has-text("Tag")'); }
  get entityTagName() { return this.page.locator("#name"); }
  get entityTagDescription() { return this.page.locator("#description"); }
  get saveTagBtn() { return this.page.locator(".float-end"); }
  get editTagBtn() { return this.page.locator(":nth-child(1) > :nth-child(5) > .btn-outline-primary"); }
  get delTagBtn1() { return this.page.locator(":nth-child(1) > :nth-child(5) > .ms-2"); }
  get confirmDelEntityBtn() { return this.page.locator(".form-check-input"); }
  get delTagBtn2() { return this.page.getByRole('button', { name: 'Delete', exact: true }); }
  get actionItemTagsTab() { return this.page.locator(":nth-child(3) > .nav-link"); }
  get addActionItemTagBtn() { return this.page.locator('button:has-text("Add Tag")'); }
  get actionItemTagName() { return this.page.locator("#name"); }
  get actionItemTagDescription() { return this.page.locator("#description"); }
  get saveActionItemTagBtn() { return this.page.locator(".float-end"); }
  get editActionItemTagBtn() { return this.page.locator(":nth-child(1) > :nth-child(5) > .btn-outline-primary"); }
  get delActionItemTagBtn1() { return this.page.locator("tbody tr:nth-child(1) td:nth-child(5) button:nth-child(2)"); }
  get confirmDelActionItemTagBtn() { return this.page.locator(".form-check-input"); }
  get delActionItemTagBtn2() { return this.page.locator(".btn-danger"); }
  get addOrganizationCredentialsTab() { return this.page.locator(".nav > :nth-child(5) > .nav-link"); }
  get addKeyBtn() { return this.page.locator('button:has-text("Add New")'); }
  get editKeyBtn() { return this.page.locator(":nth-child(1) > :nth-child(7) > .d-flex > .btn-outline-primary"); }
  get tokenNameTxt() { return this.page.locator("#tokenName"); }
  get addKeyBtn2() { return this.page.locator("form > .sticky-bottom > .ms-2"); }
  get updateKeyBtn() { return this.page.locator('button:has-text("Update")'); }
  get tokenInnerText() { return this.page.locator(":nth-child(1) > .text-start"); }
  get delTokenBtn() { return this.page.locator(":nth-child(1) > :nth-child(7) > .d-flex > .btn-outline-danger"); }
  get delTokenBtn1() { return this.page.locator(".btn-danger"); }
  
  
 
  // ─── Navigation ─────────────────────────────────────────────────────────────
 
  async clickUserMenu(page) {
    await this.userMenu.click();
  }
 
  async clickManageLink() {
    await this.manageUserLink.waitFor({ state: 'visible' });
    await this.manageUserLink.click();
    await this.page.waitForLoadState('networkidle');
  }
 
  async openEntityTagsTab() {
    await this.entityTagsTab.click();
    await this.page.locator('h4:has-text("Entity tags")').waitFor({ state: 'visible' });
  }
 
  async openActionItemTagsTab() {
    await this.actionItemTagsTab.click();
    await this.page.locator('h4:has-text("Action Item tags")').waitFor({ state: 'visible' });
  }
 
  async openAssessmentTagsTab() {
    await this.assessmentTagsTab.click();
  }
 
  // ─── Validations ────────────────────────────────────────────────────────────
 
  async validateManageUserPage() {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.pageTitle).toContainText('Account Management');
  }
 
  // ─── Field Helpers ───────────────────────────────────────────────────────────
 
  async setFirstName(name) {
    await this.firstName.waitFor({ state: 'visible' });
    await this.firstName.fill(name);
  }
 
  async setLastName(name) {
    await this.lastName.waitFor({ state: 'visible' });
    await this.lastName.fill(name);
  }
 
  async setEmail(email) {
    await this.email.waitFor({ state: 'visible' });
    await this.email.fill(email);
  }
 
  async selectMemberRole(role) {
    const roleIndex = { Admin: 3, Certifier: 4, Member: 5, Contributor: 6 };
    await this.page
      .locator(`:nth-child(${roleIndex[role]}) > [name="role"]`)
      .click({ force: true });
  }
 
  // ─── Add Member ──────────────────────────────────────────────────────────────
 
  async addMemberPositive(firstName, role,msg) {
    await this.addMemberBtn1.click();
    await this.page.waitForTimeout(2000);
    await this.setFirstName(firstName);
    await this.setLastName(firstName + randomNum);
    await this.setEmail(firstName + '@pixeledge.io');
    await this.selectMemberRole(role);
    await Promise.all([
      this.page.waitForResponse(res => res.request().method() === 'POST'),
      this.addMemberBtn2.click({ force: true }),
    ]);
    await this.page.waitForSelector(`text=${msg}`, { state: 'visible' });
    // const emailText = await this.userEmail.first().innerText();
    // expect(emailText).toContain(firstName + '@pixeledge.io');
  }
 
  async addMemberWithout1stName(firstName, role) {
    await this.addMemberBtn1.click();
    await this.setLastName(firstName + randomNum);
    await this.setEmail(firstName + '+' + randomNum + '@pixeledge.io');
    await this.selectMemberRole(role);
    await expect(this.addMemberBtn2).toBeDisabled();
  }
 
  async addMemberWithoutLastName(firstName, role) {
    await this.addMemberBtn1.click({ force: true });
    await this.setFirstName(firstName);
    await this.setEmail(firstName + '+' + randomNum + '@pixeledge.io');
    await this.selectMemberRole(role);
    await expect(this.addMemberBtn2).toBeDisabled();
  }
 
  async addMemberWithInvalidEmail(firstName, role) {
    await this.addMemberBtn1.click();
    await this.setFirstName(firstName);
    await this.setLastName(firstName + randomNum);
    await this.setEmail(firstName + randomNum + '+' + randomNum + '@pixeledge.io');
    await this.selectMemberRole(role);
    await this.page.locator('text=email must be a valid email').waitFor({ state: 'visible' });
    await expect(this.addMemberBtn2).toBeDisabled();
  }
 
  async addMemberWithBlankFields(role) {
    await this.addMemberBtn1.click({ force: true });
    await this.firstName.click();
    await this.lastName.click();
    await this.email.click();
    await this.selectMemberRole(role);
    await this.page.locator('text=First name is required').waitFor({ state: 'visible' });
    await this.page.locator('text=Last name is required').waitFor({ state: 'visible' });
    await this.page.locator('text=Member email is required').waitFor({ state: 'visible' });
    await expect(this.addMemberBtn2).toBeDisabled();
  }
 
  // ─── Update Member ───────────────────────────────────────────────────────────
 
  async updateLastMemberWithAllEntityAccess(email, message) {
    const row = this.page.locator('tr').filter({ hasText: email });
    await row.locator('button:has-text("edit")').click({ force: true });
    await this.entitiesTab.waitFor({ state: 'visible' });
    await this.entitiesTab.click();
    const isChecked = await this.allEntitiesToggleBtn.isChecked();
    if (!isChecked) {
      await this.allEntitiesToggleBtn.click();
    } else {
      console.log('Toggle is already checked');
    }
    await this.updateMemberBtn.scrollIntoViewIfNeeded();
    await this.updateMemberBtn.click();
    await this.page.locator(`text=${message}`).waitFor({ state: 'visible' });
  }
 
  async updateLastMemberWithAllPortfolioAccess(message) {
    await this.editLastMemberBtn.scrollIntoViewIfNeeded();
    await this.editLastMemberBtn.click();
    await this.portfolioTab.waitFor({ state: 'visible' });
    await this.portfolioTab.click();
    await this.allPortfliosToggleBtn.waitFor({ state: 'visible' });
    await this.allPortfliosToggleBtn.click();
    await this.updateMemberBtn.scrollIntoViewIfNeeded();
    await this.updateMemberBtn.click({ force: true });
    await this.page.locator(`text=${message}`).waitFor({ state: 'visible' });
  }
 
  // ─── Resend / Status / Search ────────────────────────────────────────────────
 
  async resendJoinRequestToLastMember(message) {
    await this.resendLastAddedMemberRequest.scrollIntoViewIfNeeded();
    await this.resendLastAddedMemberRequest.click();
    await this.page.locator(`text=${message}`).scrollIntoViewIfNeeded()
     await this.page.locator(`text=${message}`).waitFor({ state: 'visible' });
  }
 
  async lastAddedmemberJoinStatus(status) {
    await this.memberStatus.scrollIntoViewIfNeeded();
    await expect(this.memberStatus).toContainText(status);
  }
 
  async searchMember(memberName) {
    await this.searchMemberInput.type(memberName);
    await this.page.keyboard.press('Enter');
    await this.page.waitForLoadState('networkidle');
    await this.page.locator(`text=${memberName}`).waitFor({ state: 'visible' });
  }
 
  // ─── Delete Member ───────────────────────────────────────────────────────────
 
  async deleteLastMemberPositive(msg) {
    await this.delLastMember.scrollIntoViewIfNeeded();
    await this.delLastMember.click();
    await this.confirmDelMemberBtn.check();
    await this.delMemberBtn.click({ force: true });
    await this.page.locator(`text=${msg}`).waitFor({ state: 'visible' });
  }
 
  async deleteLastMemberNegative() {
    await this.delLastMember.scrollIntoViewIfNeeded();
    await this.delLastMember.click();
    await expect(this.delMemberBtn).toBeDisabled();
  }
 
  // ─── Export Members ──────────────────────────────────────────────────────────
 
  async exportMembers(orgName) {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.exportMemberBtn.click(),
    ]);
    const fileName = download.suggestedFilename();
    expect(fileName).toBe(`${orgName} - Members.csv`);
  }
 
  // ─── Entity Tags ─────────────────────────────────────────────────────────────
 
  async addEntityTag(name, desc) {
    const tagRandom = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    await this.addTagBtn.click();
    await this.entityTagName.fill(name + tagRandom + tagRandom);
    await this.entityTagDescription.fill(desc);
    await this.saveTagBtn.click();
    await this.page.locator(`text=${name + tagRandom + tagRandom}`).waitFor({ state: 'visible' });
  }
 
  async updateEntityTag(name) {
    await this.editTagBtn.click();
    await this.entityTagName.clear();
    await this.entityTagName.fill(name + randomNum);
    await this.saveTagBtn.click();
    await this.page.locator(`text=${name + randomNum}`).waitFor({ state: 'visible' });
  }
 
  async deleteEntityTag() {
    await this.delTagBtn1.click();
    await this.confirmDelEntityBtn.waitFor({ state: 'visible' });
    await this.confirmDelEntityBtn.check();
    await Promise.all([
      this.page.waitForResponse(res => res.request().method() === 'DELETE'),
      this.delTagBtn2.click(),
    ]);
  }
 
  // ─── Action Item Tags ────────────────────────────────────────────────────────
 
  async addActionItemTag(name, desc) {
    await this.addActionItemTagBtn.click();
    await this.actionItemTagName.fill(name + randomNum);
    await this.actionItemTagDesc.fill(desc);
    await this.saveActionItemTagBtn.click();
    await this.page.locator(`text=${name + randomNum}`).waitFor({ state: 'visible' });
  }
 
  async updateActionItemTag(name) {
    await this.editActionItemTagBtn.click();
    await this.actionItemTagName.clear();
    await this.actionItemTagName.fill(name + randomNum);
    await this.saveActionItemTagBtn.click();
    await this.page.locator(`text=${name + randomNum}`).waitFor({ state: 'visible' });
  }
 
  async deleteActionItemTag() {
    await this.delActionItemTagBtn1.click();
    await this.confirmDelActionItem.waitFor({ state: 'visible' });
    await this.confirmDelActionItem.check();
    await this.delActionItemTagBtn2.click();
  }
 
  // ─── Assessment Tags ─────────────────────────────────────────────────────────
 
  async addAssessmentTag(name, desc) {
    await this.addTagBtn.click();
    await this.actionItemTagName.fill(name + randomNum);
    await this.actionItemTagDesc.fill(desc);
    await this.saveActionItemTagBtn.click();
    await this.page.locator(`text=${name + randomNum}`).waitFor({ state: 'visible' });
  }
 
  async updateAssessmentTag(name) {
    await this.editActionItemTagBtn.click();
    await this.actionItemTagName.clear();
    await this.actionItemTagName.fill(name + randomNum);
    await this.saveActionItemTagBtn.click();
    await this.page.locator(`text=${name + randomNum}`).waitFor({ state: 'visible' });
  }
 
  // ─── Organization Credentials ────────────────────────────────────────────────
 
  async addOrganizationCredentials(tokenName) {
    await this.orgCredentialsTab.click();
    await this.addKeyBtn.click();
    await this.tokenNameTxt.fill(tokenName);
    await this.addKeyBtn2.click();
    await this.page.locator(`text=${tokenName}`).waitFor({ state: 'visible' });
  }
 
  async updateOrganizationCredentials(newTokenName) {
    await this.orgCredentialsTab.click();
    await this.editKeyBtn.click();
    await this.tokenNameTxt.fill(newTokenName);
    await this.updateKeyBtn.click();
    await this.page.locator(`text=${newTokenName}`).waitFor({ state: 'visible' });
  }
 
  async deleteOrganizationCredentials() {
    await this.orgCredentialsTab.click();
    const keyTxt = await this.tokenInnerText.innerText();
    await this.delTokenBtn.click();
    await this.delTokenBtn1.click();
    await expect(this.page.locator(`text=${keyTxt}`)).not.toBeVisible();
  }
}
 