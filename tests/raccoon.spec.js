import { test, expect } from '@playwright/test';

test('Go to duckduckgo and search Rocket Raccoon Marvel ', async ({ page }) => {

  await page.goto('https://duckduckgo.com/');
    
    const searchBox = page.locator('input[name="q"]');
    await searchBox.fill('Rocket Racoon Marvel');
    await searchBox.press('Enter');

    const firstResultLink = page.locator("#r1-0").first();
    await firstResultLink.click();

    await page.screenshot({ path: 'rocket-racoon.png', fullPage: false });

})