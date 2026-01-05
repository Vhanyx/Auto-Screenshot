const { chromium } = require('playwright');

async function runAutomation() {    

// Headless: false to see the browser action
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

//Await promise to navigate to duckduckgo
    await page.goto('https://duckduckgo.com/');
    const searchBox = page.locator('input[name="q"]');
    await searchBox.fill('Rocket Raccoon Marvel');
    await searchBox.press('Enter');
// Click the first search result
    const firstResult = page.locator("#r1-0").first();
    await firstResult.click(); 
    await page.waitForLoadState('domcontentloaded');
// Take screenshot after navigation    
    await page.screenshot({ path: './Screenshots/rocket-raccoon.png', fullPage: false });

    await browser.close();
}
 
runAutomation();