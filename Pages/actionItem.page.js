import { expect } from '@playwright/test';

// Moved randomNum here so it's accessible to all methods
const randomNum = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

export class actionItemPage {
  constructor(page) {
    this.page = page;
  
   // ---------- Locators ----------
   this.actionItemTitleInput       = page.getByRole('textbox', { name: 'Title * Description' }); 
   this.actionItemDescriptionInput = page.getByRole('textbox').filter({ hasText: 'Enter Action Item Description' });
   this.selectAssigneeDropdown     = page.getByRole('combobox', { name: 'Select a user...' });  
   this.selectSpecificAssignee     = page.getByRole('option', { name: 'Nareta Kataria' });
   this.createActionItemButton     = page.getByRole('button', { name: 'Create Action Item', exact: true });  
   this.editOrgActionItemButton    = page.getByRole('button', { name: 'edit' }).first();
   this.updateActionItemButton     = page.getByRole('button', { name: 'Update' , exact:true});
   this.deleteActionItemButton     = page.getByRole('button', { name: 'delete Delete Action Item' });
   this.confirmDeleteButton        = page.getByRole('dialog').filter({ hasText: 'warningDelete Action Item -' }).getByRole('checkbox');   
   this.deleteButton               = page.getByRole('button', { name: 'Delete', exact: true });
   this.expandSection              = page.getByText('chevron_right').first();
   this.editActionItemDropdown    =   page.getByRole('button', { name: 'expand_less Action Items · 1' })
   this.navigateToMyActionItemsTab    = page.getByRole('link', { name: 'Action Items' });
   this.selectEntityDropdownMyActionItem  = page.getByRole('dialog').getByRole('combobox', { name: 'Select an entity...' })
   this.specificEntity               = page.locator('.dropdown-item').first();
   this.correctiveActionQuestionDropdown = page.getByText('expand_more').first();
   this.correctiveActionItemButton = page.getByRole('button', { name: 'add New Action Item' }).first()
   this.correctiveActionDashboardTab = page.getByRole('link', { name: 'Corrective Actions' });
   this.checkVerifiedCheckbox = page.getByRole('checkbox', { name: 'Verified' });
   this.closeButton = page.getByRole('button', { name: 'Close' }).first();
   this.verifiedBadge  = page.getByText('verified').nth(1);
   this.navigateToCommentsTab = page.getByRole('tab', { name: 'Comments' });
   this.addCommentInputfield = page.getByRole('textbox', { name: 'comment' });
   this.saveCommentsbutton = page.getByRole('button', { name: 'send' });
   this.deleteCommentBtn = page.getByRole('button', { name: 'delete' }).first()
   this.navigateToEvidenceTab = page.getByRole('tab', { name: 'Evidence Files' });
   this.uploadEvidenceFilButton1 = page.getByRole('button', { name: 'Upload' });
   this.uploadEvidenceFilButton2 = page.getByRole('button', { name: 'Upload evidence file' })
   this.inputFile = page.locator('input[type="file"]');
   this.deleteEvidenceFile = page.getByRole('button', { name: 'delete', exact: true });
   this.confirmDeleteEvidenceFileButton = page.getByRole('button', { name: 'Delete', exact: true });
   this.historyButton = page.getByRole('button', { name: 'history' }).first();
   this.notificationSettingDropdwon =  page.getByRole('button', { name: 'notifications Notification' });
   this.notificationToggles = page.locator('input[type="checkbox"]');
   this.notificationToast = page.getByText('Your notification preference has been updated');
   this.exportButton = page.getByRole('button', { name: 'download Export ' });
   this.exportExcelButton = page.getByRole('button', { name: 'Export Excel download' });  
   this.searchByName = page.getByRole('textbox', { name: 'Search' });
   this.showColumnButton = page.getByRole('button', { name: 'Show Column ' });
   this.columsCheckboxes = page.locator('.dropdown-menu').getByRole('checkbox');
   this.assignByFilter = page.getByRole('combobox', { name: 'Select an assignor...' });
   this.firstAssignorOption = page.locator('#assigned-by-item-0');
   this.assignToFilter = page.getByRole('combobox', { name: 'Select an assignee...' });
   this.firstAssigneeOption = page.locator('#assigned-to-item-0');
   this.entityFilter = page.getByRole('combobox', { name: 'Select an entity...' });
   this.selectFirstEntity = page.locator('#entity-item-0');
   this.assessmentFilter = page.getByRole('combobox', { name: 'Select an Assessment...' });
   this.firstAssessmentOption = page.locator('#audit-item-0');
   this.statusFilter = page.getByRole('button', { name: 'All ' }).first();
   this.firstStatusOption = page.getByRole('button', { name: 'Assigned' });
   this.filterByLevel = page.locator('#dropdown-level');
   this.firstLevelOption = page.getByRole('button', { name: 'Question Level' });
   this.filterByTags = page.getByRole('combobox', { name: 'All' });
   this.firstTagOption = page.locator('#tags-item-0');
   this.moreFilterButton = page.getByRole('button', { name: 'More Filters ' });
   this.moreTypesFilter = page.getByRole('button', { name: 'Types' }); 
   this.firstTypeOption = page.getByRole('button', { name: 'Administrative' });
   this.moreQuestionTagsFilter = page.getByRole('combobox', { name: 'Select Question Tags' });
   this.firstQuestionTagOption = page.locator('#question-tags-item-0');
   this.moreEntityTagFilter = page.getByRole('combobox', { name: 'Select Entity Tags' });
   this.firstEntityTagOption = page.locator('#entity-tags-item-0');
   this.moreSelectYearFilter = page.getByRole('textbox', { name: 'Select Year' });
   this.selectFirstYearOption = page.getByText('2017', { exact: true });
   this.resetButton = page.getByRole('button', { name: 'restart_alt Clear Filters' });
   this.moreDateUpdatedFilter = page.getByRole('textbox', { name: 'Date Updated' });
   this.firstDateUpdatedOption = page.getByRole('option', { name: 'Choose Wednesday, March 4th,' });
   this.secondDateUpdatedOption = page.getByRole('option', { name: 'Choose Friday, March 6th,' });
   this.navigateToVisulizationScreen = page.getByRole('button', { name: 'bar_chart' });
   this.visulizationScreenLastDayOption = page.getByRole('button', { name: 'Last day' });
   this.visulizationScreenLastSevenDaysOption = page.getByRole('button', { name: 'Last 7 days' });
   this.visulizationScreenLastThirtyDaysOption = page.getByRole('button', { name: 'Last 30 days' });
   this.visulizationScreenLastYearOption = page.getByRole('button', { name: 'date_range Last year ' });
   this.visulizationScreenStatusDropdown = page.getByRole('button', { name: 'All ' });
   this.visualizationScreenAssignedStatus = page.getByRole('button', { name: 'Assigned' });
   this.visualizationScreenSubmittedStatus = page.getByRole('button', { name: 'Submitted' });
   this.visualizationScreenIncompleteStatus = page.getByRole('button', { name: 'Incomplete' });
   this.visualizationScreenAcceptedStatus = page.getByRole('button', { name: 'Accepted' });
   this.actionItemsTags = page.getByRole('combobox', { name: 'All' });
   this.actionItemTagsFirstOption = page.locator('#tags-item-0');
   this.actionItemTagsANDFilterOption = page.getByRole('combobox').nth(4);
   this.navigateToProfile = page.getByRole('link', { name: 'Profile' });
   this.navigateToAllActionItemTab = page.getByRole('tab', { name: 'All Action Items' });
  }


