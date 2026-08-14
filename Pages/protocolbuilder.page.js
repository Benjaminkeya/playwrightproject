// LoginPage.js

import { expect } from '@playwright/test';

export class ProtocolBuilderPage {
  constructor(page) {
    this.page = page;
  }
  
  // --- ELEMENTS (GETTERS) ---
  get userMenu() { return this.page.locator('#collasible-nav-dropdown')} //#collasible-nav-dropdown
  get protocolLink() { return this.page.getByRole('link', { name: 'Protocols' }) }
  get protocolBtn() { return this.page.getByRole('button', { name: 'add New Protocol' }) }
  get protocolDescriptionTxtbox() { return this.page.getByRole('textbox', { name: 'Protocol Description (' })}
  get createdProtocolHeaderView() { return expect(this.page.getByRole('heading', { name: 'New Protocol 1' })).toBeVisible({timeout:20000});}
  get firstProtocolNewProtocol1(){  return this.page.locator('tr', { hasText: 'New Protocol 1' }) .locator('button:has-text("content_copy")')  }// find the row // find the button in that row
  get cloneProtocolNameTxtBox(){return this.page.getByPlaceholder('Enter Protocol Name')}
  get cloneSectionsCheckbox(){  return this.page.locator('#cloneSections')}
  get cloneResponseFieldsCheckbox(){  return this.page.locator('#cloneResponseFields')}
  get cloneMetadataCheckbox(){  return this.page.locator('#cloneMetadata')}
  get cloneApplicabilityScreeningCheckbox(){ return this.page.locator('#cloneApplicabilityScreening')}
  get cloneBtn(){ return this.page.getByText('Clone', { exact: true })}
  get newCloneLink(){return expect(this.page.getByRole('link', { name: 'New Protocol Clone 1' })).toBeVisible({timeout:10000})}
  get updateBtnOfNewProtocol1(){  return this.page.locator('tr', { hasText: 'New Protocol 1' }) .locator('button:has-text("edit")') } // find the row // find the button in that row
  get protocolNameTxtBox(){ return this.page.locator('#name') }
  get protocolDescriptionTxtBox(){ return this.page.locator('#description') }
  get signatureCheckbox(){  return this.page.locator('#hasSignature') }
  get fileCheckbox(){ return this.page.locator('#hasFile') }
  get actionItemsCheckbox(){  return this.page.locator('#hasActionItems')}
  get notepadCheckbox(){  return this.page.locator('#hasNotepad')}
  get certificationCommentsCheckbox(){  return this.page.locator('#hasCertificationComments')}
  get observationSetsCheckbox(){return this.page.locator('#hasObservationSets')}
  get successUpdateBtn(){ return this.page.getByText('Update', {exact:true})}
  get updatedNewLink(){return expect(this.page.getByRole('link', {name: 'New Protocol 2'})).toBeVisible({timeout:10000})}
  get deleteNewProtocol2Btn() { return this.page.locator('tr', { hasText: 'New Protocol 2' }) .locator('button:has-text("delete")') } // find the row // find the button in that row       
  get agreeCheckbox() { return this.page.locator('input.form-check-input')}
  get confirmDeleteBtn() { return this.page.getByRole('button', { name: 'Delete', exact: true }) }
  get deleteModalDiv() { return expect(this.page.locator('div.modal-content')).toBeHidden({ timeout: 10000 });}
  get deleteNewProtocolClone1Btn() { return this.page.locator('tr', { hasText: 'New Protocol Clone 1' }) .locator('button:has-text("delete")') } // find the row // find the button in that row
  get viewFirstProtocolLink() {return this.page.locator('[class="mb-3 card"] > [class="table-responsive card-body"] > [class="table table-hover"] >tbody > tr:first-child > td:first-child > h6 > a') }
  get principlesTabBtn() {return this.page.locator('a[data-cy="principles"]') }
  get principleNameTxtBox(){ return this.page.locator('#title') }
  get principleDescriptionTxtBox(){ return this.page.locator('#description') }
  get successCreatedPrincipleToast(){ return this.page.getByRole('heading', { name: 'Principle created' })}
  get clickEditBtn() {return this.page.locator('[class="card-body"] > [class="table"] > tbody > tr:first-child > td:nth-child(5) > div > [class="btn btn-outline-primary btn-sm"]') }
  get updatePrincipleBtn(){ return this.page.getByRole('button', { name: 'Update' }) }
  get successUpdatePrincipleToast(){ return this.page.getByRole('heading', { name: 'Principle updated' })}
  get clickDeletePrincipleBtn(){ return this.page.getByRole('table').getByRole('button', { name: 'delete' })}
  get checkConfirmDeletedPrincipleCheckbox(){ return this.page.getByRole('dialog').getByRole('checkbox')}
  get deletePrincipleBtn(){ return this.page.locator('[class="modal-footer"] > [type="submit"]') }
  get successDeletedPrincipleToast(){ return this.page.getByRole('heading', { name: 'Principle deleted' })}
  get protocolHeaderText() {return this.page.locator('.row > .mb-3.col-xl-2.col-lg-2.col-md-12.col-sm-12.col-12 > h3')}

