const {test, expect} = require('@playwright/test');

test.describe("Test examples",()=>{

    test("Testing Selectors", async ({page}) => {

        await page.goto('https://demoqa.com/text-box');
        await page.locator('#userName').type("Test Username");                            // Id Selector
        await page.locator('[placeholder="name@example.com"]').type('testmail@test.com'); // Atribute Selector
        await page.locator('#currentAddress').type('This is the current address');
        await page.locator('#permanentAddress').type("This is the permanent address");
        await page.locator('button:has-text("Submit")').click();                          // Matching condition Selector

    })

})