  // ---------- Actions ----------

  async selectAssignee() {
    await this.selectAssigneeDropdown.click();
    await this.selectAssigneeDropdown.fill('na');
    await this.selectSpecificAssignee.click();
  }

  async saveActionItem() {
    await expect(this.createActionItemButton).toBeEnabled();
    await Promise.all([
      this.page.waitForResponse(res =>
        res.url().includes('/action-items') && res.status() === 201
      ),
      this.createActionItemButton.click()
    ]);
  }

  async navigateToMyActionItems() {
    await this.navigateToMyActionItemsTab.click();
  }

  getAddActionItemButton(level = 'Organization Level') {
    const buttons = this.page.getByRole('button', { name: 'add New Action Item' });
    if (level === 'Assessment Level') return buttons.nth(1);
    return buttons.first();
  }

  getEditActionItemButton(level = 'org') {
    const buttons = this.page.getByRole('button', { name: 'edit' });
    switch (level) {
      case 'org': return buttons.first();
      case 'entity': return buttons.nth(1);
      case 'assessment': return buttons.last();
      default: throw new Error(`Unknown level: ${level}`);
    }
  }

  // ---------- Methods ----------

  async CreateOrganizationLevelActionItem(title, description,msg) {
    const Title = title + randomNum;
    await this.getAddActionItemButton('Organization Level').click();
    await this.actionItemTitleInput.fill(Title);
    await this.actionItemDescriptionInput.fill(description);
    await this.selectAssignee();
    await this.saveActionItem();
    await this.page.waitForSelector(`text=${msg}`, { state: 'visible' });
    await this.page.waitForSelector(`text=${Title}`, { state: 'visible' });
  }

