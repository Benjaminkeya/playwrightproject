const { test: base, expect } = require('@playwright/test');
const test = base.extend({
  authenticatedPage: async ({ page }, use) => {
    await page.goto(process.env.BASE_URL, {
    waitUntil: 'domcontentloaded', // faster + more reliable than networkidle
  });
  await use(page);
  },

clickEntityTableLink: async ({ authenticatedPage }, use) => {
  const command = async (rowIndex = 0, columnIndex = 0) => {
    // Click the "Entities" link properly
    // const entitiesLink = authenticatedPage.locator('a', { hasText: 'Entities' });
    // await entitiesLink.waitFor({ state: 'visible' });
  
    // Wait if navigation happens
    await authenticatedPage.waitForLoadState('networkidle');

    // Wait for table to appear
    const table = authenticatedPage.locator('.table-group-divider');
    await table.waitFor({ state: 'visible' });

    // Use stable locator chaining instead of nth-child
    const row = table.locator('tbody tr').nth(rowIndex);
    const cell = row.locator('td').nth(columnIndex);
    const cellLink = cell.locator('p a');

    await expect(cellLink).toBeVisible();
    await cellLink.click();

    await authenticatedPage.waitForLoadState('networkidle');
  };

  await use(command);
},

 clickAssessmentTableLink: async ({ authenticatedPage }, use) => {
  const command = async (rowIndex = 0, columnIndex = 0) => {
    // Wait for the table to be visible
    const table = authenticatedPage.locator('.table-group-divider');
    await table.waitFor({ state: 'visible' });

    // Target row (0-based index)
    const row = table.locator('tr').nth(rowIndex);

    // Target column (0-based index)
    const cell = row.locator('td').nth(columnIndex);

    const cellLink = cell.locator('a');

    // Ensure link is visible before clicking
    await cellLink.waitFor({ state: 'visible' });

    await cellLink.click();

    // Wait for navigation or page activity to settle
    await authenticatedPage.waitForLoadState('networkidle');
  };

  await use(command);
}
});

module.exports = { test, expect };
