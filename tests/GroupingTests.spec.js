const {test, expect} = require('@playwright/test');

test.describe.parallel("RegressionTests",()=>{

    test.beforeEach(async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com');

    })

    test.afterEach(async ({page}) => {
        console.log('This test is finished');

    })

test("SimpleClickTest", async ({page})=>{
    await page.locator('text=Add/Remove Elements').click();
    await page.click('text=Add Element');
})


//Another way to declare locator

test("SimpleClickTestTwo", async ({page})=>{
    const element = page.locator('text=Add/Remove Elements')
    const addelement = page.locator('text=Add/Remove Elements')
    await element.click();
    await addelement.click();
})

// How to skip test in a specific browser

test("SimpleClickTestSkip", async ({page, browserName})=>{
    test.skip(browserName === 'firefox')
    await page.locator('text=Add/Remove Elements').click();
    await page.click('text=Add Element');
})

})
