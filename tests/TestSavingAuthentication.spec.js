const {test, expect } = require('@playwright/test');


test.describe('Authentication', () => {
    test.use({                                  // Playwright will automaticly login before each test with info from storage
        storageState:'auth.json'
    })

    test.beforeEach(async ({page})=>{
        await page.goto('https://parabank.parasoft.com/parabank/index.htm'); 
    })

    // test('Saving Authentication', async ({page}) => {
    //     await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    //     await page.locator('input[name="username"]').click();
    //     await page.locator('input[name="username"]').fill('TestUser');
    //     await page.locator('input[name="password"]').click();
    //     await page.locator('input[name="password"]').fill('testpassword');
    //     await page.getByRole('button', { name: 'Log In' }).click();

    //     await page.context().storageState('path:auth.json');

    // })

    test("Click Transfer Funds", async ({page }) => {
        await page.locator('text=Transfer Funds').first().click();

    })    

    test("Click Bill Pay", async ({page }) => {
        await page.locator('text=Bill Pay').first().click();

    })    

})