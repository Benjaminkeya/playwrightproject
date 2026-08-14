import { expect } from '@playwright/test';

const account = require('../fixtures/erm.json');

const randomNum = Math.floor(Math.random() * 1000) + 1;

export class Portfolios {
  constructor(page) { this.page = page; }

  // --- ELEMENTS (GETTERS) ---
  get entitiesTab () { return this.page.getByRole('link', { name: 'Portfolioss', exact: true }); }
  get firstPortfolioOnTheDashboard() { return this.page.locator('.d-flex.justify-content-between').nth(1); }
  get portfolioTab() { return this.page.getByRole('link', { name: 'Portfolios' }); }
  get newPortfolioBtn() { return this.page.getByRole('button', { name: 'add New', exact: true }); }
  get confirmDelPortfolioBtn() { return this.page.locator("input[type='checkbox']"); }
  get nameField() { return this.page.getByRole('textbox', { name: 'Portfolio Name *' }); }
  get descriptionField() { return this.page.getByRole('textbox', { name: 'Description' }); }
  get createPortfolioBtn() { return this.page.getByRole('button', { name: 'Create Portfolio' }); }
  get updatePortfolioBtn() { return this.page.getByRole('button', { name: 'Update' }); }
  get firstEntity() { return this.page.locator('#entity-item-0'); }
  get selectEntityField() { return this.page.locator('.rbt-input-wrapper .rbt-input-main'); }
  get saveBtn() { return this.page.getByRole('button', { name: 'Save' }); }
  get delPortfolioBtn1() { return this.page.getByRole('button', { name: 'delete Delete' }).first(); }
  get delPortfolioBtn2() { return this.page.locator('.btn-danger'); }
  get portfolioNameInnertext() { return this.page.locator('small.text-muted.ms-1'); }
  get confirmPortfolioName() { return this.page.locator('#productName'); }

  // --- ACTIONS ---

  async clickPortfolioTab() {
       await this.portfolioTab.click();
      const partialUrl = process.env.BASE_URL + '/portfolios/';
      await expect(this.page).toHaveURL(new RegExp(partialUrl));;
   }

  async addPortfolio(name, desc) {
    const fullName = name + randomNum;
    await this.newPortfolioBtn.click();
    await this.nameField.fill(fullName);
    await this.descriptionField.fill(desc);
    await this.createPortfolioBtn.click();
    await expect(this.page.getByText(fullName)).toBeVisible();
  }

  async updatePortfolio(name,notification) {
    const fullName = name + randomNum;
    await this.firstPortfolioOnTheDashboard.click();
    await this.updatePortfolioBtn.click();
    await this.nameField.fill(fullName);
    await this.selectEntityField.click();
    await this.firstEntity.click();
    await this.saveBtn.click();
    // await this.firstPortfolioOnTheDashboard.click({ force: true });
    // await expect(this.page.getByText(fullName)).toBeVisible();
    await expect(this.page.getByText(notification)).toBeVisible();
  }

  async deletePortfolio() {
    await this.firstPortfolioOnTheDashboard.click();
    await expect(this.delPortfolioBtn1).toBeEnabled();
    await this.delPortfolioBtn1.click();
    await this.confirmDelPortfolioBtn.check();
    await expect(this.delPortfolioBtn2).toBeEnabled();
    await this.delPortfolioBtn2.click();
  }
}