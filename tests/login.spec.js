import { test } from '@playwright/test';
import { loginPage } from '../Pages/login.page.js';
import { logoutPage } from '../Pages/logout.page.js'
const account = require('../fixtures/erm.json');

test.describe('Login Page Test Suite', () => {

  let login;
  let logout;
  test.beforeEach(async ({ page }) => {
    login = new loginPage(page);
    logout = new logoutPage(page);
    await login.navigate(process.env.BASE_URL);
    await login.logoutIfLoggedIn();
  });

  test('@smoke Login with Valid credentials', async () => {
    await login.login(process.env.ADMIN_EMAIL, process.env.ADMIN_PASSWORD);
    await login.verifySuccessfulLogin2FAPage();
  });

  test('@Regression View password using eye icon', async () => {
    await login.viewPassword(process.env.ADMIN_PASSWORD);
  });

  test('@Regression Login with invalid credentials shows error', async () => {
    await login.login(process.env.ADMIN_WRONG_EMAIL, process.env.ADMIN_WRONG_PASSWORD );
    await login.assertLoginError('These credentials did not match our records');
  });

  test('@Sanity @Regression Forgot password - send reset instructions', async () => {
    await login.resetPass(process.env.BASE_URL + '/forgot-password',process.env.ADMIN_EMAIL,'Success!');
  });

  test('@Regression Forgot password - cancel reset flow', async () => {
    await login.cancelPasswordReset(process.env.BASE_URL);
  });
});
