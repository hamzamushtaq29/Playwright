import {test, expect} from '@playwright/test'


test('Asssertion Demo Test', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.pause()


    ///locate the elements
    ////Name////
    await page.locator('//input[@id="name"]').fill('Hamza Mushtaq').then(() => expect(page.locator('//input[@id="name"]')).toHaveValue('Hamza Mushtaq'))   
    
    ///Email
    await page.locator('//input[@id="email"]').fill('hamzamushtaq16@gmail.com')
    await expect(page.locator('//input[@id="email"]')).toHaveValue('hamzamushtaq16@gmail.com')
    ///Assertion for email format
    ///Assertion for email format validation (regex-based)
    const emailValue = await page.locator('//input[@id="email"]').inputValue();
    expect(emailValue).toMatch(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)

//  //Phone number
    await page.locator('//input[@id="phone"]').fill('+92033414')
    await expect(page.locator('//input[@id="phone"]')).toHaveValue('+92033414')

    ///Address
    await page.locator('//textarea[@id="textarea"]').fill('Abcd efgh')
    await expect(page.locator('//textarea[@id="textarea"]')).toHaveValue('Abcd efgh')

    ///Radio button
    await page.locator('//input[@id="male"]').click()
    await expect(page.locator('//input[@id="male"]')).toBeChecked()

    ////Check boxes
    await page.locator('//input[@id="sunday"]').click()
    await expect(page.locator('//input[@id="sunday"]')).toBeChecked()

    ////Drop-down
    await page.locator('//select[@id="country"]').selectOption('canada')
    await expect(page.locator('//select[@id="country"]')).toHaveValue('canada')

    ///List
    await page.locator('//select[@id="animals"]').selectOption('cat')
    await expect(page.locator('//select[@id="animals"]')).toHaveValue('cat')

    ///Sorted List
    await page.locator('//select[@id="colors"]').selectOption('blue')
    await expect(page.locator('//select[@id="colors"]')).toHaveValue('blue')

    //-------------Edit the values and apply assertion to verify the edit values-------------//

   ////Name
    await page.locator('//input[@id="name"]').fill('Ali Khan').then(() => expect(page.locator('//input[@id="name"]')).toHaveValue('Ali Khan'))

    //Email
    await page.locator('//input[@id="email"]').fill('Alikhan@gmail.com')
    await expect(page.locator('//input[@id="email"]')).toHaveValue('Alikhan@gmail.com')

    ///Phone number
    await page.locator('//input[@id="phone"]').fill('+12345678')
    await expect(page.locator('//input[@id="phone"]')).toHaveValue('+12345678')

    ///Adress
    await page.locator('//textarea[@id="textarea"]').fill('xyz')
    await expect(page.locator('//textarea[@id="textarea"]')).toHaveValue('xyz')

    //Radio
    await page.locator('//input[@id="female"]').click()
    await expect(page.locator('//input[@id="female"]')).toBeChecked()
    
   
   
    //uncheck selected check box
    // Uncheck a checkbox (Sunday) and assert it is unchecked
    await page.locator('//input[@id="sunday"]').uncheck();
    await expect(page.locator('//input[@id="sunday"]')).not.toBeChecked();

    ///Check new check box
    await page.locator('//input[@id="monday"]').click()
    await expect(page.locator('//input[@id="monday"]')).toBeChecked() 
  
    ////Drop-down menu
    await page.locator('//select[@id="country"]').selectOption('china')
    await expect(page.locator('//select[@id="country"]')).toHaveValue('china')

    ///List
    await page.locator('//select[@id="colors"]').selectOption('green')
    await expect(page.locator('//select[@id="colors"]')).toHaveValue('green')

    ///Sorted List
    await page.locator('//select[@id="animals"]').selectOption('deer')
    await expect(page.locator('//select[@id="animals"]')).toHaveValue('deer')
 
})