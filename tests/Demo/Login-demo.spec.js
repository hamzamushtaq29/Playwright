import {test, expect} from '@playwright/test'
test('Demo LOgin Test', async({page}) => {
    await page.goto('https://demo.applitools.com/')
    //await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Hamza')
    //await page.locator('[placeholder="Enter your password"]').fill('1234')
    await page.locator('xpath=//*[@id="password"]').fill('1234')
    await page.waitForSelector('text-Sign in')
    await page.locator('text=Sign in').click()
    await page.pause() 
})


/*test.only('Demo LOgin Test 2', async({page}) => {
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    await page.pause()
})*/
