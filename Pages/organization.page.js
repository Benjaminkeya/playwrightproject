import { expect } from '@playwright/test';

const randomNum = Math.floor(Math.random() * 1000) + 1;

export class organizations {
  
    constructor(page) {
    this.page = page;
  }

  // --- Organization Selectors ---
    get orgDropdown() { return this.page.getByRole('button', { name: '1PixelEdge Test Automation ' }); }
    get orgNameLink() { return this.page.getByRole('link', { name: '1PixelEdge Test Automation' }); }
    get selectedOrg() { return this.page.locator('.dropdown-menu > .active'); }
    get userMenu() { return this.page.locator('#collasible-nav-dropdown'); }
    get profileLink() { return this.page.getByRole('link', { name: 'Profile' }); }
    get reportsTab() { return this.page.locator("//a[normalize-space()='Reports']"); }
    get addNewReportBtn() { return this.page.getByRole('button', { name: 'add Add New' }); }
    get editReportBtn() { return this.page.locator('button.ms-2.btn.btn-outline-primary.btn-sm'); }
    get deleteReportBtn() { return this.page.locator('button.btn.btn-outline-danger.btn-sm'); }
    get confirmCheckboxBtn() { return this.page.locator('.form-check-input'); }
    get confirmDeleteReportBtn() { return this.page.locator('button.btn.btn-danger.btn-sm'); }
      // --- Form Fields ---
    get titleField() { return this.page.locator('#title'); }
    get descriptionField() { return this.page.locator('#description'); }
    get iFrameCodeField() { return this.page.locator('#iframeCode'); }
    get reportTypeField() { return this.page.locator('#reportType'); }
    get assignedToInput() { return this.page.getByPlaceholder('Select a user...'); }
    get selectAssigneeItem() { return this.page.locator('#subscribers-typeahead-item-0'); }
    get isActiveBox() { return this.page.locator('#isActive'); }
    get reportIDField() { return this.page.locator('#workspace_id'); }
  // --- Form Submission ---
    get addBtn() { return this.page.getByRole('button', { name: 'Add Report' }); }
    get editBtn() { return this.page.locator('.sticky-bottom > .ms-2'); }

  // --- PAGE ACTIONS ---
  async clickReportTab() { await this.reportsTab.click(); }

    async switchOrg(orgName) {
       await this.page.waitForLoadState('networkidle');
        await this.orgDropdown.click({force:true});
        // Wait for the specific organization link to be attached and visible
        await this.orgNameLink.click();
        // Efficient Wait: Instead of cy.wait(1000), wait for UI elements to reflect the change
        await expect(this.selectedOrg).toContainText(orgName);
        await expect(this.page.getByRole('button', { name: '1PixelEdge Test Automation ' })).toContainText(orgName);
        await expect(this.page.getByText('Assessments')).toBeVisible();
    }

    async viewSubscriberOrganizations(expectedPath) {
        await this.userMenu.click();
        await this.profileLink.click();
        // Assert current URL matches the expected path
        await expect(this.page).toHaveURL(expectedPath);
    }

    async addReport(title, desc, iframe, userName, reportID, successMsg) {
        const fullTitle = title + randomNum;
        await this.clickReportTab();
        
        await this.addNewReportBtn.click();
        await this.titleField.fill(fullTitle);
        await this.descriptionField.fill(desc);
        await this.iFrameCodeField.fill(iframe);
        // Select by value '1'
        await this.reportTypeField.selectOption('1');
        await this.assignedToInput.fill(userName);
        await this.selectAssigneeItem.click();
        await this.isActiveBox.check();
        await this.reportIDField.fill(reportID);
        await this.addBtn.click({ force: true });
        // Wait for success message to appear and scroll into view automatically
        await expect(this.page.getByText(successMsg)).toBeVisible();
    }

    async editReport(editedTitle, successMsg) {
        const fullTitle = editedTitle + randomNum;
        await this.clickReportTab();
        // Select the first edit button in the list
        await this.editReportBtn.first().click();
        await this.titleField.fill(fullTitle);
        await this.editBtn.click();
        await expect(this.page.getByText(successMsg)).toBeVisible();
        await expect(this.page.getByText(fullTitle)).toBeVisible();
    }

    async deleteReport(successMsg, reportTitle) {
        const fullTitle = reportTitle + randomNum;
        await this.clickReportTab();
        await this.deleteReportBtn.first().click();
        await this.confirmCheckboxBtn.check();
        await this.confirmDeleteReportBtn.click();
        await expect(this.page.getByText(successMsg)).toBeVisible();
        // Verify the deleted title is no longer present
        await expect(this.page.getByText(fullTitle)).not.toBeVisible();
    }
}