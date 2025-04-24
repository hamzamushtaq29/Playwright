import { test, expect } from '@playwright/test'
test('My first test', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle('Automation Testing Practice'); // Updated title
    await page.pause();
});