const {test,expect} = require('@playwright/test');

test("Open Page", async ({page})=>{
    await page.goto('https://playwright.dev');

    await expect(page).toHaveURL('https://playwright.dev/');
})

test("Validate page header", async ({page})=>{
    await page.goto('https://playwright.dev');
    const title = await page.locator('div[class="navbar__inner"] >> b[class*="navbar__title"]');
    console.log('Title: ', title);
    
    await expect(title).toHaveText('Playwright');
})