  get typeProtocolNameTextBox() {return this.page.getByRole('textbox', { name: 'Protocol Name *' }) }
  get clickAddNewPrincipleBtn() {return this.page.getByRole('button', { name: "add New Principle" }) }
  get clickSectionTab() {return this.page.getByRole('link', { name: 'Sections' }) }
  get clickAddNewSectionBtn() {return this.page.getByRole('button', { name: 'add New Section' }) }
  get typeSectionTextBox() {return this.page.getByRole('textbox', { name: 'Title *' }) }
  get clickSelectPrincipleDropdown() {return this.page.getByRole('combobox', { name: 'Select a principle...' }) }
  get clickFirstPrincipleFromDropdown() {return this.page.locator('#principle > a:nth-child(1)') }
  get genericConfirmCreateBtn() {return this.page.getByRole('button', { name: 'Create' }) }
  get typeGenericDescriptionTextBox() {return this.page.getByRole('textbox', { name: 'Description (Optional)' }) }
  get sectionCreatedSuccessToastMsg() {return this.page.getByRole('heading', { name: 'Section created' }) }
  get clickQuestionTagsTab() {return this.page.getByRole('link', { name: 'Question Tags' }) }
  get clickAddNewTagBtn() {return this.page.getByRole('button', { name: 'add New Tag' }) }
  get typeQuestionTagTxtBox() {return this.page.getByRole('textbox', { name: 'Name *' }) }
  get clickConfirmCreateTagBtn() {return this.page.getByRole('button', { name: 'Create Tag' }) }
  get questionTagCreatedSuccessToastMsg() {return this.page.getByRole('heading', { name: 'Tag created' }) }
  get clickResponseFieldTab() {return this.page.getByRole('link', { name: 'Response Fields' }) }
  get addNewResponseFieldBtn() {return this.page.getByRole('button', { name: 'add New Response Field' }) }
  get responseFieldCreatedSuccessToastMsg() {return this.page.getByRole('heading', { name: 'Response field created' }) }
  get questionPromptTxtBox() {return this.page.getByRole('textbox', { name: 'Question Prompt *' }) }
  get selectQuestionTypeDropdown() {return this.page.getByRole('combobox', { name: 'Select Question Type' }) }
  get selectTextFieldDropdown() {return this.page.getByRole('option', { name: 'Text Field' }) }
  get selectCheckBoxFieldDropdown() {return this.page.getByRole('option', { name: 'Checkbox Field' }) }
  get selectRadioFieldDropdown() {return this.page.getByRole('option', { name: 'Radio or Dropdown Field' }) }
  get selectDateTimeFieldDropdown() {return this.page.getByRole('option', { name: 'Datetime Field' }) }
  get selectNumericFieldDropdown() {return this.page.getByRole('option', { name: 'Numeric Field' }) }
  get dataIDtagTxtBox() {return this.page.getByRole('textbox', { name: 'Data ID Tag' }) }
  get clickScopeAndMetadataTab() {return this.page.getByRole('link', { name: 'Scope & Metadata' }) }
  get addNewPreAssessmentBtn() {return this.page.getByRole('button', { name: 'add New Pre-Assessment' }) }
  get selectScopeQuestionTypeDropdown() {return this.page.getByRole('combobox', { name: 'Select Question Type' }) }
  get scopeCreatedSuccessToastMsg() {return this.page.getByRole('heading', { name: 'Scope & Metadata created successfully' }) }
  get clickDeleteBtn() {return this.page.getByRole('button', { name: 'delete' }) }
  get tickDeleteCheckbox() {return this.page.getByRole('dialog').getByRole('checkbox') }
  get successProtocolDeleteToastMsg() {return this.page.getByRole('heading', { name: 'Protocol deleted successfully' }) }
  get successTagDeleteToastMsg() {return this.page.getByRole('heading', { name: 'Tag deleted' }) }
  get clickEdittedBtn() {return this.page.getByRole('button', { name: 'edit' }) }
  get updateBtnTag() {return this.page.getByRole('button', { name: 'Update Tag' }) }
  get successfulUpdatedTagMsg() {return this.page.getByRole('heading', { name: 'Tag updated' }) }
  get typePrincipleNameTxtBox() {return this.page.getByRole('textbox', { name: 'Name *' }) }
  get typePrincipleDescriptionTxt() {return this.page.getByRole('textbox', { name: 'Principle Description (' }) }
  get clickCloneBtn() {return this.page.getByRole('button', { name: 'content_copy' }) }
  get sectionAndPrinciplesCheckbox() {return this.page.getByRole('checkbox', { name: 'Sections with Principles and' }) }
  get responseFieldsCheckbox() {return this.page.getByRole('checkbox', { name: 'Response Fields' }) }
  get scopeAndScreeningFieldsCheckbox() {return this.page.getByRole('checkbox', { name: 'Scope & Screening Fields' }) }
  get applicabilityScreeningFieldsCheckbox() {return this.page.getByRole('checkbox', { name: 'Applicability Screening' }) }
  get clickConfirmClonBtn() {return this.page.getByRole('button', { name: 'Clone' }) }
  get successfulClonedToastMsg() {return this.page.getByRole('heading', { name: 'Protocol cloned successfully' }) }
  get protocolStatus() {return this.page.getByLabel('protocol status') }
  get collectSignatoriesCheckBox() {return this.page.getByRole('checkbox', { name: 'Collect Signatories.' }) }
  get collectMediaFilesCheckBox() {return this.page.getByRole('checkbox', { name: 'Collect Media files.' }) }
  get collectActionItemsCheckBox() {return this.page.getByRole('checkbox', { name: 'Collect Action Items' }) }
  get collectMemoNotepadCheckBox() {return this.page.getByRole('checkbox', { name: 'Collect Memo/ Notepad' }) }
  get collectCertificationCheckBox() {return this.page.getByRole('checkbox', { name: 'Collect Certification &' }) }
  get allowMultipleSetsCheckBox() {return this.page.getByRole('checkbox', { name: 'Allow Multiple Sets of an' }) }
  get successfulProtocolUpdatedToastMsg() {return this.page.getByRole('heading', { name: 'Protocol updated successfully' }) }
  get clickSettingsBtn() {return this.page.getByRole('button', { name: 'settings' }) }
  get successDeleteSectionToastMsg() {return this.page.getByRole('heading', { name: 'Section deleted' }) }
  get successUpdatedSectionToastMsg() {return this.page.getByRole('heading', { name: 'Section updated' }) }
  get applicabilityScreeningLink() {return this.page.getByRole('link', { name: 'Applicability Screening' }) }
  get addNewScreeningQuestionBtn() {return this.page.getByRole('button', { name: 'add New Screening Question' }) }
  get questionDescriptionTextBox() {return this.page.getByRole('textbox', { name: 'Question Description (' }) }
  get selectaSectionComboBox() {return this.page.getByRole('combobox', { name: 'Select a section...' }) }
  get selectOption() {return this.page.getByRole('option') }
  get applicabilitySuccessToastMessage() {return this.page.getByRole('heading', { name: 'Screening Question created' }) }
  get deleteIcon() {return this.page.getByRole('button', { name: 'Remove' }) }
  get applicabilityScreeningSectionsListing() {return this.page.getByRole('listbox', { name: 'menu-options' }) }
  get applicabilitySuccessUpdatedToastMsg() {return this.page.getByRole('heading', { name: 'Applicability Screening Question updated successfully' }) }
  get applicabilitySuccessDeletedToastMsg() {return this.page.getByRole('heading', { name: 'Applicability screening deleted successfully' }) }
  get membersTabLink() {return this.page.getByRole('link', { name: 'Members' }) }
  get addMembersBtn() {return this.page.getByRole('button', { name: 'group_add Add Members' }) }
  get selectMemberComboBox() {return this.page.getByRole('combobox', { name: 'Select members...' }) } 
  get selectOptionBenjaminMember() {return this.page.getByRole('option', { name: 'Benjamin Member' }) } 
  get comboBox() {return this.page.getByRole('combobox') } 
  get selectOptionBenjaminKeya() {return this.page.getByRole('option', { name: 'Benjamin Keya' }) } 
  get selectOptionAashirKhan() {return this.page.getByRole('option', { name: 'Aashir Khan' }) } 
  get confirmAddMembersBtn() {return this.page.getByRole('button', { name: 'Add', exact: true }) } 
  get membersSuccessfullyUpdatedToastMsg() {return this.page.getByRole('heading', { name: 'Members updated successfully' }) }
  get deleteBenjaminMember() {return this.page.getByRole('row', { name: 'Benjamin Member benjamin.keya' }) }
  get deleteBenjaminKeya() {return this.page.getByRole('row', { name: 'Benjamin Keya benjamin.keya@' }) }
  get helpContenntLink() {return this.page.getByRole('link', { name: 'Help Content' }) }
  get addNewContentBtn() {return this.page.getByRole('button', { name: 'add New Content' }) }
  get helpContentTitleTextBox() {return this.page.getByRole('textbox', { name: 'Title *' }) }
  get helpContentDescriptionTextBox() {return this.page.getByRole('textbox', { name: 'Description *' }) }
  get nextBtnCta() {return this.page.getByRole('button', { name: 'Next' }) }
  get successfullyUpdatedHelpContentToastMsg() {return this.page.getByRole('heading', { name: 'Success' }) }
  get helpContentBodyTextBox() {return this.page.getByRole('textbox') }
  get submitHelpContentBtn() {return this.page.getByRole('button', { name: 'Submit' }) }
  get responseFieldSuccessDeleteToastMsg() {return this.page.getByRole('heading', { name: 'Response field deleted' }) }
  get scopeAndMetaDataSuccessDeleteToastMsg() {return this.page.getByRole('heading', { name: 'Scope & Metadata deleted' }) }
  get clickMakeProtocolViewOnlyToggle() {return this.page.locator('div').filter({ hasText: /^Make protocol view only$/ }) }
  get responseFieldRequiredCheckbox() {return this.page.getByRole('checkbox', { name: 'Response field is required' }) }
  get responseFieldUpdatedSuccessToastMsg() {return this.page.getByRole('heading', { name: 'Response Field updated' }) }
  get ScopeAndMetadataUpdatedSuccessToastMsg() {return this.page.getByRole('heading', { name: 'Response Field Option updated' }) }
  get genericCancelBtn() {return this.page.getByRole('button', { name: 'Cancel' }) }

  


