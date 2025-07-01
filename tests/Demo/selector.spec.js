import {test, expect} from '@playwright/test'

test('Selector Demo', async({page}) => {
 await page.goto('https://www.saucedemo.com/v1/')
 await page.pause()
// using any object property //
 await page.click('id=user-name')
 await page.locator('id=user-name').fill('standard_user')
 await page.locator('[id=user-name]').fill('problem_user')

 //await page.click('id=password')
 //await page.locator('id=password').fill('secret_sauce')

 await page.locator('#login-button').click()

 //using XPath
 await page.locator('xpath=//*[@id="password"]').fill('secret_sauce')
 await page.locator('//*[@id="password"]').fill('secret_sauce')
 //using text
 await page.locator('text=LOGIN').click()
 await page.locator('input:has-text("LOGIN")').click()
 await page.pause()

})