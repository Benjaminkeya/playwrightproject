
import { expect} from '@playwright/test';
const randomNum = Math.floor(Math.random() * 1000) + 1;

class Assessments {

  constructor(page) {
    this.page = page;
  }

  // Elements
    timeout = 60000;
    get entityTab() {return this.page.getByRole('link', { name: 'Entities' })}
    get firstEntity() { return this.page.locator('tbody tr').first().locator('.text-decoration-none'); }
    get firstAssessment() { return this.page.locator('a.text-decoration-none.bold').first()  ;}  
   // get firstAssessment() { return this.page.getByRole('link', { name: /PlaywrightTestName\+QA-\d+/ })}
  // create new assessment
    get addNewAssessmentsBtn() {return this.page.getByRole('button', { name: 'add New Assessment' })}
    get txtAssessmentName() {return this.page.getByRole('textbox', { name: 'Assessment Name *' })}
    get clickProtocolDropdown() {return this.page.getByRole('dialog').getByRole('combobox', { name: 'Filter by protocol' })}
    get selectProtocol() { return this.page.getByRole('option', { name: 'PixelEdge Test Automation' })  }
    get selectMLProtocol() {return this.page.getByRole('option', { name: 'Test ML Automation' }) }
    get txtAssessmentDescription() {return this.page.getByRole('textbox', { name: 'Assessment Description (' })    }   
    get createAssessmentBtn() {return this.page.getByRole('button', { name: 'Create Assessment' })   }
    get assessmentGroupBtn() {return this.page.getByRole('button', { name: 'Assessment Groups' }) }
    get addNewAssessmentGroupBtn() {return this.page.getByRole('button', { name: 'add New Group' }) }
    get txtAssessmentGroupName() {return this.page.getByRole('textbox', { name: 'Title *' }) }
    get createAssessmentGroupBtn() {return this.page.getByRole('button', { name: 'Create Group' }) }
    get assessmentGroupEditBtn() {return this.page.getByRole('button', { name: 'edit', exact: true }) }
    get assessmentGroupUpdateBtn() {return this.page.getByRole('button', { name: 'Update Group' }) }
    get assessmentGroupDeleteBtn() {return this.page.getByRole('button', { name: 'delete', exact: true }) }

    //update assessment
    get assessmentEditBtn() {return this.page.getByRole('button', { name: 'edit' }).nth(1)  }
    get clickAssessmentTagDropdown() {return this.page.getByRole('combobox', { name: 'Select tags' })   }
    get selectAssessmentTag() {return this.page.getByRole('option', { name: 'Update Assessment Tag' }) }
   /* get updateAssessmentGroup() {return this.page.getByRole('option', { name: 'Update Test Automation Group' }) } */
    get updateAssessmentBtn() {return this.page.getByRole('button', { name: 'Update Assessment' })}
    //delete assessment
    get assessmentDeleteBtn() {return this.page.getByRole('button', { name: 'delete' }).nth(1)  }
   get confirmDeleteAssessmentCheckbox() {return this.page.getByRole('checkbox') }
   get confirmDeleteAssessmentBtn() {return this.page.getByRole('button', { name: 'Delete', exact: true })  }

    // ML Manual Observation fill
    get SectionDropdown() {return this.page.getByText('chevron_right').nth(2) }
    get complianceType() {return this.page.getByRole('radio') } 
    get txtObservationContent() {return this.page.getByRole('textbox', { name: 'Provide information or' }) }
    get conformityLevel() {return this.page.getByRole('radio') }
    get saveObservationBtn() {return this.page.getByRole('button', { name: 'Save' }) }  
    get nextObservationBtn() {return this.page.getByRole('button', { name: 'Next east' }) }
    //-- upload ML files
    get fileLibraryTab() { return this.page.getByRole('link', { name: 'File Library' }) }
    get bulkUploadBtn() { return this.page.getByRole('button', { name: 'upload_file Bulk Upload' }) }
    get inputFile() { return this.page.locator('input[type="file"]')}
    get uploadFileBtn() { return this.page.getByRole('button', { name: 'Upload Files (1)' }) }
    get checkbox() {return this.page.getByRole('row', { name: 'Name Description Level' }).getByRole('checkbox').check() }
    get fileProcess() {return this.page.getByRole('button', { name: 'Process Files' }) }
    // --- AI Generator ---
    get aiGeneratorTab() { return this.page.getByRole('link', { name: 'AI Generator' }) }
    get SectionDropdownAIGenerator() {return this.page.getByPlaceholder('Section')}
    get selectSectionAIGenerator() { return this.page.getByRole('option', { name: 'Abrasive Blasting' }) }
    get checkboxAIGenerator() { return this.page.getByRole('row', { name: 'Question Section' }).getByRole('checkbox')}
    get askAIBtn() { return this.page.getByRole('button', { name: 'Ask AI' }) }
    get aiLoader() {return this.page.locator('.spinner, .loading, .progress');}
    // --- observation based Ask AI
    get observationAskAIBtn() { return this.page.getByRole('button', { name: 'auto_fix_high Ask AI' }) }
    get selectFirstSectiion() {return this.page.locator('[class="py-1 my-0 w-100 SectionNavigation"]').first() }

