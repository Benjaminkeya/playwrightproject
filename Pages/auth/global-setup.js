const { request, chromium } = require('@playwright/test');
const { AuthAPI } = require('../auth.api');
const account = require('../../fixtures/erm.json');

async function globalSetup() {
  const apiContext = await request.newContext();
  const api = new AuthAPI(apiContext);

  // Login via API
  const beeToken = await api.loginBee(
    process.env.ADMIN_EMAIL,
    process.env.ADMIN_PASSWORD
  );
  const deToken = await api.loginDE(beeToken);

  // Create browser context to store cookies
  const browser = await chromium.launch();
  const context = await browser.newContext();

  await context.addCookies([
    {
      name: 'AUTH-TOKEN',
      value: beeToken,
      domain: '.bee.ermassess.com',
      path: '/api',
      secure: true,
      httpOnly: false
    },
    {
      name: 'AUTH-TOKEN',
      value: deToken,
      domain: 'de.ermassess.com',
      path: '/api',
      secure: true,
      httpOnly: false
    }
  ]);

  // Save storage state
  await context.storageState({ path: 'storageState.json' });

  await browser.close();
  await apiContext.dispose();
}

module.exports = globalSetup;