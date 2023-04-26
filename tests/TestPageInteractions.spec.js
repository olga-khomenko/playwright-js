const {test, expect} = require('@playwright/test');

test.describe("Test actions examples",()=>{

    test("Drag and Drop test example", async ({page}) => {

        await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
        await page.dragAndDrop('#column-a', '#column-b');
        await page.dragAndDrop('#column-b', '#column-a');
    })

    test("Checkboxes test example", async ({page}) => {

        await page.goto('https://the-internet.herokuapp.com/checkboxes');
        await page.locator('input[type="checkbox"]').first().check();
        await page.locator('input[type="checkbox"]').last().uncheck();
    })

    test("Dropdown list test example", async ({page}) => {

        await page.goto('https://the-internet.herokuapp.com/dropdown');
        await page.locator('#dropdown').selectOption('1');                  //selecting by value
        await expect(page.locator('#dropdown')).toHaveValue('1');

        await page.locator('#dropdown').selectOption({label:"Option 2"});   //selecting by label
        await expect(page.locator('#dropdown')).toHaveValue('2');
    })

    test("iFrame test example", async ({page}) => {

        await page.goto('https://the-internet.herokuapp.com/iframe');
        const frameTest = page.frameLocator('#mce_0_ifr').locator('html');
        await frameTest.click();
        await frameTest.type('This is just a test typing inside iframe.');
    })
    
    test("Hovering over objects", async ({page}) => {

        await page.goto('https://the-internet.herokuapp.com/hovers'); 
        await page.hover('[alt="User Avatar"]');
        await expect(page.locator('text=name: user1')).toBeVisible();
        await page.locator('text=View profile').first().click();
        await page.pause();

    })
})