  // ----- Action Items ----
  async clickUserMenu() {
    await this.userMenu.click()
  }


  async clickProtocolLink() {
    await this.protocolLink.click()
    await this.clickEdittedBtn.first().waitFor({ state: 'visible' });
  }

  async clickProtocolBtn() {
    await this.protocolBtn.click()
  }

  async typeProtocolNameTxtbox(protocolName) {
    await this.protocolNameTxtbox.fill(protocolName)
  }

  async typeProtocolDescriptionTxtbox(protocolDescription) {
    await this.protocolDescriptionTxtbox.fill(protocolDescription)
  }

  async clickCreateProtocolBtn() {
    await this.createProtocolBtn.click()
  }

  async viewCreatedProtocolHeaderView() {
    await this.createdProtocolHeaderView
  }

  async clickFirstProtocolNewProtocol1() {
    await this.firstProtocolNewProtocol1.click()
  }

  async typeCloneProtocolNameTxtBox(protocolCloneName) {
    await this.cloneProtocolNameTxtBox.fill(protocolCloneName)
  }

  async checkCloneSectionsCheckbox() {
    await this.cloneSectionsCheckbox.click()

  }

  async checkCloneResponseFieldsCheckbox() {
    await this.cloneResponseFieldsCheckbox.click()
    
  }

