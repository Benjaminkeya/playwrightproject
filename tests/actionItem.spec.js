import { test } from '../Pages/auth.setup.js';
import { actionItemPage } from '../Pages/actionItem.page.js';
import { entityPage } from '../Pages/entities.page.js'; 
import { Assessments } from '../Pages/assessments.page.js';
import { protocolbuilder, ProtocolBuilderPage } from '../Pages/protocolbuilder.page.js';

const account = require('../fixtures/erm.json');
import path from 'path';



test.describe('Organization Level Action Item', () => {
  let actionItem;
  let assessment

    test.beforeEach(async ({authenticatedPage}) => {
        const page = authenticatedPage;
        actionItem = new actionItemPage(page);  
        assessment = new Assessments(page) 

    });

    test('@Smoke @Sanity @Regression Add Org level Action Item', async () => {
        await actionItem.CreateOrganizationLevelActionItem(account.Name,account.Description,'The action Item has been created successfully');  
    });  
    test('@Smoke @Regression Edit Action Item', async () => {
        await actionItem.editOrgLevelActionItem(account.newName,'The action Item has been updated successfully');            
    });

    test('@Sanity @Regression Delete Action Item', async () => {
        await actionItem.deleteOrgLevelActionItem();  
    });
    });

  test.describe('Entity Level Action Item', () => {
     let entity;
     let actionItem;

  test.beforeEach(async ({ authenticatedPage }) => {
    const page = authenticatedPage;
    entity = new entityPage(page);
    actionItem = new actionItemPage(page);
    await entity.clickEntitiesTab();
  });

  test('@Smoke @Sanity @Regression Add Entity level Action Item', async () => {
    await entity.createEntity(account.Name,account.Address,'54545fd32',account.Name,'Entity created successfully');
    await entity.clickFirstEntityLink();
    await actionItem.createEntityLevelActionItem(account.Name,account.Description,'The action Item has been created successfully');
  });

    test('@Smoke @Regression Edit Entity Level Action Item', async () => {
      await entity.clickFirstEntityLink();
      await actionItem.editEntityLevelActionItem(account.newName,'The action Item has been updated successfully');
    });  
    
    test('@Sanity @Regression Delete Entity Level Action Item', async () => {
      await entity.clickFirstEntityLink();
      await actionItem.deleteEntityLevelActionItem('The action Item has been deleted successfully.');  
    });
    });

    test.describe('Question Level Action Item', () => {
    let actionItem;
    let entity ;
    let assessment;

  test.beforeEach(async ({authenticatedPage }) => {
    const page = authenticatedPage;
    entity = new entityPage(page);
    assessment = new Assessments(page);
    actionItem = new actionItemPage(page);
    await entity.clickEntitiesTab();
    await entity.clickFirstEntityLink();
    
    });

    test('@Smoke @Sanity @Regression Add Question level Action Item', async () => {
        await assessment.createNewAssessment(account.Name,account.assessmentDescription);
        await actionItem.createQuestionLevelActionItem(account.Name,account.Description, "The action Item has been created successfully");
    });
    test('@Smoke @Regression Edit Question Level Action Item', async () => {
      await assessment.openAssessment();
      await actionItem.editQuestionLevelActionItem(account.newName,'The action Item has been updated successfully');  
    });  
    
    test('@Sanity @Regression Delete Question Level Action Item', async () => {
       await assessment.openAssessment();
       await actionItem.deleteQuestionLevelActionItem('The action Item has been deleted successfully.');    
  });
  });

  test.describe('My Action Items Suite', () => {
  let actionItem;

    test.beforeEach(async ({ authenticatedPage}) => {
        const page = authenticatedPage;
        actionItem = new actionItemPage(page);
        await actionItem.navigateToMyActionItems(); 
    });

    test('@Smoke @Sanity @Regression Create Action Item', async () => {

      await actionItem.createActionItemFromMyActionItems(account.Name,account.Description,'The action Item has been created successfully');  
  });
    test('@Smoke @Regression Edit Action Item', async () => {
      await actionItem.editActionItemFromMyActionItems(account.newName,'The action Item has been updated successfully');    
    });

    test('@Sanity @Regression Delete Action Item', async () => {
      
      await actionItem.deleteActionItemFromMyActionItems('The action Item has been deleted successfully.');   
      
    });
    
    });

    test.describe('Corrective Action Dashboard', () => {
    let actionItem;
    let entity;
    let assessment;

    test.beforeEach(async ({ authenticatedPage}) => {
        const page = authenticatedPage;
        entity = new entityPage(page);
        assessment = new Assessments(page);
        actionItem = new actionItemPage(page);
         await entity.clickEntitiesTab();
         await entity.clickFirstEntityLink();
         await assessment.openAssessment();
    });

    test('@smoke Create Corrective Action Item', async () => {
     // await assessment.createNewMLAssessment(account.Name, account.assessmentDescription);
     await actionItem.createCorrectiveActionItem(account.Description,'The action Item has been created successfully');
  });
    test('@Smoke @Regression Edit Corrective Action Item', async () => {
      
     await actionItem.editCorrectiveActionItem(account.newName,'The action Item has been updated successfully');
  });
    test('@Sanity @Regression Delete Corrective Action Item', async () => {
       
     await actionItem.deleteCorrectiveActionItem('The action Item has been deleted successfully.');
  });
   });
   
  test.describe('Manage Action items ', () => {
    let actionItem;
   
   const filePath = path.join(__dirname, '../fixtures/file-sample.pdf')

    test.beforeEach(async ({ authenticatedPage}) => {
        const page = authenticatedPage;
        actionItem = new actionItemPage(page);
        await actionItem.navigateToMyActionItems();    
         
    });

    test('@Sanity @Regression View Verified Status', async () => {
       await actionItem.viewVerifiedStatus();
    
  });

  test('@Smoke @Sanity @Regression Add comments', async () => {
       await actionItem.addComments(account.actionItemComments,'The comment was created successfully.');
    
  });

  test('@Smoke @Regression Edit/Update comments', async () => {
       await actionItem.editComments(account.updatedActionItemComments);
    
  });

  test('@Sanity @Regression Delete comments', async () => {
       await actionItem.deleteComments(account.deleteActionItemComments);
    
  });

   test('@Sanity @Regression Upload Evidence Files', async () => {
        await actionItem.uploadEvidenceFiles(filePath);
  });

   test('@Sanity @Regression Delete Evidence Files', async () => {
       await actionItem.deleteEvidenceFiles();
    
  });

  test('@Sanity @Regression View Action Item History', async () => {
       await actionItem.viewActionItemHistory();  
  });

  test('@Sanity @Regression Turn off notification for Action Items', async () => {
       await actionItem.turnOffNotifications();  
  });

  test('@Sanity @Regression Turn on notification for Action Items', async () => {
       await actionItem.turnOnNotifications();  
  });

  test('@Sanity @Regression Export Action Items', async () => {
       await actionItem.exportActionItems('Your file has been downloaded successfully');  
  });

   test('@Sanity @Regression Search Action item by Title, ID & Description', async () => {
        await actionItem.searchActionItem(); 
       
  });

  test('@Sanity @Regression Show Columns by check & uncheck', async () => {
       await actionItem.showColumnsInActionItemTable(); 
  });

  test('@Sanity @Regression Filter Action Items', async () => {
       await actionItem.filterActionItems(); 
       await actionItem.resetFilters();
  });

  test('@Sanity @Regression ActionITems Tags', async () => {
       await actionItem.actionItemTagsANDFilter(account.actionItemTagName);
   });

   test('@Sanity @Regression Action Items Drag and Drop', async () => {
       await actionItem.actionItemDragANDDrop();
   });
   });

   test.describe('My Action Items', () => {
    let actionItem;
    let protocolbuilder;
    test.beforeEach(async ({ authenticatedPage}) => {
        const page = authenticatedPage;
        actionItem = new actionItemPage(page);
        protocolbuilder = new ProtocolBuilderPage(page);
         
    });

    test('@Sanity @Regression View my Action items', async () => {
      await protocolbuilder.clickUserMenu()
      await actionItem.viewMyActionItems();
         
 });
    });

  test.describe('Visualization Screen', () => {
    let actionItem;
    test.beforeEach(async ({ authenticatedPage}) => {
        const page = authenticatedPage;
        actionItem = new actionItemPage(page);
         
    });

    test('@Sanity @Regression Filter by Year', async () => {
       await actionItem.visualizationScreenYearFilter();  

    });

    test('@Sanity @Regression Filter by Status', async () => {
       await actionItem.visualizationScreenStatusFilter();  

    });

 
  });

