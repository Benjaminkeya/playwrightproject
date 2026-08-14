 import { expect } from "@playwright/test";
 import { test } from '@playwright/test';
const account = require('../fixtures/erm.json');

export class DataExportModal{
    constructor(page){
        this.page = page;
    }

  // ---------- ELEMENTS ----------
  get entitiesLink(){return this.page.getByRole('link', { name: 'Entities' }); }

  get exportDropdownBtn(){return this.page.getByRole('button', { name: 'download Export' }); }

  get  dataExportBtn(){return this.page.getByText('files', { exact: true });} 

  get protocolDropdwn(){return this.page.getByRole('combobox', { name: 'Select Protocol' });}
  
  get dateTextBox(){return this.page.getByRole('textbox', { name: 'Select Dates' });}

  get calendarHeader(){return this.page.locator('.react-datepicker__current-month').first();}

  get nextMonthBtn(){return this.page.getByRole('button', { name: 'Next Month' });}

  get prevMonthBtn(){return this.page.getByRole('button', { name: 'Previous Month' });}
 
  get selectAllAssesmentChckbx(){return this.page.getByRole('checkbox', { name: 'Select All' });}

  get noAssessmentMsg(){return this.page.getByText('Try using a different protocol.');}

  get exportToExcelBtn(){return this.page.getByRole('button', { name: 'Export To Excel (CSV)' });}

  get exportDataSuccessMsg(){return this.page.getByText('Your Files have been downloaded successfully');}

  get generateDataLinkBtn(){return this.page.getByRole('button', { name: 'Generate Data Link' });}

  get generateLinkSuccessMsg(){return this.page.getByText('Your link has been generated successfully');}

  get dataLinkCopyBtn(){return this.page.getByRole('button', { name: /copy/i }).nth(0)}

  get dataLinkCopyBtnAsmntOrg(){return this.page.getByRole('button', { name: /copy/i }).nth(1)}

  get listResponseCopyBtn(){return this.page.getByRole('button', { name: /copy/i }).nth(1)}

  get dashboardAssessmentsLink(){return this.page.getByRole('link', { name: 'Assessments' });}

  get dataExportAssmntBtn(){return this.page.getByRole('button', { name: 'Data Export unread messages' });}

  get dataExportAssmntLvlBtn(){return this.page.getByRole('button', { name: 'Data Export download' })}

  get orgLevelLink(){return this.page.getByRole('button', { name: 'Hi' });}

  get assessmentReportBtn(){return this.page.getByRole('button', { name: 'Assessment Reporteast' })}

  get inapplicableQuestionsChckbx(){return this.page.getByRole('checkbox', { name: 'Include Inapplicable Questions' })}

  get unansweredQuestionsChckbx(){return this.page.getByRole('checkbox', { name: 'Include Unanswered Questions' })}

  get dashboardActionItemsLink(){return this.page.getByRole('link', { name: 'Action Items' })}

  get actionItemsExportExcelBtn(){return this.page.getByRole('button', { name: 'Export Excel download' })}

  get actionItemsGetLinkBtn(){return this.page.getByRole('button', { name: 'Get Link content_copy' })}

  get exportEntitiesListBtn(){return this.page.getByRole('button', { name: 'file_download Export Entities' })}

  get exportAssessmentListBtn(){return this.page.getByRole('button', { name: 'Assessment List file_download' })}
   
  



// ---------- PAGE ACTIONS ----------
    async openDashboardAssessments(){
        await this.dashboardAssessmentsLink.click();
        await expect(this.dashboardAssessmentsLink).toBeVisible();
        await this.openDataExportModalAssmnt();
    }
    async openOrgLevelLink(){
      await this.orgLevelLink.click();
      await expect(this.orgLevelLink).toBeVisible();
      await this.openDataExportModalOrgLevel();
    }
    async openDataExportModal(){
        await this.page.waitForLoadState('networkidle');
        await expect(this.exportDropdownBtn).toBeVisible();
        await this.exportDropdownBtn.click();
        await expect(this.dataExportBtn).toBeVisible();
        await this.dataExportBtn.click();
        await expect(this.dataExportBtn).toBeEnabled();
    }
    async openDataExportModalAssmnt(){
        await this.page.waitForLoadState('networkidle');
        await expect(this.exportDropdownBtn).toBeVisible();
        await this.exportDropdownBtn.click();
        await expect(this.dataExportAssmntBtn).toBeVisible();
        await this.dataExportAssmntBtn.click();
        await expect(this.dataExportAssmntBtn).toBeEnabled();
    }
    async openDataExportModalOrgLevel(){
        await expect(this.dataExportAssmntBtn).toBeVisible();
        await this.dataExportAssmntBtn.click();
    }
    async openDataExportModalAssmntLevel(){
        await this.page.waitForLoadState('networkidle');
        await expect(this.exportDropdownBtn).toBeVisible();
        await this.exportDropdownBtn.click();
        await expect(this.dataExportAssmntLvlBtn).toBeVisible();
        await this.dataExportAssmntLvlBtn.click();
    }
    protocolName(name){return this.page.getByRole('option', { name });}