    //---- Sentiment Analysis
    get sentimentSummaryTab() {return this.page.getByRole('link', { name: 'Summary' })}
    get sentimentKeywords() {return this.page.getByText('Sentiment Analysis Beta')}
    get firstKeyword() {return this.page.locator('.cursor-pointer.text-white.bg-primary.badge').first()}
    get nevigateToObservation() {return this.page.locator('[class="text-wrap text-capitalize"]') } 
    // --- Executive Summary
    get assessmentReportBtn() {return this.page.getByRole('button', { name: 'Assessment Report east' }) }
    get executiveSummaryBtn() {return this.page.getByRole('button', { name: 'edit Executive Summary' }) }
    get AISummaryBtn() {return this.page.getByRole('button', { name: 'auto_fix_high AI Summary' }) }
    get printExecutiveSummary() {return this.page.locator('div').filter({ hasText: 'Executive Summary At the time' }).nth(4) }
    get executiveSummaryBackBtn() {return this.page.getByRole('button', { name: 'Go back' }) }
    get copyToClipboardBtn() {return this.page.getByRole('button', { name: 'Copy to clipboard' }) }  
    get pasteTxtExecutiveSummary() {return this.page.getByRole('textbox').filter({ hasText: 'Enter Executive Summary' }) }
    get updatExecutiveSummaryBtn() {return this.page.getByRole('button', { name: 'Update' }) }
    // --- Reporting---
    get assessmentReportingTab() {return this.page.getByRole('button', { name: 'Assessment Report east' }) }
    get exportPDFBtn() {return this.page.getByRole('button', { name: 'PDF' }) } 
    get exportWordBtn() {return this.page.getByRole('button', { name: 'Word Document' }) }
    get RawExcelDropdown() {return this.page.getByRole('button', { name: 'Raw Excel (CSV)' }) } 
    get exportExcelBtn() {return this.page.getByRole('button', { name: 'Export to Excel (CSV)' }) }

   
  // --- PAGE ACTIONS ---

    // create
    // Assessment Group
    async clickAssessmentGroupBtn() {
    await this.assessmentGroupBtn.click();
    }
    async clickAddNewAssessmentGroupBtn() {
    await this.addNewAssessmentGroupBtn.click();
    }
    async enterAssessmentGroupName(assessmentName) {
    await this.txtAssessmentGroupName.fill(assessmentName);
    }
    async clickCreateAssessmentGroupBtn() {
    await this.createAssessmentGroupBtn.click();
    }

    async clickAssessmentGroupEditBtn() {
    await this.assessmentGroupEditBtn.click();
    await this.txtAssessmentGroupName.clear();
    }
    async clickAssessmentGroupUpdateBtn() {
    await this.assessmentGroupUpdateBtn.click();
    }

    async clickAssessmentGroupDeleteBtn() { 
    await this.assessmentGroupDeleteBtn.click();
    }
    
    
    async clickEntityTab() {
    await this.entityTab.click();
    }
    async openEntity() {
    await this.firstEntity.click();
    }
    async openAssessment() {
    await this.firstAssessment.click();
    }

    async clickAssessmentsBtn() {
    await this.addNewAssessmentsBtn.click();
    }
    async enterAssessmentName(assessmentName) {
    await this.txtAssessmentName.fill(assessmentName);
    }
    async selectProtocolDropdown() {
    await this.clickProtocolDropdown.click();
    } 
    async chooseProtocol() {
    await this.page.keyboard.type('PixelEdge Test Automation')
    await this.selectProtocol.click();
    }

