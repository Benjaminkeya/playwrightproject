import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  timeout: 60000,
  expect: {
    timeout: 40000, // applies to ALL expect() assertions
  },

  retries: process.env.CI ? 10 : 0, // retry failed tests once or twice on CI

  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if test.only is left */
  forbidOnly: !!process.env.CI,

  /* Opt out of parallel on CI */

  workers: process.env.CI ? 1 : 1,

  /* Reporter */
  reporter: 'html',

  /* 🔐 Run auth once before all tests */
  globalSetup: './Pages/auth/global-setup.js',

  /* Shared settings */
  use: {
    /* 👇 Reuse authenticated state */
    storageState: 'storageState.json',
    baseURL: process.env.BASE_URL,
    headless: true,
    trace: 'on-last-retry',
    screenshot: 'only-on-failure',
    video: 'off',
    viewport: { width: 1280, height: 720 },

    /* --- NEW: filter unnecessary network requests --- */
    beforeEach: async ({ page }) => {
      await page.route('**/*', route => {
        const url = route.request().url();
        if (
          url.includes('google-analytics') ||
          url.includes('doubleclick') ||
          url.includes('mixpanel') ||
          url.endsWith('.png') ||
          url.endsWith('.jpg') ||
          url.endsWith('.svg')
        ) {
          return route.abort();
        }
        route.continue();
      });
    }, 
  },
  watch: false,
  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        permissions: ['clipboard-read', 'clipboard-write'],
        viewport: { width: 1280, height: 720 },
      },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'], viewport: { width: 1920, height: 1080 } },
    // },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
        viewport: { width: 1280, height: 720 },
      },
    },
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        permissions: ['clipboard-read', 'clipboard-write'],
        viewport: { width: 1280, height: 720 },
      },
    },
  ],
});