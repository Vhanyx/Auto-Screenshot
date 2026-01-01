const { chromium } = require('playwright');

//async IIFE to enable use of await at the top level
(async () => {

// Headless: false to see the browser action
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

//Await promise to navigate to duckduckgo
    await page.goto('https://duckduckgo.com/');
    const searchBox = page.locator('input[name="q"]');
    await searchBox.fill('Rocket Raccon Marvel', delay = 100);
    await searchBox.press('Enter');
// Click the first search result
    const firstResult = page.locator("#r1-0").first();
    await firstResult.click();
    await page.waitForLoadState('domcontentloaded');
// Take screenshot after navigation    
    await page.screenshot({ path: './Screenshots/rocket-racoon.png', fullPage: false });

    await browser.close();
})();

