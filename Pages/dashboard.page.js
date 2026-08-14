import { expect } from '@playwright/test';
import { time } from 'console';

const randomNum = Math.floor(Math.random() * 1000) + 1;

export class dashboardPage {
  constructor(page) {
    this.page = page;
  }

  // --- Getters for Elements ---
  get userMenu() { return this.page.locator('#collasible-nav-dropdown'); }
  get feedbackBtn() { return this.page.getByText('Feedback'); }
  get feedbackDesc() { return this.page.locator('.modal-body > div > .form-control'); }
  get submitBtn() { return this.page.locator('.modal-footer > .btn-primary'); }
  get message() { return this.page.locator('p.mb-1 > small'); }
  get closeFeedbackModal() { return this.page.locator('.modal-footer > .btn'); }
  get helpBtn() { return this.page.getByText('Help'); }
  get verifyHelpCentrePage() { return this.page.getByText('Help Center'); }
  get searchField() { return this.page.locator('.mb-4 > .form-control'); }
  get searchBtn() { return this.page.getByRole('button', { name: 'Search' }); }
  get firstHelpArticleLink() { return this.page.getByText('Assessment Groups'); }
  get logo() { return this.page.locator('img'); }
  get privacyLink() { return this.page.getByRole('link', { name: 'Privacy Policy' }); }
  get privacyText() {  return this.page.getByText('Privacy policy'); }
  get copyrightText() { return this.page.getByText('Copyright © 2026 ERM'); }
  get whatsNewLink() { return this.page.locator('#whatsNew'); }
  get fileLibraryTab() { return this.page.locator("(//div[@class='border-bottom border-primary nav-item'])[1]"); }
  get filesAndPhotosLink() { return this.page.getByRole('link', { name: 'File Library' }); }
  get descField() { return this.page.locator("//textarea[@id='description']"); }
  get uploadBulkFilesField() { return this.page.locator('.text-center > .mb-0'); }

  // --- Actions ---

  async clickUserMenu() {
    await this.userMenu.click({ force: true });
  }

  async isUserProfileDropDownVisible() {
    await expect(this.userMenu).toBeVisible();
  }

  async clickFileLibraryTab() {
    await this.fileLibraryTab.click({ force: true });
  }

  async addFeedback(description, expectedResponse) {
    await this.feedbackBtn.click({ force: true });
    await this.feedbackDesc.fill(description + randomNum);
    await this.submitBtn.click();
    await expect(this.message).toContainText(expectedResponse);
    await this.closeFeedbackModal.click();
  }

  async verifyDashboard(org) {
    await expect(this.logo).toBeVisible();
    await expect(this.page).toHaveTitle(new RegExp(org));
    // Privacy policy - handles navigation or URL checking
    await this.privacyLink.click();
   await expect(this.privacyText).toBeVisible();

  }

  async helpCenter(searchTerm) {
    await this.helpBtn.click({ force: true });
    await expect(this.verifyHelpCentrePage).toBeVisible();
    await this.searchField.fill(searchTerm);
    
    const responsePromise = this.page.waitForResponse('**/*');
    await this.searchBtn.click();
    await responsePromise;

    await this.firstHelpArticleLink.click({ force: true });
    
    // Playwright handles the "New Tab" specifically:
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.getByRole('link', { name: 'View content on full screen' }).click({ force: true })
    ]);
    await expect(newPage).toHaveURL(/.*\/contents\//);
  }

  async uploadBulkFilesAndPhotos(desc, msg) {
    await expect(this.page).toHaveURL(/.*\/files/);
    await this.page.getByRole('button', { name: 'Bulk File Upload' }).click({ force: true });

    // File selection (point to your local path)
    const files = [
      'test-data/file-sample.jpeg',
      'test-data/file-sample.pdf',
      'test-data/file-sample.docx'
    ];
    
    // Playwright's native file input handling
    await this.page.setInputFiles("input[type='file']", files);

    await this.descField.scrollIntoViewIfNeeded();
    await this.descField.fill(desc + randomNum);
    
    await this.page.locator('#entity-item-0 > span > div').click({ force: true });
    
    const uploadPromise = this.page.waitForResponse(resp => resp.request().method() === 'POST');
    await this.page.getByRole('button', { name: 'Upload Files' }).click({ force: true });
    await uploadPromise;

    await expect(this.page.getByText(msg)).toBeVisible({ timeout: 60000 });
  }

  async downloadAllFilesAsZipped() {
    await this.page.getByRole('button', { name: 'Bulk Download' }).click({ force: true });
    
    const downloadPromise = this.page.waitForEvent('download');
    await this.page.locator('.modal-footer > .btn-primary').click({ force: true });
    const download = await downloadPromise;
    
    // Log filename for verification
    console.log(`Downloaded: ${download.suggestedFilename()}`);
  }

  async updateFileOrPhoto(desc, msg) {
    await this.page.locator('tr:has-text("edit")').locator('button[title="update"]').first().click({ force: true });
    await this.descField.clear();
    await this.descField.fill(desc + randomNum);
    
    await this.page.getByRole('button', { name: 'Update File' }).click({ force: true });
    await expect(this.page.locator('.flex-fill > .mb-3')).toContainText(msg);
  }

  async deleteAFileorPhoto(msg) {
    await this.page.locator("(//select[@class='form-select form-select-sm'])[1]").selectOption('150');
    await this.page.locator(':nth-child(1) > .text-nowrap > .btn-outline-danger').first().click({ force: true });
    await this.page.locator('.form-check-input').check({ force: true });
    
    const deletePromise = this.page.waitForResponse(resp => resp.request().method() === 'DELETE');
    await this.page.getByRole('button', { name: 'Delete' }).click({ force: true });
    await deletePromise;

    await expect(this.page.getByText(msg)).toBeVisible({ timeout: 60000 });
  }
  async whatsNew(label) {
    // 1. Click the 'What's New' link to open the menu/section
    await this.whatsNewLink.click({ force: true });

    // 2. Set up a listener for the new tab (page) that will open
    const pagePromise = this.page.context().waitForEvent('page', { timeout: 60000 });

    // 3. Click the specific link based on the label
    // We use .first() to mimic Cypress .eq(0)
    await this.page.getByText(label).first().click({ force: true });

    // 4. Wait for the new page to actually open
    const newPage = await pagePromise;

    // 5. Assert the URL on the NEW page
    await expect(newPage).toHaveURL(/.*\/contents\//);
    
    // Optional: If you need to do something on that new page, use 'newPage'
    // await newPage.close(); 
  }
}