import { test } from '../Pages/auth.setup.js';
import{entityPage} from '../Pages/entities.page.js';
import { DataExportModal} from '../Pages/dataExport.page.js';
import {Assessments} from '../Pages/assessments.page.js'
const account = require('../fixtures/erm.json');


test.describe('Data Export', ()=>{
        let exportToCsv;
        let entities
        let assessments

   test.beforeEach(async ({ authenticatedPage}) => {
       const page = authenticatedPage;

        // dataExportModal = new DataExportModal(page);
        entities = new entityPage(page);
        exportToCsv = new DataExportModal(page);   
        assessments = new Assessments(page)    
});
   //DATA EXPORT - entity LEVEL
    test('@Smoke @Sanity @Regression  Export data from Entitites Page - Export To Excel (CSV)', async()=>{
        await entities.clickEntitiesTab();
        await exportToCsv.openDataExportModal();
        await exportToCsv.exportDataToCsv({protocolName: account.Protocol,TestOrganization:account.TestOrg})
    });

    test('@Smoke @Sanity @Regression Export data from Entitites Page - Generate Data Link', async({})=>{
        await entities.clickEntitiesTab();
        await exportToCsv.openDataExportModal();
        await exportToCsv.exportDataLink({protocolName: account.Protocol});
    });

     //DATA EXPORT FROM DASHBOARD - ASSESSMENTS PAGE
    test('@Smoke @Sanity @Regression Export data from Dashboard - Assessments Page (Export To Excel (CSV))', async({})=>{
        await exportToCsv.openDashboardAssessments();
        await exportToCsv.exportDataToCsv({protocolName: account.Protocol,TestOrganization:account.TestOrg});
    });
        
     test('@Smoke @Sanity @Regression Export data from Dashboard - Assessments Page (Generate Data Link)', async({})=>{
        await exportToCsv.openDashboardAssessments();
        await exportToCsv.exportDataLink({protocolName: account.Protocol });
    });

     //DATA EXPORT ORGANIZATION LEVEL
    test('@Smoke @Sanity @Regression Export data Organization level- Export To Excel (CSV)', async({})=>{
        await exportToCsv.openOrgLevelLink();
         await exportToCsv.exportDataToCsv({protocolName: account.Protocol,TestOrganization:account.TestOrg});
    });
    
     test('@Smoke @Sanity @Regression Export data Organization level - Generate Data Link', async({})=>{
        await exportToCsv.openOrgLevelLink();
        await exportToCsv.exportDataLinkAsmntOrg({
            protocolName: account.Protocol
             });
    });
    //DATA EXPORT - ASSESSMENT LEVEL
    test('@Smoke @Sanity @Regression Export data from Assessment Page - Export To Excel (CSV)', async({})=>{
        await entities.clickEntitiesTab();
        await entities.clickFirstEntityLink()
        await exportToCsv.openDataExportModalAssmntLevel();
        await exportToCsv.exportDataToCsv({protocolName: account.Protocol,TestOrganization:account.TestOrg});
    });

     test('@Smoke @Sanity @Regression Export data from Assessment Page - Generate Data Link', async({})=>{
        await entities.clickEntitiesTab();
        await entities.clickFirstEntityLink()
        await exportToCsv.openDataExportModalAssmntLevel();
        await exportToCsv.exportDataLinkAsmntOrg({
            protocolName: account.Protocol
             });
    });
    //DATA EXPORT - ACTION ITEMS
    test('@Smoke @Sanity @Regression Export data from Dashboard - Action Items (Export Excel)',async({})=>{
        await exportToCsv.clickActionItemsLink();
        await exportToCsv.exportExcelActionItems(account.TestOrg);
    })

    test('@Smoke @Sanity @Regression Export data from Dashboard - Action Items (Get Link)',async({})=>{
        await exportToCsv.clickActionItemsLink();
        await exportToCsv.actionItemsDataLinkExport();
    })

    //  DATA EXPORT - ENTITIES LIST
    test('@Smoke @Sanity @Regression entity Page - Export entity List',async({})=>{
        await entities.clickEntitiesTab();
        await exportToCsv.exportEntitiesList(account.TestOrg);
    })

     //  DATA EXPORT ASSESSMENT LEVEL - ASSESSMENT LIST
      test('@Smoke @Sanity @Regression Assessment level - Export Assessment List',async({})=>{
        await entities.clickEntitiesTab();
        await entities.clickFirstEntityLink();
        await exportToCsv.exportAssessmentList(account.TestOrg);
    })

    //DATA EXPORT FROM DASHBOARD - ASSESSMENTS LIST
    test('@Smoke @Sanity @Regression Dashboard - Export Assessment List',async({})=>{
        await exportToCsv.clickDashboardAssessmentsLink();
        await exportToCsv.exportAssessmentList(account.TestOrg)
    })


});