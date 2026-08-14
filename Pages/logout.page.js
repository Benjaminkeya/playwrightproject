// LogoutPage.js

import { expect } from '@playwright/test';

export class logoutPage {
  constructor(page) {
    this.page = page;
  }

  get userMenu() {
    //return this.page.locator("//await page.locator('//button[contains(normalize-space(), "hi")]').click();']");
    return this.page.getByRole('button', { name: /hi/i });
    //return this.page.getByRole('link',{name :'Hi'})
  }

  get logoutBtn() {
    return this.page.getByRole('link', { name: 'Logout' });
  }

  async logoutUser() {
    await this.page.waitForLoadState('networkidle');
    await expect(this.userMenu).toBeVisible();
    await this.userMenu.click();
    await this.logoutBtn.click();
    await expect(this.page).toHaveURL(/.*\/login/);
  }
}