  async editOrgLevelActionItem(updatedtitle,msg) {
    const UpdatedTitle = updatedtitle + randomNum;
    await this.getEditActionItemButton('org').click();
    await this.actionItemTitleInput.fill(UpdatedTitle);
    await this.updateActionItemButton.click();
    await this.page.waitForSelector(`text=${msg}`, { state: 'visible' });
    await this.page.waitForSelector(`text=${UpdatedTitle}`, { state: 'visible' });
  }

  async deleteOrgLevelActionItem() {
    await this.page.reload();
    await this.getEditActionItemButton('org').click();
    await this.deleteActionItemButton.click();
    await this.confirmDeleteButton.check();
    await this.deleteButton.click();
  }

  async createEntityLevelActionItem(title, description,msg) {
    const Title = title + randomNum;
    const Description = description + randomNum;
    await this.getAddActionItemButton('Entity Level').click();
    await this.actionItemTitleInput.fill(Title);
    await this.actionItemDescriptionInput.fill(Description);
    await this.selectAssignee();
    await this.saveActionItem();
    await this.page.waitForSelector(`text=${msg}`, { state: 'visible' });
    await this.page.waitForSelector(`text=${Title}`, { state: 'visible' });
  }

  async editEntityLevelActionItem(updatedtitle,msg) {
    const UpdatedTitle = updatedtitle + randomNum;
    await this.getEditActionItemButton('entity').click();
    await this.actionItemTitleInput.fill(UpdatedTitle);
    await this.updateActionItemButton.click();
    await this.page.waitForSelector(`text=${msg}`, { state: 'visible' });
    await this.page.waitForSelector(`text=${UpdatedTitle}`, { state: 'visible' });
  }

  async deleteEntityLevelActionItem(msg) {
    await this.page.reload();
    await this.getEditActionItemButton('entity').click();
    await this.deleteActionItemButton.click();
    await this.confirmDeleteButton.check();
    await this.deleteButton.click();
    await this.page.waitForSelector(`text=${msg}`, { state: 'visible' });
  }

  async createQuestionLevelActionItem(title, description,msg) {
    const Title = title + randomNum;
    const Description = description + randomNum;
    await this.expandSection.click({ timeout: 40000 });
    await this.getAddActionItemButton('Assessment Level').click();
    await this.actionItemTitleInput.fill(Title);
    await this.actionItemDescriptionInput.fill(Description);
    await this.selectAssignee();
    await this.saveActionItem();
    await this.editActionItemDropdown.click();
    await this.page.waitForSelector(`text=${msg}`, { state: 'visible' });
    await this.page.waitForSelector(`text=${Title}`, { state: 'visible' });
  }

  async editQuestionLevelActionItem(updatedtitle,msg) {
    const UpdatedTitle = updatedtitle + randomNum;
    await this.expandSection.click({ timeout: 40000 });
    await this.editActionItemDropdown.click();
    await this.getEditActionItemButton('assessment').click();
    await this.actionItemTitleInput.fill(UpdatedTitle);
    await this.updateActionItemButton.click();
    await this.page.waitForSelector(`text=${msg}`, { state: 'visible' });
    await this.page.waitForSelector(`text=${UpdatedTitle}`, { state: 'visible' });
  }