  async checkCloneMetadataCheckbox() {
    await this.cloneMetadataCheckbox.click()
    
  }

  async checkCloneApplicabilityScreeningCheckbox() {
    await this.cloneApplicabilityScreeningCheckbox.click()
   
  }

  async newCloneLink() {
    await this.newCloneLink
  }

  async clickUpdateBtnOfNewProtocol1() {
    await this.updateBtnOfNewProtocol1.click()
  }

  async typeProtocolNameTxtBox(updatedProtocolName) {
    await this.protocolNameTxtBox.fill(updatedProtocolName)
  }

  async typeProtocolDescriptionTxtBox(updatedProtocolDescription) {
    await this.protocolDescriptionTxtBox.fill(updatedProtocolDescription)
  }

  async clickSignatureCheckbox() {
    await this.signatureCheckbox.click()
  }

  async clickFileCheckbox() {
    await this.fileCheckbox.click()
  }

  async clickActionItemsCheckbox() {
    await this.actionItemsCheckbox.click()
  }

  async clickNotepadCheckbox() {
    await this.notepadCheckbox.click()
  }

  async clickCertificationCommentsCheckbox() {
    await this.certificationCommentsCheckbox.click()
  }

  async clickObservationSetsCheckbox() {
    await this.observationSetsCheckbox.click()
  }

  async clickSuccessUpdateBtn() {
    await this.successUpdateBtn.click()
  }

  async newProtocolNameUpdatedLinkText() {
    await this.updatedNewLink
  }

  async clickDeleteNewProtocol2Btn() {
    await this.deleteNewProtocol2Btn.click()
  }

  async clickagreeCheckbox() {
    await this.agreeCheckbox.check()
  }

  async clickconfirmDeleteBtn() {
    await this.confirmDeleteBtn.click()
  }

  async closeDeleteModalDiv() {
    await this.deleteModalDiv
  }

  async clickDeleteNewProtocolClone1Btn() {
    await this.deleteNewProtocolClone1Btn.click()
  }

  async clickPrincipleTabBtn() {
    await this.principlesTabBtn.click()
  }

  async typePrincipleDescriptionTxtBox(principleDescription) {
    await this.principleDescriptionTxtBox.fill(principleDescription)
  }

  async clickViewFirstProtocolLink() {
    await this.viewFirstProtocolLink.click()
  }

  async clickGenericConfirmCreateBtn() {
    await this.genericConfirmCreateBtn.click()
  }

