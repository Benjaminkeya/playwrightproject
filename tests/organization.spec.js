import { test } from '../Pages/auth.setup.js';
import {organizations} from '../Pages/organization.page.js';

// Load fixture data
const account = require('../fixtures/erm.json');

test.describe('Organization Test Suite', () => {
    let organization;

     test.beforeEach(async ({ authenticatedPage}) => {
           const page = authenticatedPage;
        // Initialize Page Objects with the current test's page context
          organization = new organizations(page);
          
         //switch to test orhanization
          await organization.switchOrg( account.TestOrg);
    
    });

    test('@Smoke @Sanity @Regression Switch organization', async () => {
        // SwitchOrg
       
    });

    test('@Sanity @Regression Add Dashboard Report', async () => {
        await organization.addReport(
            account.ReportTitle,
            account.ReportDesc,
            account.ReportiFrameCode,
            account.Assignee,
            account.ReportID,
            "The report has been created successfully."
        );
    });

    test(' @Sanity @Regression Edit Dashboard Report', async () => {
        await organization.editReport(
            account.ReportEditedTitle,
            "The report has been updated successfully"
        );
    });

    test('@Sanity @Regression Delete Dashboard Report', async () => {
        await organization.deleteReport(
            "The report has been deleted successfully",
            account.ReportEditedTitle
        );
    });
});