  async deleteQuestionLevelActionItem(msg) {
    await this.expandSection.click({ timeout: 40000 });
    await this.editActionItemDropdown.click();
    await this.getEditActionItemButton('assessment').click();
    await this.deleteActionItemButton.click();
    await this.confirmDeleteButton.check();
    await this.deleteButton.click();
    await this.page.waitForSelector(`text=${msg}`, { state: 'visible' });
  }

async createActionItemFromMyActionItems(title, description, msg) {
  const Title = title + randomNum;
  const Description = description + randomNum;
  await this.navigateToMyActionItems();
  await this.getAddActionItemButton('Organization Level').click();
  await this.actionItemTitleInput.fill(Title);
  await this.selectEntityDropdownMyActionItem.click();
  await this.specificEntity.click();
  await this.actionItemDescriptionInput.fill(Description);
  await this.selectAssignee();
  // ✅ Explicit wait for API response
  await Promise.all([
    this.page.waitForResponse(resp =>
      resp.url().includes('/action-items') && resp.status() === 201
    ),
    this.saveActionItem()
  ]);
  await this.page.waitForSelector(`text=${msg}`, { state: 'visible' });
  await this.page.waitForSelector(`text=${Title}`, { state: 'visible' });
}

  async editActionItemFromMyActionItems(updatedtitle) {
    const UpdatedTitle = updatedtitle + randomNum;
    await this.page.reload();
    await this.navigateToMyActionItems(); 
    await this.getEditActionItemButton('entity').click();
    await this.actionItemTitleInput.fill(UpdatedTitle);
    await this.updateActionItemButton.click();
    await this.page.waitForSelector(`text=${UpdatedTitle}`, { state: 'visible' });
  }

  async deleteActionItemFromMyActionItems() {
    await this.page.reload();
    await this.navigateToMyActionItems();
    await this.getEditActionItemButton('entity').click();
    await this.deleteActionItemButton.click();
    await this.confirmDeleteButton.check();
    await this.deleteButton.click();
  }

  async createCorrectiveActionItem(description,msg) {
    const Description = description + randomNum;
    await this.correctiveActionDashboardTab.click();
    await this.correctiveActionItemButton.click();
    await this.actionItemDescriptionInput.fill(Description);
    await this.selectAssignee();
    await this.saveActionItem();
    await this.page.waitForSelector(`text=${msg}`, { state: 'visible' });
  }

  async editCorrectiveActionItem(updatedtitle,msg) {
    const UpdatedTitle = updatedtitle + randomNum;
    await this.correctiveActionDashboardTab.click();
    await this.correctiveActionQuestionDropdown.click();
    await this.getEditActionItemButton('assessment').click();
    await this.actionItemTitleInput.fill(UpdatedTitle);
    await this.updateActionItemButton.click();
    await this.page.waitForSelector(`text=${msg}`, { state: 'visible' });
  }

  async deleteCorrectiveActionItem(msg) {
    await this.correctiveActionDashboardTab.click();
    await this.correctiveActionQuestionDropdown.click();
    await this.getEditActionItemButton('assessment').click();
    await this.deleteActionItemButton.click();
    await this.confirmDeleteButton.check();
    await this.deleteButton.click();
    await this.page.waitForSelector(`text=${msg}`, { state: 'visible' });
  }

  async viewVerifiedStatus() {
    await this.getEditActionItemButton('entity').click();
    await this.checkVerifiedCheckbox.check();
    await this.closeButton.click({ timeout: 40000 });
    await expect(this.verifiedBadge).toBeVisible();
  }

  async addComments(comments,msg) {
    await this.getEditActionItemButton('entity').click();
    await this.navigateToCommentsTab.click();
    await this.addCommentInputfield.fill(comments);
    await this.saveCommentsbutton.click();
    await expect(this.page.getByText(msg)).toBeVisible({timeout: 10000}); 
    await this.closeButton.click();
  }

  async editComments(updatedComments) {
    await this.getEditActionItemButton('entity').click();
    await this.navigateToCommentsTab.click();
    await this.addCommentInputfield.fill(updatedComments);
    await this.saveCommentsbutton.click();
    await expect(this.page.getByText(updatedComments)).toBeVisible(); 
    await this.closeButton.click();
  }

  async deleteComments(msg) {
    await this.getEditActionItemButton('entity').click();
    await this.navigateToCommentsTab.click();
    await this.page.waitForLoadState('networkidle');
    await this.deleteCommentsButton.click();
    await this.page.waitForSelector(`text=${msg}`, { state: 'visible' });
  }