  async clickAddNewResponseFieldBtn() {
    await this.addNewResponseFieldBtn.click()
  }

  async clickSelectQuestionTypeDropdown() {
    await this.selectQuestionTypeDropdown.click()
  }

  async clickAddNewPreAssessmentBtn() {
    await this.addNewPreAssessmentBtn.click()
  }

  async clickSelectScopeQuestionTypeDropdown() {
    await this.selectScopeQuestionTypeDropdown.click()
  }


  // ----- Functions ----


  async cloneProtocol() {
    await this.clickProtocolLink()
    await this.clickCloneBtn.first().click();
    this.cloneProtocol = `CloneProtocol_${Math.floor(Math.random() * 100000)}`; // store as class property
    await this.typeProtocolNameTextBox.fill(this.cloneProtocol); 
    await this.sectionAndPrinciplesCheckbox.check();
    await this.responseFieldsCheckbox.check();
    await this.scopeAndScreeningFieldsCheckbox.check();
    await this.applicabilityScreeningFieldsCheckbox.check();
    await this.clickConfirmClonBtn.click();
    await this.successfulClonedToastMsg.click()
  }

  async deleteFirstProtocolFromProtocolListing(){
    
    await this.page.getByRole('combobox').selectOption('150');
    await this.clickDeleteBtn.first().click();
    const protocolNameVariable = await this.page.getByRole('heading', { name: 'Delete Protocol -', }).innerText()
    await this.page.getByRole('checkbox').check();
    await this.page.getByRole('button', { name: 'Delete', exact: true }).click();
    //await expect(this.page.locator('tr', { hasText: protocolNameVariable })).toHaveCount(0);
    await this.page.waitForTimeout(1000);
  }

  async updateFirstProtocolFromProtocolListing(){
    await this.clickEdittedBtn.first().click(); 
    this.updatedProtocolName = `UpdatedProtocolName_${Math.floor(Math.random() * 100000)}`; // store as class property
    await this.typeProtocolNameTextBox.fill(this.updatedProtocolName);
    await this.protocolDescriptionTxtbox.fill('Updated Protocol Name');
    await this.protocolStatus.selectOption('2');
    await this.collectSignatoriesCheckBox.uncheck();
    await this.collectMediaFilesCheckBox.uncheck();
    await this.collectActionItemsCheckBox.uncheck();
    await this.collectMemoNotepadCheckBox.uncheck();
    await this.collectCertificationCheckBox.uncheck();
    await this.allowMultipleSetsCheckBox.uncheck();
    await this.updatePrincipleBtn.click();
    await this.successfulProtocolUpdatedToastMsg.click();
  }

  async updateProtocolFromInsideProtocol(){
    await this.clickSettingsBtn.click();
     this.updatedProtocolName = `UpdatedProtocolName_${Math.floor(Math.random() * 100000)}`; // store as class property
    await this.typeProtocolNameTextBox.fill(this.updatedProtocolName);
    await this.protocolDescriptionTxtbox.fill('This is updated protocol Description');
    await this.protocolStatus.selectOption('2');
    await this.collectSignatoriesCheckBox.uncheck();
    await this.collectMediaFilesCheckBox.uncheck();
    await this.collectActionItemsCheckBox.uncheck();
    await this.collectMemoNotepadCheckBox.uncheck();
    await this.collectCertificationCheckBox.uncheck();
    await this.allowMultipleSetsCheckBox.uncheck();
    await this.updatePrincipleBtn.click();
    await this.successfulProtocolUpdatedToastMsg.click();

  }


  async clickagreeCheckbox() {
    await this.agreeCheckbox.click()
  }

  async clickconfirmDeleteBtn() {
    await this.confirmDeleteBtn.click()
  }

  async closeDeleteModalDiv() {
    await this.deleteModalDiv
  }

  async clickDeleteNewProtocolClone1Btn() {
    await this.deleteNewProtocolClone1Btn.click()
  } 
 
async updatePrinciple() {
    await this.clickEdittedBtn.click();
    this.principleName2 = `Principal_${Math.floor(Math.random() * 100000)}`;
    await this.typePrincipleNameTxtBox.fill(this.principleName2);
    await this.typePrincipleDescriptionTxt.fill('This is principle 12');
    await this.updatePrincipleBtn.click();
    await this.successUpdatePrincipleToast.click();
}

async deletePrinciple() {
    await this.clickDeletePrincipleBtn.click();
    await this.tickDeleteCheckbox.check();
    await this.confirmDeleteBtn.click();
    await this.successDeletedPrincipleToast.click();
}

async createProtocolNew2() {
    await this.clickUserMenu();
    await this.clickProtocolLink()
    await this.clickProtocolBtn()
    const protocolName = `Protocol_${Math.floor(Math.random() * 100000)}`;
    await this.typeProtocolNameTextBox.fill(protocolName)
    await this.clickSignatureCheckbox()
    await this.clickFileCheckbox()
    await this.clickActionItemsCheckbox()
    await this.clickNotepadCheckbox()
    await this.clickCertificationCommentsCheckbox()
    await this.clickObservationSetsCheckbox()
    await this.clickGenericConfirmCreateBtn()
    await expect(this.protocolHeaderText).toBeVisible({ timeout: 30000 })

}

