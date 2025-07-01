import { test, expect } from '@playwright/test';

  const fs = require('fs')
  test.describe('File Upload Tests', () => {
      
  
  
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/') 
        await page.pause()
      })
      test.afterEach(async ({ page }) => {
        console.log('Test completed')
      })



      const singleFilePath = 'C:/Users/hamza.m/Downloads/abc.txt'; // Update with actual file path
      const multipleFilePaths = [
          'C:/Users/hamza.m/Downloads/abc1.txt',
          'C:/Users/hamza.m/Downloads/abc2.txt'
      ]; // Add more files as needed
  
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
    test('Submit single file form without selecting a file', async ({ page }) => {
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

