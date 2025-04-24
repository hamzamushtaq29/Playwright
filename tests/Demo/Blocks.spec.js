import { test, expect } from '@playwright/test';
test.describe.serial('Form Testing', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('https://testautomationpractice.blogspot.com/'); 
      await page.pause()
    })
    test.afterEach(async ({ page }) => {
      console.log('All tests completed successfully');
    })
    test('Fill Text fields', async ({ page }) => {
      ////Name////
      await page.locator('//input[@id="name"]').fill('Hamza Mushtaq').then(() => expect(page.locator('//input[@id="name"]')).toHaveValue('Hamza Mushtaq'))   
      ///Email
      await page.locator('//input[@id="email"]').fill('hamzamushtaq16@gmail.com')
      await expect(page.locator('//input[@id="email"]')).toHaveValue('hamzamushtaq16@gmail.com')
      ///Assertion for email format
      ///Assertion for email format validation (regex-based)
      const emailValue = await page.locator('//input[@id="email"]').inputValue();
      expect(emailValue).toMatch(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      //Phone number
      await page.locator('//input[@id="phone"]').fill('+92033414')
      await expect(page.locator('//input[@id="phone"]')).toHaveValue('+92033414')
      ///Address
      await page.locator('//textarea[@id="textarea"]').fill('Abcd efgh')
      await expect(page.locator('//textarea[@id="textarea"]')).toHaveValue('Abcd efgh')
    })
    test('Select Radio Button and check boxes', async ({ page }) => {
      ///Radio button
      await page.locator('//input[@id="male"]').click()
      await expect(page.locator('//input[@id="male"]')).toBeChecked()
      ////Check boxes
      await page.locator('//input[@id="sunday"]').click()
      await expect(page.locator('//input[@id="sunday"]')).toBeChecked()
    })
    test('Select an Option from Drop-down Menu', async ({ page }) => {
      ////Drop-down
      await page.locator('//select[@id="country"]').selectOption('canada')
      await expect(page.locator('//select[@id="country"]')).toHaveValue('canada')
      ///List
      await page.locator('//select[@id="animals"]').selectOption('cat')
      await expect(page.locator('//select[@id="animals"]')).toHaveValue('cat')
      ///Sorted List
      await page.locator('//select[@id="colors"]').selectOption('blue')
      await expect(page.locator('//select[@id="colors"]')).toHaveValue('blue')
    })
    test('Display a date', async ({ page }) => { 
      await page.locator('//input[@id="datepicker"]').click()
      await page.locator('//input[@id="datepicker"]').fill('04/08/1999')
      await expect(page.locator('//input[@id="datepicker"]')).toHaveValue('04/08/1999') 
    })
    test.only('Select and display a date ', async({page}) =>{
    const dateToSet = '16/16/1980'
    await page.evaluate(() => {
    document.querySelector('#txtDate').removeAttribute('readonly')
    })
    await page.locator('//input[@id="txtDate"]').fill(dateToSet)
    const selectedDate = await page.inputValue('//input[@id="txtDate"]')
    console.log('Date set:', selectedDate);
    })
    test('Pick date ranges and submit', async ({ page }) => {
      await page.locator('//input[@id="start-date"]').fill('1999-04-01')
      await page.locator('//input[@id="end-date"]').fill('2012-07-08')
      await page.locator('//button[@class="submit-btn"]').click()
      await page.locator('//div[@id="result"]')
      await expect(page.locator('//div[@id="result"]')).toHaveText(/You selected a range of \d+ days/);
    })
    const fs = require('fs')
    const singleFilePath = 'C:/Users/hamza.m/Downloads/abc.txt'; 
    const multipleFilePaths = [
        'C:/Users/hamza.m/Downloads/abc1.txt',
        'C:/Users/hamza.m/Downloads/abc2.txt'
    ]; 
    //  Upload a Single File
    test('Upload a single file', async ({ page }) => {
      const fileInput = await page.locator('#singleFileInput')
      await fileInput.setInputFiles(singleFilePath)
      // Click the submit button
      await page.getByRole('button', { name: 'Upload Single File' }).click()
      // Validate the uploaded file details
      await expect(page.locator('#singleFileStatus')).toContainText('Single file selected')
      console.log('Single file upload test passed.')
    })
    // Submit Without Selecting a File (Validation)
    test('Submit a single file form without selecting a file', async ({ page }) => {
        await page.getByRole('button', { name: 'Upload Single File' }).click()
        // Check for validation message
        await expect(page.locator('#singleFileStatus')).toHaveText('No file selected.')
        console.log('Single file empty submission validation test passed.')
    })
    //Test Case 3: Upload Multiple Files
    test('Upload multiple files', async ({ page }) => {
        const fileInput = await page.locator('#multipleFilesInput')
        await fileInput.setInputFiles(multipleFilePaths)
        //Click the submit button
        await page.getByRole('button', { name: 'Upload Multiple Files' }).click()
        // Validate uploaded files
        await expect(page.locator('#multipleFilesStatus')).toContainText('Multiple files selected')
        console.log('Multiple files upload test passed.')
    })
    // Submit Multiple File Form Without Selecting Files
    test('Submit multiple files form without selecting files', async ({ page }) => {
        await page.getByRole('button', { name: 'Upload Multiple Files' }).click()
        // Check validation message
        await expect(page.locator('#multipleFilesStatus')).toHaveText('No files selected.')
        console.log('Multiple file empty submission validation test passed.')
    })
})