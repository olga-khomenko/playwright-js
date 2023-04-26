const {test, expect} = require('@playwright/test');

test.describe("Test actions with files",()=>{

    test("Test file download", async ({page}) => {

        await page.goto('https://the-internet.herokuapp.com/download');
        // Start waiting for download before clicking. Note no await.
        const donwnload_url = page.getByText('test.txt').first();
        donwnload_url.click();
        const download = await page.waitForEvent('download');

        // Wait for the download process to complete.
        const d_path = await download.path();
        console.log('PATH: ', d_path);
        const d_url = download.url();
        console.log('URL: ', d_url);
        
    })

    test("Test file upload", async ({page}) => {

        await page.goto('https://the-internet.herokuapp.com/upload');
        await page.setInputFiles('#file-upload', 'Upload files/UploadSampleFile.pdf');

        await page.locator('input:has-text("Upload")').click();
        await expect(page.locator('text=File Uploaded!')).toBeVisible();

        await expect(page.locator('text=UploadSampleFile.pdf')).toBeVisible();

    })




})