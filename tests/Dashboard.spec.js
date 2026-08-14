import { test } from '../Pages/auth.setup.js';
import {dashboardPage } from '../Pages/dashboard.page.js';
import {organizations} from '../Pages/organization.page.js';

// Load fixture data
const account = require('../fixtures/erm.json');

test.describe('Dashboard Test Suite', () => {
  let dashboard;
 

 test.beforeEach(async ({ authenticatedPage}) => {
            const page = authenticatedPage;
    // 1. Initialize Page Objects with the current page instance
     dashboard = new dashboardPage(page);
     //switch to test orhanization
     const organization = new organizations(page);
     await organization.switchOrg( account.TestOrg);
 
  });

  test('@Sanity @Regression Validate Dashboard elements', async () => {
    await dashboard.verifyDashboard(account.TestOrg);
  });

  test('View User profile link', async () => {
    await dashboard.isUserProfileDropDownVisible();
  });

  /**
   * C191: Adding a feedback
   * Commented out per client request to avoid flooded email notifications
   */
  // test('Adding a feedback', async () => {
  //   await dashboard.addFeedback('Test feedback', 'We appreciate that');
  // });

  test('@Sanity @Regression Help center', async () => {
    await dashboard.helpCenter('Assessment Group');
  });
//   test("What's new", async () => {
//     await dashboard.whatsNew('Feature Updates');
//   });
});