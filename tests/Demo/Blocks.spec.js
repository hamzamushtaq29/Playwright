import { test, expect } from '@playwright/test';
test.describe.serial('Form Testing', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('https://testautomationpractice.blogspot.com/'); 
      await page.pause()
    })
    test.afterEach(async ({ page }) => {
      console.log('All tests completed successfully');
    })
    /*test('Fill Text fields', async ({ page }) => {
      ////Name////
      await page.locator('//input[@id="name"]').fill('Hamza Mushtaq').then(() => expect(page.locator('//input[@id="name"]')).toHaveValue('Hamza Mushtaq'))   
      ///Email
      await page.locator('//input[@id="email"]').fill('hamzamushtaq16@gmail.com')
      await expect(page.locator('//input[@id="email"]')).toHaveValue('hamzamushtaq16@gmail.com')
      ///Assertion for email format///
      ///Assertion for email format validation (regex-based)
      const emailValue = await page.locator('//input[@id="email"]').inputValue();
      expect(emailValue).toMatch(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      //Phone number///
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
    test('Select and display a date ', async({page}) =>{
    const dateToSet = '16/16/1980'
    await page.evaluate(() => {
    document.querySelector('#txtDate').removeAttribute('readonly')
    })
    await page.locator('//input[@id="txtDate"]').fill(dateToSet)
    const selectedDate = await page.inputValue('//input[@id="txtDate"]')
    console.log('Date set:', selectedDate);
    })
    test('Pick date ranges and submit', async ({ page }) => {
      await page.locator('//input[@id="start-date"]').fill('1997-04-01')
      await page.locator('//input[@id="end-date"]').fill('2000-07-08')
      await page.locator('//button[@class="submit-btn"]').click()
      const result= await page.locator('//div[@id="result"]')
      await expect(result).toHaveText(/You selected a range of \d+ days/);
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
        console.log(' Test Github.')
    
    })*/
  
  test('handle simple alert', async ({page})=>{
    await page.locator('//button[@id="alertBtn"]').click()
    // Intercept the prompt dialog
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe('I am an alert box!')
    await dialog.accept('I am an alert box!') // Provide input to the prompt
  })
 // Verify the page displays 
 await page.click('//button[@id="alertBtn"]')
 //await expect(page.locator('text=I am an alert box!')).toBeVisible()
  })

  test('handle confirmation alert', async ({page})=>{
    await page.locator('//button[@id="confirmBtn"]').click()
    // Intercept the prompt dialog
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe('Press a button!')
    await dialog.accept('Press a button!') // Provide input to the prompt
  })
 // Verify the page displays
 await page.click('//button[@id="confirmBtn"]')
  })

  test('Handle prompt alert', async({page})=>{
    await page.locator('//button[@id="promptBtn"]').click()
    // Intercept the prompt dialog
  page.once('dialog', async (dialog) => {
    expect(dialog.type()).toBe('prompt')
    expect(dialog.message()).toBe('Please enter your name:')
    await dialog.accept('HAMZA') // Enter "Hamza" in the prompt
  })
  await page.click('//button[@id="promptBtn"]')
  // Verify the result of prompt is displayed
  await expect(page.locator('#demo')).toHaveText('Hello HAMZA! How are you today?');
  })

  test('should show unsuccessful message when prompt is cancelled', async ({ page }) => {
    page.once('dialog', async dialog => {
      expect(dialog.type()).toBe('prompt')
     expect(dialog.message()).toBe('Please enter your name:')
      await dialog.dismiss(); // Click Cancel
    })

    await page.click('//button[@id="promptBtn"]')
    await expect(page.locator('#demo')).toHaveText('User cancelled the prompt.')
  })

  test.only('Open pop-up window', async({page, context})=>{
    // Wait for popup window after clicking the button
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('#PopUp')  // The button that opens a new window
  ]);

  // Wait for the new page to load
  await popup.waitForLoadState();

  // Log the popup URL
  console.log('Popup URL:', popup.url());

  // Optionally verify something on the popup page
  //expect(popup.url()).toContain('http');
  })
  
  test('Open new tab on the button click', async ({page}) => {
 // const browser = await chromium.launch({ headless: false });
  //const context = await browser.newContext()
 // const page = await context.newPage()
  const [newPage] = await Promise.all([
  // wait for the window.open popup
  page.waitForEvent('popup'),
  // trigger the click that does window.open(...)
  page.click('button:has-text("New Tab")'),
]);
 
// make sure it’s loaded
await newPage.waitForLoadState();
 
// now you can interact with the new window:
console.log('New page URL:', newPage.url());
// e.g. assert it opened the right place
expect(newPage.url()).toBe('https://www.pavantestingtools.com/');
})
}) 