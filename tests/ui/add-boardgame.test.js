const { test, expect } = require('@playwright/test');

test('Check add boardgame page', async ({ page }) => {
    await page.goto('https://localhost:8080/add-boardgame');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  