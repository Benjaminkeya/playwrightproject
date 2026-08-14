import { test } from '../Pages/auth.setup.js';
import { entityPage } from '../Pages/entities.page.js';
import { Portfolios } from '../Pages/portfolio.page.js';
const account = require('../fixtures/erm.json');

test.describe('Portfolio Suite', () => {
  let entity;
  let portfolio;

  test.beforeEach(async ({ authenticatedPage }) => {
    entity = new entityPage(authenticatedPage);
    portfolio = new Portfolios(authenticatedPage);
    await portfolio.clickPortfolioTab();
  });

  test('@Smoke @Sanity @Regression Add portfolio', async () => {
    await portfolio.addPortfolio(account.Name, "Playwright description");
  });

 test('@Sanity @Regression Update a portfolio', async ({ clickEntityTableLink }) => {
    await entity.clickEntitiesTab();
    await entity.createEntity(account.Name, account.Address, "enabled", "54545fd32", account.Name);
    
    try {
      await portfolio.clickPortfolioTab();
      await portfolio.updatePortfolio(account.Name, 'The portfolio has been updated successfully.');
    } finally {
      // This runs even if the update fails
      await entity.clickEntitiesTab();
      await clickEntityTableLink(1, 1);
      await entity.deleteEntityPositive("The Entity has been deleted successfully");
    }
  });

  test('@Sanity @Regression Delete a portfolio', async () => {
    await portfolio.deletePortfolio();
  });
});