    async chooseMLProtocol() {
    await this.page.keyboard.type('Test ML Automation')
    await this.selectMLProtocol.click();
    }
    async enterAssessmentDescription(description) {
    await this.txtAssessmentDescription.fill(description);
    }
  /*  async selectAssessmentGroupDropdown() {
    await this.assessmentGroupDropdown.click();
    } 
    async chooseAssessmentGroup() {
    await this.selectAssessmentGroup.click(); 
    } */
    async clickCreateAssessmentBtn() {
    await this.createAssessmentBtn.click();
    }

    // update
    async clickAssessmentEditBtn() {
    await this.assessmentEditBtn.click();
    }
     async updateAssessmentNewName(assessmentName) {
    await this.txtAssessmentName.clear();
    await this.txtAssessmentName.fill(assessmentName);
    }
    async selectAssessmentTagDropdown() {
    await this.clickAssessmentTagDropdown.click();
    }
    
    async updateAssessmentDescription(updatedDescription) {
    await this.txtAssessmentDescription.clear();
    await this.txtAssessmentDescription.fill(updatedDescription);
   }
    async chooseAssessmentTag() {
    await this.selectAssessmentTag.click();
    }

   /* async assessmentGroupUpdate() {
    await this.updateAssessmentGroup.click();
    } */
    async clickUpdateAssessmentBtn() {
    await this.updateAssessmentBtn.click();
    }
    // delete
    async clickAssessmentDeleteBtn() {
    await this.assessmentDeleteBtn.click();
    }       
    async checkConfirmDeleteAssessmentCheckbox() {
    await this.confirmDeleteAssessmentCheckbox.check();
    }
    async clickConfirmDeleteAssessmentBtn() {
    await this.confirmDeleteAssessmentBtn.click();
    }

    // ML Manual Observation fill
    async selectSectionDropdown() {
    await this.SectionDropdown.click();
    }   
    async chooseComplianceType() {
    //await this.selectComplianceType.select();
    const randomIndex = Math.floor(Math.random() * await this.complianceType.count());
    await this.complianceType.nth(randomIndex).click({ force: true });
    }
    async fillObservationTxt(observationDescription1) {
    await this.txtObservationContent.fill(observationDescription1)
    }  
     async fillObservationTxt2(observationDescription2) {
    await this.txtObservationContent.fill(observationDescription2)
    } 
     async fillObservationTxt3(observationDescription3) {
    await this.txtObservationContent.fill(observationDescription3)
    } 
     async fillObservationTxt4(observationDescription4) {
    await this.txtObservationContent.fill(observationDescription4)
    } 
     async fillObservationTxt5(observationDescription5) {
    await this.txtObservationContent.fill(observationDescription5)
    } 
       
    async selectConformityLevel() {
    const randomIndex = Math.floor(Math.random() * await this.conformityLevel.count());
    await this.conformityLevel.nth(randomIndex).click({ force: true });
    }
    async clickSaveObservationBtn() {
    await expect(this.saveObservationBtn).toBeVisible({ timeout: 80000 });
    await this.saveObservationBtn.click();
    } 
    
    async clickNextObservationBtn() {
    await this.nextObservationBtn.click({ timeout: 80000 });
    await expect(this.nextObservationBtn).toBeVisible();
            
    }

    // File Upload for ML Assessment
    async clickFileLibraryTab() {
    await this.fileLibraryTab.click();
    } 
    async clickBulkUploadBtn() {
    await this.bulkUploadBtn.click();
    }
   async uploadFile(filePath) {
    
    //await this.inputFile.waitFor({ state: 'attached', timeout: 10000 });
    await this.page.waitForSelector('input[type="file"]', { state: 'visible' });
    await this.inputFile.setInputFiles(filePath);
}
    async clickUploadFileBtn() {
    await this.uploadFileBtn.click();
    }
 // AI Generator
    async clickAIGeneratorTab() {
    await this.aiGeneratorTab.click();
    }

