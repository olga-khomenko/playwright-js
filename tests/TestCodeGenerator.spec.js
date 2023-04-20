import { test, expect } from '@playwright/test';

test('PlaywrightRecorderGeneratedTest', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('Test Username');
  await page.getByPlaceholder('Full Name').press('Tab');
  await page.getByPlaceholder('name@example.com').fill('test@email.com');
  await page.getByPlaceholder('name@example.com').press('Tab');
  await page.getByPlaceholder('Current Address').fill('Current test address');
  await page.getByPlaceholder('Current Address').press('Tab');
  await page.locator('#permanentAddress').fill('Permanent test address');
  await page.getByRole('button', { name: 'Submit' }).click();
});