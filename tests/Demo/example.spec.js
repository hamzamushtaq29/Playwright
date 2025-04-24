const {test, expect}= require('@playwright/test')
test('My first test', async({page})=> {
  await page.goto('https://playwright.dev/docs/writing-tests#first-test')
  await expect(page).toHaveTitle('Playwright')

})