  async createPrinciple2(principleDescription){
    await this.clickPrincipleTabBtn()
    await this.clickAddNewPrincipleBtn.click()
    this.principleName = `Principal_${Math.floor(Math.random() * 100000)}`; // store as class property
    await this.principleNameTxtBox.fill(this.principleName)
    await this.typePrincipleDescriptionTxtBox(principleDescription)
    await this.clickGenericConfirmCreateBtn()
    await expect(this.successCreatedPrincipleToast).toBeVisible()
}

  async createSection() {
    await this.clickSectionTab.click()
    await this.clickAddNewSectionBtn.click()
    this.sectionName = `Section_${Math.floor(Math.random() * 100000)}`; // store as class property
    await this.typeSectionTextBox.fill(this.sectionName);
    await this.clickSelectPrincipleDropdown.click()
    await this.clickFirstPrincipleFromDropdown.click()
    await this.typeGenericDescriptionTextBox.fill('This is section 1 of principle 1');
    await this.clickGenericConfirmCreateBtn()
    await expect(this.sectionCreatedSuccessToastMsg).toBeVisible();

}

async createQuestionTag() {
    await this.clickQuestionTagsTab.click()
    await this.clickAddNewTagBtn.click()
    this.questionTag = `QuestionTag_${Math.floor(Math.random() * 100000)}`; // store as class property
    await this.typeQuestionTagTxtBox.fill(this.questionTag);
    await this.clickConfirmCreateTagBtn.click()
    await this.questionTagCreatedSuccessToastMsg.click();
}

    async createResponseField() {
    await this.clickResponseFieldTab.click()
    await this.clickAddNewResponseFieldBtn()
    await this.questionPromptTxtBox.fill('Level 1: Text Field Response');
    await this.clickSelectQuestionTypeDropdown()
    await this.selectTextFieldDropdown.click();
    await this.typeGenericDescriptionTextBox.fill('Level 1: Text Field Response description');
    await this.dataIDtagTxtBox.fill('1234');
    await this.clickGenericConfirmCreateBtn()
    await this.responseFieldCreatedSuccessToastMsg
    await this.clickAddNewResponseFieldBtn()
    await this.questionPromptTxtBox.fill('Level 1: Checkbox Field Response');
    await this.clickSelectQuestionTypeDropdown()
    await this.selectCheckBoxFieldDropdown.click();
    await this.typeGenericDescriptionTextBox.fill('Level 1: Checkbox Field Response description');
    await this.dataIDtagTxtBox.fill('12345');
    await this.clickGenericConfirmCreateBtn()
    await this.responseFieldCreatedSuccessToastMsg
    await this.clickAddNewResponseFieldBtn()
    await this.questionPromptTxtBox.fill('Level 1: Radio or Dropdown Field Response');
    await this.clickSelectQuestionTypeDropdown()
    await this.selectRadioFieldDropdown.click();
    await this.typeGenericDescriptionTextBox.fill('Level 1: Radio or Dropdown Field Response description');
    await this.dataIDtagTxtBox.fill('123456');
    await this.clickGenericConfirmCreateBtn()
    await this.responseFieldCreatedSuccessToastMsg
    await this.clickAddNewResponseFieldBtn()
    await this.questionPromptTxtBox.fill('Level 1: Datetime Field Response');
    await this.clickSelectQuestionTypeDropdown()
    await this.selectDateTimeFieldDropdown.click();
    await this.typeGenericDescriptionTextBox.fill('Level 1: Datetime Field Response description');
    await this.dataIDtagTxtBox.fill('1234567');
    await this.clickGenericConfirmCreateBtn()
    await this.responseFieldCreatedSuccessToastMsg

}