  async uploadEvidenceFiles(filePath) {
    const path = require('path');
    const fullName = path.basename(filePath);
    const fileName = path.parse(fullName).name;
    await this.getEditActionItemButton('org').click();
    await this.navigateToEvidenceTab.click();
    await this.uploadEvidenceFilButton1.click();
    await this.inputFile.waitFor({ state: 'attached', timeout: 10000 });
    await this.inputFile.setInputFiles(filePath);
    await this.uploadEvidenceFilButton2.click();
    const fileLocator = this.page.getByRole('link', { name: fileName });
    await fileLocator.waitFor({ state: 'visible', timeout: 15000 });
    await expect(fileLocator).toBeVisible();
  }

  async deleteEvidenceFiles() {
    await this.page.reload();
    await this.getEditActionItemButton('org').click();
    await this.navigateToEvidenceTab.click();
    await this.deleteEvidenceFile.click();
    await this.confirmDeleteEvidenceFileButton.click();
  }

  async viewActionItemHistory() {
    await this.navigateToMyActionItems();
    await this.historyButton.click();
    const historyTitle = this.page.getByText('Action Item History');
    await expect(historyTitle).toBeVisible();
  }

  async turnOffNotifications() {
    await this.navigateToMyActionItems();
    await this.notificationSettingDropdwon.click();
    const count = await this.notificationToggles.count();
    let anyOn = false;

  for (let i = 0; i < count; i++) {
    const toggle = this.notificationToggles.nth(i);

    if (await toggle.isChecked()) {
      anyOn = true;

      await toggle.click();
      await expect(toggle).not.toBeChecked();
      await expect(this.notificationToast.last()).toBeVisible();
      await expect(this.notificationToast.last()).toBeHidden({ timeout: 5000 });
    }
  }
  if (!anyOn) {
    console.log('All toggles are already OFF');
  }
}

  async turnOnNotifications() {
    await this.navigateToMyActionItems();
    await this.notificationSettingDropdwon.click();
    const count = await this.notificationToggles.count();
    let anyOff = false;

    for (let i = 0; i < count; i++) {
      const toggle = this.notificationToggles.nth(i);
      if (!(await toggle.isChecked())) {
        anyOff = true;
        await toggle.click();
        await expect(toggle).toBeChecked();
        await expect(this.notificationToast.last()).toBeVisible();
        await expect(this.notificationToast.last()).toBeHidden({ timeout: 5000 });
      }
    }
    if (!anyOff) console.log('All toggles are already ON');
  }

 async exportActionItems(message) {
  await this.navigateToMyActionItems();
  await this.exportButton.click();
  await this.exportExcelButton.click();
  await this.page.waitForSelector(`text=${message}`, { state: 'visible' });
 }

 async searchActionItem() { 
  await this.navigateToMyActionItems();
  const table = this.page.locator('.table-responsive');
  const noDataMessage = this.page.getByText(/No action items/i);

  await this.searchByName.fill("PlaywrightTestName+QA-455", { timeout: 40000 });
  try {
    await expect(table).toContainText("PlaywrightTestName+QA-455", { timeout: 5000 });
  } catch {
    await expect(noDataMessage).toBeVisible();
  }
  await this.searchByName.clear();

  await this.searchByName.fill("69a4b90da7fc0766951061", { timeout: 40000 });
  try {
    await expect(table).toContainText("69a4b90da7fc0766951061", { timeout: 5000 });
  } catch {
    await expect(noDataMessage).toBeVisible();
  }
  await this.searchByName.clear();

  await this.searchByName.fill("Playwright Test description455", { timeout: 40000 });
  try {
    await expect(table).toContainText("Playwright Test description455", { timeout: 5000 });
  } catch {
    await expect(noDataMessage).toBeVisible();
  }
}

async showColumnsInActionItemTable() {
  await this.navigateToMyActionItems();
  await this.showColumnButton.click();
  const items = this.page.locator('.dropdown-menu .form-check');
  const count = await items.count();

  for (let i = 0; i < count; i++) {
    const item = items.nth(i);
    const checkbox = item.locator('input[type="checkbox"]');
    await checkbox.waitFor({ state: 'visible' });
    const wasChecked = await checkbox.isChecked();
    await item.click();
    if (wasChecked) {
      await expect(checkbox).not.toBeChecked();
    } else {
      await expect(checkbox).toBeChecked();
    }
    const toast = this.page.getByText(
      "The action Item table's column has been updated successfully"
    );
    await expect(toast).toBeVisible();
    await expect(toast).toBeHidden({ timeout: 5000 });
  }
}