    async selectSectionInAIGenerator() {
    await this.SectionDropdownAIGenerator.click();
    await this.selectSectionAIGenerator.click();
    }
    async checkQuestionInAIGenerator() {
    await this.checkboxAIGenerator.check({ state: 'visible' });
    
    }
    async clickAskAIButton() {
    await this.askAIBtn.click();
    await expect(this.aiLoader).toBeHidden({ timeout: 120000 });
   
    }
    // Sentiment Analysis
    async clickSentimentSummaryTab() {
      await this.sentimentSummaryTab.click(); 
    }
      async checkSentimentKeywords() {  
      await expect(this.sentimentKeywords).toBeVisible({ timeout: 30000 } );
    }

    async clickFirstKeyword() {
      await this.firstKeyword.click();
    }

    async navigateToObservationFromSentiment() {
      await this.nevigateToObservation.click();
    }
    // Executive Summary
    async clickAssessmentReportBtn() {
      await this.assessmentReportBtn.click();
    } 
      async clickExecutiveSummaryBtn() {
      await this.executiveSummaryBtn.click();
    }
    async clickAISummaryBtn() {
      await this.AISummaryBtn.click();
      await expect(this.aiLoader).toBeHidden({ timeout: 30000 });
    }
    async executiveSummaryGenerate() {
    await this.page.waitForSelector('text=Executive Summary', { timeout: 120000 });

  // Wait until summary text is NOT empty
    await expect(this.page.locator('.executive-summary-text'))
    .not.toHaveText('', { timeout: 180000 });
      //await expect(this.printExecutiveSummary).toBeVisible({ timeout: 120000 });
    }
    async clickCopyToClipboardBtn() {
      await this.copyToClipboardBtn.click();
    }
    async clickExecutiveSummaryBackBtn() {
      await this.executiveSummaryBackBtn.click();
    }
    async pasteTxtExecutiveSummary() {
      await this.pasteTxtExecutiveSummary.click();
      await this.page.keyboard.press('Control+V');
    }
    async clickUpdateExecutiveSummaryBtn() {
      await this.updatExecutiveSummaryBtn.click();
    }  

    // --- Reporting ---
  async clickAssessmentReportingTab() {
  await this.assessmentReportingTab.click();
}

  async clickExportPDFBtn() {
  const [download] = await Promise.all([
    this.page.waitForEvent('download'),
    this.exportPDFBtn.click()
  ]);
}

async clickExportWordBtn() {
  const [download] = await Promise.all([
    this.page.waitForEvent('download'),
    this.exportWordBtn.click()
  ]);
}

  async clickRawExcelDropdown() {
  await expect(this.RawExcelDropdown).toBeVisible();
  await this.RawExcelDropdown.click();
}

async clickExportExcelBtn() {
  await expect(this.exportExcelBtn).toBeVisible();
  const [download] = await Promise.all([
    this.page.waitForEvent('download'),
    this.exportExcelBtn.click()
  ]);
}
    
    async createAssessmentGroup(assessmentName) {
    const fullName = assessmentName + randomNum;
    await this.clickAssessmentGroupBtn();    
    await this.clickAddNewAssessmentGroupBtn();
    await this.enterAssessmentGroupName(fullName);
    await this.clickCreateAssessmentGroupBtn();
    }

    async updateAssessmentGroup(assessmentName) {
    const fullName = assessmentName + randomNum;
    await this.clickAssessmentGroupBtn();
    await this.clickAssessmentGroupEditBtn();
    await this.enterAssessmentGroupName(fullName);
    await this.clickAssessmentGroupUpdateBtn();
    }
    async deleteAssessmentGroup() {
    await this.clickAssessmentGroupBtn();
    await this.clickAssessmentDeleteBtn();
    await this.checkConfirmDeleteAssessmentCheckbox();
    await this.clickConfirmDeleteAssessmentBtn();
    
    }
    
    async createNewAssessment(assessmentName, description) {
    const fullName = assessmentName + randomNum;
    await this.clickAssessmentsBtn();
    await this.enterAssessmentName(fullName);
    await this.selectProtocolDropdown();
    await this.chooseProtocol();
    await this.enterAssessmentDescription(description);
   // await this.selectAssessmentGroupDropdown();
   // await this.chooseAssessmentGroup();
    await this.clickCreateAssessmentBtn();
     await expect(this.page.getByLabel('breadcrumb').getByText(fullName)).toBeVisible()
    }
     