    async createScopeAndMetadata() {
    await this.clickScopeAndMetadataTab.click()
    await this.clickAddNewPreAssessmentBtn()
    await this.clickSelectScopeQuestionTypeDropdown()
    await this.selectTextFieldDropdown.click();
    await this.questionPromptTxtBox.fill('Level 1: Text Field');
    await this.clickGenericConfirmCreateBtn()
    await this.scopeCreatedSuccessToastMsg
    await this.clickAddNewPreAssessmentBtn()
    await this.clickSelectScopeQuestionTypeDropdown()
    await this.selectCheckBoxFieldDropdown.click();
    await this.questionPromptTxtBox.fill('Level 1: Checkbox Field');
    await this.clickGenericConfirmCreateBtn()
    await this.scopeCreatedSuccessToastMsg
    await this.clickAddNewPreAssessmentBtn()
    await this.clickSelectScopeQuestionTypeDropdown()
    await this.selectRadioFieldDropdown.click();
    await this.questionPromptTxtBox.fill('Level 1: Radio or Dropdown Field');
    await this.clickGenericConfirmCreateBtn()
    await this.scopeCreatedSuccessToastMsg
    await this.clickAddNewPreAssessmentBtn()
    await this.clickSelectScopeQuestionTypeDropdown()
    await this.selectDateTimeFieldDropdown.click();
    await this.questionPromptTxtBox.fill('Level 1: Datetime Field');
    await this.clickGenericConfirmCreateBtn()
    await this.scopeCreatedSuccessToastMsg
    await this.clickAddNewPreAssessmentBtn()
    await this.clickSelectScopeQuestionTypeDropdown()
    await this.selectNumericFieldDropdown.click();
    await this.questionPromptTxtBox.fill('Level 1: Numeric Field');
    await this.clickGenericConfirmCreateBtn();
    await this.scopeCreatedSuccessToastMsg

}

async deleteNewProtocol() {
    await this.clickDeleteBtn.first().click();
    const protocolNameVariable = await this.page.getByRole('heading', { name: 'Delete Protocol -', }).innerText()
    await this.tickDeleteCheckbox.check();
    await this.confirmDeleteBtn.click();
    await this.successProtocolDeleteToastMsg
    await expect(this.page.locator('tr', { hasText: protocolNameVariable })).toHaveCount(0);
    
}


async updateQuestionTag() {
    this.questionTag = `QuestionTag_${Math.floor(Math.random() * 100000)}`; // store as class property
    await this.clickEdittedBtn.first().click();
    await this.typeQuestionTagTxtBox.fill(this.questionTag);
    await this.updateBtnTag.click();
    await this.successfulUpdatedTagMsg.click();

}

async deleteQuestionTag() {
  await this.clickDeleteBtn.nth(1).click();
  await this.tickDeleteCheckbox.check();
  await this.confirmDeleteBtn.click();
  await this.successTagDeleteToastMsg.click();
}

async updateSection() {
    await this.clickEdittedBtn.click();
    this.updatedSectionName = `UpdatedSectionName_${Math.floor(Math.random() * 100000)}`; // store as class property
    await this.typeSectionTextBox.fill(this.updatedSectionName);
    //await this.clickSelectPrincipleDropdown.click();
    //await this.clickFirstPrincipleFromDropdown.click()
    await this.typeGenericDescriptionTextBox.fill('This is updated section Description');
    await this.updatePrincipleBtn.click();
    await this.successUpdatedSectionToastMsg.click();
   
}

async deleteSection() {
  await this.clickDeletePrincipleBtn.click()
  await this.tickDeleteCheckbox.check();
  await this.confirmDeleteBtn.click();
  await this.successDeleteSectionToastMsg.click();
}

async editResponseField(){
    await this.clickEdittedBtn.first().click();
    await this.questionPromptTxtBox.fill('Text field Updated Response Field ');
    await this.typeGenericDescriptionTextBox.fill('This is a updated text field updated response field prompt');
    await this.responseFieldRequiredCheckbox.uncheck();
    await this.updatePrincipleBtn.click();
    await this.responseFieldUpdatedSuccessToastMsg.click(); 
}

async deleteResponseField(){
    await this.clickDeleteBtn.nth(1).click();
    await this.tickDeleteCheckbox.check();
    await this.confirmDeleteBtn.click();
    await this.responseFieldSuccessDeleteToastMsg.click();

}

async editScopeAndMetadataField(){
    await this.clickEdittedBtn.first().click();
    await this.questionPromptTxtBox.fill('text field scope updated');
    await this.updatePrincipleBtn.click();
    await this.ScopeAndMetadataUpdatedSuccessToastMsg.click();
  
}

async deleteScopeAndMetadata(){
    await this.clickDeleteBtn.nth(1).click();
    await this.tickDeleteCheckbox.check();
    await this.confirmDeleteBtn.click();
    await this.scopeAndMetaDataSuccessDeleteToastMsg.click();
  
}

// -------- CRUD Applicability Screening ------------------

async createApplicabilityScreening() {
  await this.applicabilityScreeningLink.click();
  await this.addNewScreeningQuestionBtn.click();
  await this.questionPromptTxtBox.fill('Are you sure you want to hide this section?');
  await this.questionDescriptionTextBox.fill('This is to hide section');
  await this.selectaSectionComboBox.click();
  await this.selectOption.first().click();
  await this.genericConfirmCreateBtn.click();
  await this.applicabilitySuccessToastMessage.click();
}

async updateApplicabilityScreening() {
  await this.clickEdittedBtn.click();
  await this.questionPromptTxtBox.fill('Are you sure you want to hide this updated section ?');
  await this.questionDescriptionTextBox.fill('This is the updated description of hiding the section');
  await this.deleteIcon.click();
  await this.selectaSectionComboBox.click();
  await this.applicabilityScreeningSectionsListing.first().click();
  await this.updatePrincipleBtn.click();
  await this.applicabilitySuccessUpdatedToastMsg.click();
}

async deleteApplicabilityScreening() {
  await this.clickDeleteBtn.nth(1).click();
  await this.tickDeleteCheckbox.check();
  await this.confirmDeleteBtn.click();
  await this.applicabilitySuccessDeletedToastMsg.click();
}


// ---------------------------


// -------- CRUD Member ------------------

async createMember() {
  await this.membersTabLink.click();
  await this.addMembersBtn.click();
  await this.selectMemberComboBox.click();
  await this.selectOptionBenjaminMember.click();
  await this.comboBox.click();
  await this.selectOptionBenjaminKeya.click();
  await this.comboBox.click();
  await this.selectOptionAashirKhan.click();
  await this.deleteIcon.nth(2).click();
  await this.confirmAddMembersBtn.click();
  await this.membersSuccessfullyUpdatedToastMsg.click();
}

async deleteMember() {
  await this.deleteBenjaminMember.locator('button').click();
  await this.tickDeleteCheckbox.check();
  await this.confirmDeleteBtn.click();
  await this.membersSuccessfullyUpdatedToastMsg.click();
  await this.deleteBenjaminKeya.locator('button').click();
  await this.tickDeleteCheckbox.check();
  await this.confirmDeleteBtn.click();
}

// ---------------------------

// -------- CRUD Help Content ------------------

async createHelpContent()
{
    await this.helpContenntLink.click();
    await this.addNewContentBtn.click();
    await this.helpContentTitleTextBox.fill('Help Content 1');
    await this.helpContentDescriptionTextBox.fill('This is help content 1');
    await this.nextBtnCta.click();
    await this.successfullyUpdatedHelpContentToastMsg.click();
    await this.nextBtnCta.click();
    await this.helpContentBodyTextBox.fill('This is body of new help content');
    await this.submitHelpContentBtn.click();
    await this.successfullyUpdatedHelpContentToastMsg.click(); 
}

async updateHelpContent()
{
   await this.clickEdittedBtn.first().click();
   await this.helpContentTitleTextBox.fill('New title 2');
   await this.helpContentDescriptionTextBox.fill('This is a new title 2');
   await this.nextBtnCta.click();
   await this.nextBtnCta.click();
   await this.helpContentBodyTextBox.fill('This is a updated body text message');
   await this.updatePrincipleBtn.click();
   await this.successfullyUpdatedHelpContentToastMsg.click();
}

async deleteHelpContent()
{
    await this.clickDeleteBtn.nth(1).click();
    await this.tickDeleteCheckbox.check();
    await this.confirmDeleteBtn.click();
    await this.successfullyUpdatedHelpContentToastMsg.click();
}

async protocolViewOnly()
{
    await this.clickMakeProtocolViewOnlyToggle.nth(1).click();
    await this.successfulProtocolUpdatedToastMsg.click();
}

// Regression cases

// Blank protocol name - submit button should be disabled
async blankProtocolName()
{
    await this.clickUserMenu();
    await this.clickProtocolLink()
    await this.clickProtocolBtn()

  // Fill description only
  await this.clickSignatureCheckbox()

  // Verify Submit button is disabled
  const saveButton = this.genericConfirmCreateBtn;
  await expect(saveButton).toBeDisabled();
}

async blankPrincipleName()
{

  await this.clickPrincipleTabBtn()
  await this.clickAddNewPrincipleBtn.click()
  await this.typeGenericDescriptionTextBox.fill('This is new');

  //Create button should be disabled
  const saveButton = this.genericConfirmCreateBtn;
  await expect(saveButton).toBeDisabled();
  await this.genericCancelBtn.click();
}

async blankSectionName()
{
  await this.clickSectionTab.click()
  await this.clickAddNewSectionBtn.click()

  await this.clickSelectPrincipleDropdown.click()
  await this.clickFirstPrincipleFromDropdown.click()
  await this.typeGenericDescriptionTextBox.fill('This is section 1 of principle 1');

  //Create button should be disabled
  const saveButton = this.genericConfirmCreateBtn;
  await expect(saveButton).toBeDisabled();
  await this.genericCancelBtn.click();
}

async blankResponseFieldNameAndBlankQuestionType()
{
  await this.clickResponseFieldTab.click()
  await this.clickAddNewResponseFieldBtn()

  await this.typeGenericDescriptionTextBox.fill('Level 1: Text Field Response description');
  await this.dataIDtagTxtBox.fill('1234');
  

  //Create button should be disabled
  const saveButton = this.genericConfirmCreateBtn;
  await expect(saveButton).toBeDisabled();
  await this.genericCancelBtn.click();

}

}
 