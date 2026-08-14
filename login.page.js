// LoginPage.js

import { expect } from '@playwright/test';
import { logoutPage } from './logout.page';
export class loginPage {

  
  constructor(page) {
    this.page = page;
    this.logout = new logoutPage(page)
  }

  // ---------- ELEMENTS ----------
  get emailInput() {return this.page.getByRole('textbox', { name: 'Email address' });}
  get passwordInput() {return this.page.getByRole('textbox', { name: 'Password' });}
  get loginButton() {return this.page.getByRole('button', { name: 'Sign in', exact: true });}
  get dashboardBreadcrumb() {return this.page.locator('.breadcrumb-item > span');}
  get passwordEye() {return this.page.getByRole('button', { name: 'visibility_off' });}
  get loginLogo() {return this.page.locator('img');}
  get assessmentsLink() {return this.page.getByRole('link', { name: 'Assessments' })}
  get dashboardLogo() {return this.page.getByRole('link', { name: 'Logo' });}
  get twoFactorHeading() {return this.page.getByRole('heading', { name: 'Two-step authentication.' });}
  get dashboardText() {return this.page.locator('small > :nth-child(2)');}
  get copyrightText() {return this.page.locator('.my-3 > .mb-1 > small');}
  get appVersion() {return this.page.locator('.my-3 > .text-muted > small');}
  get forgotPassBtn() {return this.page.getByRole('link', { name: 'Forgot Password?' });}
  get cancelPassResetBtn() {return this.page.getByRole('link', { name: 'Cancel' });}
  get sendBtn() {return this.page.getByRole('button', { name: 'Send Instructions' });}
  get twoFactorHeadingLocator() { return this.page.getByRole('heading', {name: 'Two-step authentication.' });}

  // ---------- PAGE ACTIONS ----------
  async navigate(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    await this.page.waitForLoadState('networkidle');
  }

  async viewPassword(password) {
    await this.passwordEye.click();
    await this.passwordInput.fill(password);
    await expect(this.passwordInput).toHaveValue(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.clickLogin();
  }

  // ---------- VERIFICATIONS ----------
  async verifyLoginPage() {
    await expect(this.loginLogo).toBeVisible();
    await expect(this.copyrightText).toBeVisible();
    await expect(this.appVersion).toBeVisible();
  }

  async verifySuccessfulLogin2FAPage() {
    await expect(this.twoFactorHeadingLocator).toBeVisible({ timeout: 10000 });
    await expect(this.page).toHaveURL(new RegExp('/login'));
  }

  async assertLoginError(message) {
    await expect(this.page.getByText(message)).toBeVisible();
  }

  // ---------- PASSWORD RESET FLOW ----------
  async resetPass(path, email, message) {
    await this.forgotPassBtn.click();
    await expect(this.page).toHaveURL(new RegExp(path));
    await this.emailInput.fill(email);
    await this.sendBtn.click();

    await expect(this.page.getByText(message)).toBeVisible();
  }

  async cancelPasswordReset(path) {
    await this.forgotPassBtn.click();
    await expect(this.page).toHaveURL(path + '/forgot-password');

    await this.cancelPassResetBtn.click();
    await expect(this.page).toHaveURL(path + '/login');
  }

  async logoutIfLoggedIn() {
  // dashboard logo only exists when authenticated
  if (await this.assessmentsLink.isVisible().catch(() => false)) {
    await this.assessmentsLink.hover();

    await this.logout.logoutUser()
    // wait until we're really logged out
    await expect(this.page).toHaveURL(/login/);
    await expect(this.loginLogo).toBeVisible();
  }
}

}