    async updateAssessment(assessmentName, updateDescription) {
    const fullName = assessmentName + randomNum;
    await this.clickAssessmentEditBtn();
    await this.updateAssessmentNewName(fullName);
    await this.selectAssessmentTagDropdown();
    await this.chooseAssessmentTag();
    await this.updateAssessmentDescription(updateDescription);
    await this.clickUpdateAssessmentBtn();
    await expect(this.page.getByText(fullName)).toBeVisible()
    }
      
    async deleteAssessment() {
    await this.clickAssessmentDeleteBtn();
    await this.checkConfirmDeleteAssessmentCheckbox();
    await this.clickConfirmDeleteAssessmentBtn();
    }

    async createNewMLAssessment(assessmentName, description) {
    const fullName = assessmentName + randomNum;
    await this.clickAssessmentsBtn();
    await this.enterAssessmentName(fullName);
    await this.selectProtocolDropdown();
    await this.chooseMLProtocol();
    await this.enterAssessmentDescription(description);
    await this.clickCreateAssessmentBtn();
    await expect(this.page.getByText(fullName)).toBeVisible()
}

async fillMLManualObservation(observationDescription1 , observationDescription2 , observationDescription3 , observationDescription4 , observationDescription5) {
    await this.selectSectionDropdown();
    await this.chooseComplianceType();
    await this.fillObservationTxt(observationDescription1);
    await this.selectConformityLevel();
    await this.clickSaveObservationBtn();
    await this.clickNextObservationBtn();
    
    await this.chooseComplianceType();
    await this.fillObservationTxt2(observationDescription2);
    await this.selectConformityLevel();
    await this.clickSaveObservationBtn();
    await this.clickNextObservationBtn();

    await this.chooseComplianceType();
    await this.fillObservationTxt3(observationDescription3);
    await this.selectConformityLevel();
    await this.clickSaveObservationBtn();
    await this.clickNextObservationBtn();
    
    await this.chooseComplianceType();
    await this.fillObservationTxt4(observationDescription4);
    await this.selectConformityLevel();
    await this.clickSaveObservationBtn();
    await this.clickNextObservationBtn();

    await this.chooseComplianceType();
    await this.fillObservationTxt5(observationDescription5);
    await this.selectConformityLevel();
    await this.clickSaveObservationBtn();
    await this.clickNextObservationBtn();

    }
    // File Upload for ML Assessment
    async uploadMLFiles(filePath) { 
    await this.openAssessment();
    await this.clickFileLibraryTab();
    await this.clickBulkUploadBtn();
    await this.uploadFile(filePath);
    await this.clickUploadFileBtn();
    }

    // AI Generator
    async useAIGenerator() {
    await this.openAssessment();
    await this.clickAIGeneratorTab();
    await this.selectSectionInAIGenerator();
    await this.checkQuestionInAIGenerator();
    await this.clickAskAIButton();
    
    }

    // Sentiment Analysis
    async performSentimentAnalysis() {
      await this.openAssessment();
      await this.selectSectionDropdown();
      await this.clickSentimentSummaryTab();
      await this.checkSentimentKeywords();
      await this.clickFirstKeyword();
      await this.navigateToObservationFromSentiment();
    }

    // Executive Summary
    async generateAIExecutiveSummary() {
      await this.openAssessment();
      await this.clickAssessmentReportBtn();
      await this.clickExecutiveSummaryBtn();
      await this.clickAISummaryBtn();
      await this.executiveSummaryGenerate();
      await this.clickCopyToClipboardBtn();
      await this.clickExecutiveSummaryBackBtn();
      await this.pasteTxtExecutiveSummary();
      await this.clickUpdateExecutiveSummaryBtn();
    }

    // --- Reporting ---
    async exportAssessmentReportPDF() {
      await this.openAssessment();
      await this.clickAssessmentReportingTab();
      await this.clickExportPDFBtn();
       
    }
    async exportAssessmentReportWord() {
      await this.openAssessment();
      await this.clickAssessmentReportingTab();
      await this.clickExportWordBtn();
    }
    async exportAssessmentReportExcel() {
      await this.openAssessment();
      await this.clickAssessmentReportingTab();
      await this.clickRawExcelDropdown();
      await this.clickExportExcelBtn(); 
    }
  }
  
    
export { Assessments };