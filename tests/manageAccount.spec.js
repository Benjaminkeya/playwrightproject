import { test, expect } from '../Pages/auth.setup.js';
import { Portfolios } from '../Pages/portfolio.page.js';
import { entityPage } from '../Pages/entities.page.js'; 
import { ManageAccount } from '../Pages/manageAccount.page.js';
import { createRequire } from 'module';
const account = require('../fixtures/erm.json');

let manageAccount, portfolios, entities, page;

function initPageObjects(authenticatedPage) {
  page = authenticatedPage;
  manageAccount = new ManageAccount(page);
  portfolios = new Portfolios(page);
  entities = new entityPage(page);
}

// ─── Portfolio & Entity Setup ────────────────────────────────────────────────

test.describe("Portfolio and Entity Setup", () => {
  test.beforeEach(async ({ authenticatedPage }) => {
    initPageObjects(authenticatedPage);
  });

  test('@Smoke @Sanity @Regression Create Portfolio', async () => {
    await portfolios.clickPortfolioTab();
    await portfolios.addPortfolio("Portfolio", "Cypress description");
    await page.waitForTimeout(1000);
  });

  test('@Smoke @Sanity @Regression Create Entity', async () => {
    await entities.clickEntitiesTab();
    await entities.createEntity(
      account.Name,
      account.Address,
      "enabled",
      "54545fd32",
      account.Name
    );
  });
});

// ─── User Management ─────────────────────────────────────────────────────────

test.describe("@Smoke @Sanity @Regression User Management Test Suite", () => {
  test.beforeEach(async ({ authenticatedPage }) => {
    initPageObjects(authenticatedPage);
    await manageAccount.clickUserMenu(page);
    await manageAccount.clickManageLink(page);
  });

  test("@Smoke @Sanity @Regression Navigate to user management page", async () => {
    await manageAccount.validateManageUserPage();
  });

  test(" @Regression Add member with First Name field blank (Negative)", async () => {
    await manageAccount.addMemberWithout1stName(account.emailName, "Certifier");
  });

  test("@Smoke @Sanity @Regression Add member (Positive)", async () => {
    await manageAccount.addMemberPositive(account.emailName, "Certifier", "The member has been created successfully.");
  });

  test("@Smoke @Sanity @Regression Resend join request to added member", async () => {
    await manageAccount.resendJoinRequestToLastMember("Invitation was successfully sent");
  });

  test("@Smoke @Sanity @Regression Update member with all entity access", async () => {
    await manageAccount.updateLastMemberWithAllEntityAccess(account.emailName + "@pixeledge.io", "The member has been updated successfully");
  });

  test("@Smoke @Sanity @Regression Update member with all portfolio access", async () => {
    await manageAccount.updateLastMemberWithAllPortfolioAccess("The member has been updated successfully");
  });

  test(" @Sanity @Regression Export Members", async () => {
    await manageAccount.exportMembers(account.TestOrg);
  });

  test("@Sanity @Regression Delete the last added member (Positive)", async () => {
    await manageAccount.deleteLastMemberPositive('The member has been deleted successfully.');
  });
});

// ─── Manage Entity Tags ───────────────────────────────────────────────────────

test.describe("Manage Entity Tags Test Suite", () => {
  test.beforeEach(async ({ authenticatedPage }) => {
    initPageObjects(authenticatedPage);
    await manageAccount.clickUserMenu();
    await manageAccount.clickManageLink();
    await manageAccount.openEntityTagsTab();
  });

  test("@Sanity @Regression Add Entity Tag", async () => {
    await manageAccount.addEntityTag( account.Name, account.Description);
  });

  test("Update Entity Tag", async () => {
    await manageAccount.updateEntityTag( account.newName);
  });

  test("@Sanity @Regression Delete Entity Tag", async () => {
    await manageAccount.deleteEntityTag(page);
  });
});