 async filterActionItems() { 

   await this.navigateToMyActionItems();
   await this.assignByFilter.click();
   await this.firstAssignorOption.click();
   await this.assignToFilter.click();
   await this.firstAssigneeOption.click();
   await this.entityFilter.click();
   await this.selectFirstEntity.click();
   await this.assessmentFilter.click();
   await this.firstAssessmentOption.click();
   await this.statusFilter.click();
   await this.firstStatusOption.click();
   await this.filterByLevel.click();
   await this.firstLevelOption.click();
   await this.filterByTags.click();
   await this.firstTagOption.click();
   await this.moreFilterButton.click();
   await this.moreTypesFilter.click();
   await this.firstTypeOption.click();
   await this.moreFilterButton.click();
   await this.moreQuestionTagsFilter.click();
   await this.firstQuestionTagOption.click();
   await this.moreEntityTagFilter.click();
   await this.firstEntityTagOption.click();
   await this.moreSelectYearFilter.click();
   await this.selectFirstYearOption.click();
   await this.moreDateUpdatedFilter.click();
   await this.firstDateUpdatedOption.click();
   await this.secondDateUpdatedOption.click();
}

async resetFilters() {
  await this.resetButton.click(); 
  await this.page.waitForLoadState('networkidle');
  await expect(this.page.locator('.table-responsive')).toBeVisible();
}

async actionItemTagsANDFilter() 
{
  await this.navigateToMyActionItems();
  await this.actionItemsTags.click();
  await this.actionItemTagsFirstOption.click();
  await this.actionItemTagsANDFilterOption.selectOption('AND');
  await this.actionItemTagsANDFilterOption.click();
  await this.resetFilters();
  await this.actionItemsTags.click();
  await this.actionItemTagsFirstOption.click();
  await this.actionItemTagsANDFilterOption.selectOption('OR');
  await this.actionItemTagsANDFilterOption.click();
  await this.resetFilters();
}

async actionItemDragANDDrop() { 

  await this.navigateToMyActionItems();
   const column = this.page.locator('table thead tr th').nth(0);
  const box = await column.boundingBox();
   await this.page.mouse.move(box.x + box.width, box.y + box.height / 2);
  await this.page.mouse.move(box.x + box.width + 100, box.y + box.height / 2);
}

async viewMyActionItems() {

  await this.navigateToProfile.click();
  await this.navigateToAllActionItemTab.click();
    await expect(this.page).toHaveURL('https://www.ermassess.com/profile/69786a8c34a62/action-items');
    await expect(this.page.getByText('benjamin.keya+playwright@')).toBeVisible();
}

async visualizationScreenYearFilter()
{
  await this.navigateToMyActionItems();
  await this.navigateToVisulizationScreen.click();
  await this.visulizationScreenLastYearOption.click();
  await this.visulizationScreenLastDayOption.click();
  const graph = this.page.locator('.card-body').first();
  await expect(graph).toBeVisible();
  await  this.page.waitForTimeout(3000);
  await this.visulizationScreenLastDayOption.click();
  await this.visulizationScreenLastSevenDaysOption.click();
  await expect(graph).toBeVisible();
  await  this.page.waitForTimeout(3000);
  await this.visulizationScreenLastSevenDaysOption.click();
  await this.visulizationScreenLastThirtyDaysOption.click();
  await expect(graph).toBeVisible();
  await  this.page.waitForTimeout(3000);
  

}
async visualizationScreenStatusFilter() 
{
  await this.navigateToMyActionItems();
  await this.navigateToVisulizationScreen.click();
  await this.visulizationScreenStatusDropdown.click();
  await this.visualizationScreenAssignedStatus.click();
  const graph = this.page.locator('.card-body').first();
  await expect(graph).toBeVisible();
  await  this.page.waitForTimeout(3000);
  await this.visualizationScreenAssignedStatus.click();
  await this.visualizationScreenSubmittedStatus.click();
  await expect(graph).toBeVisible();
  await  this.page.waitForTimeout(3000);
  await this.visualizationScreenSubmittedStatus.click();
  await this.visualizationScreenIncompleteStatus.click();
  await expect(graph).toBeVisible();
  await  this.page.waitForTimeout(3000);
  await this.visualizationScreenIncompleteStatus.click();
  await this.visualizationScreenAcceptedStatus.click();
  await expect(graph).toBeVisible();
}
}
 module.exports = {actionItemPage}