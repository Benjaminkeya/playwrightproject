// logout.spec.js

import { expect } from '@playwright/test';
import { test } from '../Pages/auth.setup.js';
import { loginPage } from '../Pages/login.page.js';
import { logoutPage } from '../Pages/logout.page.js';

test.describe('Logout Test Suite', () => {
  test('@Smoke @Sanity @Regression User should successfully log out', async ({ authenticatedPage }) => {
    const page = authenticatedPage;

    const login = new loginPage(page);
    const logout = new logoutPage(page);

    await logout.logoutUser();
    await expect(login.loginButton).toBeVisible();
  });
});
