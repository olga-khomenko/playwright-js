const {test, expect} = require('@playwright/test');

test.describe("Test examples",()=>{

    test("Testing Selectors Assertions", async ({page}) => {

        await page.goto('https://demoqa.com/text-box');
        await page.locator('#userName').type("Test Username");                            // Id Selector
        await page.locator('[placeholder="name@example.com"]').type('testmail@test.com'); // Atribute Selector
        await page.locator('#currentAddress').type('This is the current address');
        await page.locator('#permanentAddress').type("This is the permanent address");
        await page.locator('button:has-text("Submit")').click();                          // Matching condition Selector

        const name = page.locator('#name');
        const email = page.locator('#email');
        const currentAddress = page.locator('p#currentAddress');
        const permanentAddress = page.locator('p#permanentAddress');

        await expect (name).toBeVisible();
        await expect (name).toHaveText('Name:Test Username');
        await expect (email).toBeVisible();
        await expect (email).toHaveText('Email:testmail@test.com');
        await expect (currentAddress).toBeVisible();
        await expect (currentAddress).toHaveText('Current Address :This is the current address');
        await expect (permanentAddress).toBeVisible();
        await expect (permanentAddress).toHaveText('Permananet Address :This is the permanent address');

    })

    test("Testing Assertions", async ({page}) => {

        await page.goto('https://demoqa.com/text-box');
        await expect(page).toHaveURL('https://demoqa.com/text-box');
        await expect(page).toHaveTitle('DEMOQA');


    })

})
