import {test, expect} from '@playwright/test'
test('Demo Test', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.pause()
    await page.locator('//input[@id="name"]').fill('Hamza')
    await page.locator('//input[@id="email"]').fill('Hamza@gmail.com')
    await page.locator('//input[@id="phone"]').fill('03352524157')
    await page.locator('//textarea[@id="textarea"]').fill('abcd1234')
    await page.locator('//input[@id="male"]').click()
    await page.locator('//input[@id="sunday"]').click()
    await page.locator('//input[@id="monday"]').click()
    await page.locator('//select[@id="country"]').selectOption('Canada')
  //await page.locator('xpath=button[normalize-space()="STOP"]').click()
    ///await page.locator((//button[normalize-space()='STOP'])[1])

   
    /*await page.locator('[placeholder="Enter your username"]').fill('Hamza')
    await page.locator('[placeholder="Enter your password"]').fill('1234')
    await page.locator('xpath=//*[@id="password"]').fill('1234')
    await page.waitForSelector('text-Sign in')
    await page.locator('text=Sign in').click()
    await page.pause()**/
})