    async selectProtocol(name){
        await this.protocolDropdwn.click();
        await this.protocolDropdwn.fill(name);
        const ProtocolNameOption = this.protocolName(name);
        await ProtocolNameOption.waitFor({ state: 'visible', timeout: 15000 }); // wait for option to appear after typing
        await expect(ProtocolNameOption).toBeVisible();
        await ProtocolNameOption.click();
    }
    // Helper to get dynamic dates
    getDynamicDates() {
        const today = new Date();
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - 30); //current date - 30
        const endDate = new Date(today);
        endDate.setDate(today.getDate() + 30); //current date + 30
        return { startDate, endDate };
    }
  // Get the day suffix
    getDaySuffix(day) {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
          case 1: return 'st';
          case 2: return 'nd';
          case 3: return 'rd';
          default: return 'th';
        }
    }
  // Helper to format date for calendar into the exact string the calendar option expects - "Choose Thursday, January 1, 2026"
    formatDateOption(date) {
      const day = date.getDate();
      const suffix = this.getDaySuffix(day);
      const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
      const formatted = date.toLocaleDateString('en-US', options);
      return `Choose ${formatted.replace(day, day + suffix)}`;
    }
   async navigateToMonth(date) {
      const targetMonth = date.toLocaleString('en-US', { month: 'long' });
      const targetYear = date.getFullYear();
      let headerText = await this.calendarHeader.textContent();
      // Determine if we need to go forward or backward
      const targetDate = new Date(`${targetMonth} 1, ${targetYear}`);
      const [currentMonth, currentYear] = headerText.split(' ');
      const currentDate = new Date(`${currentMonth} 1, ${currentYear}`);
      const navButton = targetDate > currentDate ? this.nextMonthBtn : this.prevMonthBtn;
      // Loop until the correct month/year is visible
      const headerLocator = this.calendarHeader;
        for (let i = 0; i < 12; i++) {  // max 12 months navigation
            const headerText = await headerLocator.textContent();
            if (headerText.includes(targetMonth) && headerText.includes(targetYear)) {
                break; // month is visible, stop navigating
            }
            await navButton.click();  // click next/prev
            await this.page.waitForTimeout(300);
        }
    }
      // Click a date in the calendar
    async selectDate(date) {
        await this.navigateToMonth(date);
        const optionText = this.formatDateOption(date);
        const targetMonth = date.toLocaleString('en-US', { month: 'long' });
        const targetYear = date.getFullYear();
        const monthCalendar = this.page.locator(`[role="rowgroup"][aria-label="Month ${targetMonth}, ${targetYear}"]`);
        const option = monthCalendar.locator(`[role="gridcell"][aria-label="${optionText}"]:not(.react-datepicker__day--outside-month)`);
        await option.click();
    }
      // Select both start and end dates
    async selectDateRange() {
          const { startDate, endDate } = this.getDynamicDates();
          await this.dateTextBox.click(); // open calendar
          await this.selectDate(startDate);
          await this.selectDate(endDate);
          await Promise.race([
             this.selectAllAssesmentChckbx.waitFor({ state: 'visible'}),
             this.noAssessmentMsg.waitFor({ state: 'visible'})
            ]);
        // Check which element is visible
        const noAssmntMsgIsVisible = await this.noAssessmentMsg.isVisible();
        console.log('No assessments found in date range — skipping export');
       if (noAssmntMsgIsVisible) {
            test.skip(true, 'No assessments found in selected date range — skipping test');
        }
        await this.selectAllAssesmentChckbx.check();
        return true      
    }
    async selectAssessment(){
           await expect(this.selectAllAssesmentChckbx).toBeVisible({ timeout: 10000 });
           await this.selectAllAssesmentChckbx.check();
    }
    async clickExportToExcel(){
              await this.exportToExcelBtn.click({ force: true });
              await expect(this.exportToExcelBtn).toBeVisible();
    }
    async ClickGenerateDataLink(){
              await this.generateDataLinkBtn.click({ force: true });

          }
    async fillDataExportModal({protocolName}){
              await this.selectProtocol(protocolName);
              await this.selectDateRange();
              await this.selectAssessment(); 
    }
    async downloadExcelFile() {
          const [filedownload] = await Promise.all([
          await this.page.waitForEvent('download', { timeout: 60000 }),// 6sec//listen for the download before the click happens
          ]);
          return filedownload;
    }
    
    async exportDataToCsv({protocolName,TestOrganization}){
      await this.fillDataExportModal({protocolName});
      await this.clickExportToExcel();
      const download = await this.downloadExcelFile();

      await this.verifyDataExportSuccessMessage();
      
      const filename = download.suggestedFilename();
      const expectedFileNames = 
              [
                  `${TestOrganization}.csv`,
                  `${TestOrganization} List Responses.csv`
              ];
     expect(expectedFileNames).toContain(filename);               
    }
    async exportDataLink({protocolName}){
      await this.fillDataExportModal({protocolName});
      await this.ClickGenerateDataLink();
      await this.verifyGenerateDataLinkSuccessMsg();
      await this.verifyCopyToClipboard();
    }
    //verify the copy button is clicked and data links are copied
    async clickDataLink_ListRespCopyBtn(copyButton){
        await expect(copyButton).toBeVisible();
        await expect(copyButton).toBeEnabled();
        await copyButton.click();
    }

    async clickAssessmentReportBtn(){
        await this.assessmentReportBtn.click();
    }
    async toggleInapplicableQuestions(){
        await this.inapplicableQuestionsChckbx.click();
        await this.exportToExcelBtn.click();
    }
    async clickActionItemsLink(){
        await this.dashboardActionItemsLink.click();
        await expect(this.dashboardActionItemsLink).toBeVisible();
    }
    async exportExcelActionItems(TestOrganization){
        await expect(this.exportDropdownBtn).toBeVisible();
        await this.exportDropdownBtn.click();
        await this.actionItemsExportExcelBtn.click();
        const download = await this.downloadExcelFile();
        await expect(this.page.getByText('Your file has been downloaded successfully')).toBeVisible();
        const filename = download.suggestedFilename();
        expect(filename).toBe(`${TestOrganization} - Action Items.xlsx`)
    }
    async actionItemsDataLinkExport(){
        await expect(this.exportDropdownBtn).toBeVisible();
        await this.exportDropdownBtn.click();
        await expect(this.actionItemsGetLinkBtn).toBeEnabled();
         await this.page.waitForTimeout(5000);//clipboard reading too fast
        await this.actionItemsGetLinkBtn.click();
        const clipboardText = await this.page.evaluate(() => navigator.clipboard.readText());
        console.log('Clipboard:', clipboardText);
        expect(clipboardText).toContain('https://de.ermassess.com/api/v1/');
        await expect(this.page.getByText('Copied to clipboard')).toBeVisible();
    }
    async exportEntitiesList(TestOrganization){
        await this.exportDropdownBtn.click();
        await this.exportEntitiesListBtn.click();
        const download = await this.downloadExcelFile();
        await expect(this.page.getByText('File has been downloaded')).toBeVisible();
        const filename = download.suggestedFilename();
        expect(filename).toBe(`${TestOrganization} - Entities.csv`);
    }
    async exportAssessmentList(TestOrganization){
        await this.exportDropdownBtn.click();
        await this.exportAssessmentListBtn.click();
        const download = await this.downloadExcelFile();
        await expect(this.page.getByText('The file has been downloaded successfully')).toBeVisible();
        const filename = download.suggestedFilename();
        expect(filename).toBe(`${TestOrganization} - Assessments.csv`);
    }
    async clickDashboardAssessmentsLink(){
        await this.dashboardAssessmentsLink.click();
    }
    getDataExportSuccessMessage(){
        return this.exportDataSuccessMsg;
    }
    async verifyDataExportSuccessMessage() {
        await expect(this.exportDataSuccessMsg).toBeVisible();
        await expect(this.exportDataSuccessMsg).toContainText('Your Files have been downloaded successfully');
    }
    getGenerateDataLinkSuccessMsg(){
      return this.generateLinkSuccessMsg;
    }
    async verifyGenerateDataLinkSuccessMsg(){
      await expect(this.generateLinkSuccessMsg).toBeVisible({ timeout: 5000 });
      await expect(this.generateLinkSuccessMsg).toContainText('Your link has been generated successfully');
    }
    async verifyCopyToClipboard(){
       await this.clickDataLink_ListRespCopyBtn(this.dataLinkCopyBtn,'Copied to clipboard');
       await this.clickDataLink_ListRespCopyBtn(this.listResponseCopyBtn,'Copied to clipboard');
    }    
     async exportDataLinkAsmntOrg({protocolName}){
      await this.fillDataExportModal({protocolName});
      await this.ClickGenerateDataLink();
      await this.verifyGenerateDataLinkSuccessMsg();
      await this.verifyAsmntOrgBtnCopyToClipboard();
    }
    async verifyAsmntOrgBtnCopyToClipboard(){
       await this.clickDataLink_ListRespCopyBtn(this.dataLinkCopyBtnAsmntOrg,'Copied to clipboard');
    } 
    
}


