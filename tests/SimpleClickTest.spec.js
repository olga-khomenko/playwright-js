const {test, expect} = require('@playwright/test');

test("SimpleClickTest", async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com');
    await page.locator('text=Add/Remove Elements').click();
    await page.click('text=Add Element');
})

//Another way to declare locator

test("SimpleClickTestTwo", async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com');
    const element = page.locator('text=Add/Remove Elements')
    const addelement = page.locator('text=Add/Remove Elements')
    await element.click();
    await addelement.click();
})

// How to skip test in a specific browser

test("SimpleClickTestSkip", async ({page, browserName})=>{
    test.skip(browserName === 'firefox')
    await page.goto('https://the-internet.herokuapp.com');
    await page.locator('text=Add/Remove Elements').click();
    await page.click('text=Add Element');
})

// How to make full page screenshots

test("TakeScreenshotTest", async ({page, browserName})=>{
    await page.goto('https://the-internet.herokuapp.com');
    await page.locator('text=Add/Remove Elements').click();
    await page.screenshot({path:'screenshot.png',fullpage:true});
    await page.click('text=Add Element');
})

// How to screenshot a specified element on the page

test("TakeElementScreenshotTest", async ({page, browserName})=>{
    await page.goto('https://the-internet.herokuapp.com');
    await page.locator('text=Add/Remove Elements').click();
    const locator1 = page.locator('text=Add/Remove Elements');
    await locator1.screenshot ({path:'screenshoot2.png'});
    await page.click('text=Add Element');
})

// Using base URL

test("TestUsingBaseURL", async ({page, browserName})=>{
    await page.goto('/');
    await page.locator('text=Add/Remove Elements').click();
    await page.click('text=Add Element');
})

// Using base URL2

test("TestUsingBaseURL2", async ({page, browserName})=>{
    await page.goto('/checkboxes');
    await page.locator('text=Add/Remove Elements').click();
    await page.click('text=Add Element');
})