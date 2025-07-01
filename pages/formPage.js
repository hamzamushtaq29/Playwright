import {expect, test} from '@playwright/test'
import { formLocators} from '../locators/formLocators.json'
import { formData} from '../fixtures/formData.json'

export class formClass{
 
    constructor(page){
      this.page = page
    }

    async formFill(){
      const page = this.page;
      await page.locator(formLocators.name).fill(formData.name).then(() => expect(page.locator(formLocators.name)).toHaveValue(formData.name))   
     // await page.locator(formLocators.name).fill('Hamza Mushtaq').then(() => expect(page.locator('//input[@id="name"]')).toHaveValue('Hamza Mushtaq'))   
      //Email
      await page.locator(formLocators.email).fill(formData.email)
      await expect(page.locator(formLocators.email)).toHaveValue(formData.email)
      ///Assertion for email format///
      ///Assertion for email format validation (regex-based)
      const emailValue = await page.locator(formLocators.email).inputValue();
      expect(emailValue).toMatch(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      //Phone number//
      await page.locator(formLocators.phone).fill(formData.phone)
      await expect(page.locator(formLocators.phone)).toHaveValue(formData.phone)
      ///Address///
      await page.locator(formLocators.textarea).fill(formData.textarea)
      await expect(page.locator(formLocators.textarea)).toHaveValue(formData.textarea)

    }
    async radiobtn(){
      const page = this.page
      ///Radio button
      await page.locator(formLocators.gender).click()
      await expect(page.locator(formLocators.gender)).toBeChecked()
      ////Check boxes
      await page.locator(formLocators.day).click()
      await expect(page.locator(formLocators.day)).toBeChecked()
    }
    async dropdown(){
      const page = this.page
      ////Drop-down
      await page.locator(formLocators.Country).selectOption(formData.Country)
      await expect(page.locator(formLocators.Country)).toHaveValue(formData.Country)
      ///List
      await page.locator(formLocators.Animals).selectOption(formData.Animals)
      await expect(page.locator(formLocators.Animals)).toHaveValue(formData.Animals)
      ///Sorted List
      await page.locator(formLocators.Colors).selectOption(formData.Colors)
      await expect(page.locator(formLocators.Colors)).toHaveValue(formData.Colors)
    }
    async date_picker1(){
      const page = this.page
      await page.locator(formLocators.Date1).click()
      await page.locator(formLocators.Date1).fill(formData.Date1)
      await expect(page.locator(formLocators.Date1)).toHaveValue(formData.Date1)
    }
    async date_picker2(){
      const page=this.page
      await page.evaluate(() => {
      document.querySelector('#txtDate').removeAttribute('readonly')
    })
      await page.locator(formLocators.Date2).fill(formData.Date2)
      const selectedDate = await page.inputValue(formLocators.Date2)
      console.log('Date set:', selectedDate);
    }
    async date_picker3(){
      const page= this.page
      await page.locator(formLocators.Date_start).fill(formData.Date_start)
      await page.locator(formLocators.Date_end).fill(formData.Date_end)
      await page.locator('//button[@class="submit-btn"]').click()
      const result= await page.locator('//div[@id="result"]')
      await expect(result).toHaveText(/You selected a range of \d+ days/);
    } 
    async simple_alert(){
      const page= this.page
      await page.locator('//button[@id="alertBtn"]').click()
    // Intercept the prompt dialog
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe('I am an alert box!')
    await dialog.accept('I am an alert box!') // Provide input to the prompt
  })
 // Verify the page displays 
 await page.click('//button[@id="alertBtn"]')
 //await expect(page.locator('text=I am an alert box!')).toBeVisible()
    }
    async confirmation_alert(){
      const page = this.page
      await page.locator('//button[@id="confirmBtn"]').click()
    // Intercept the prompt dialog
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toBe('Press a button!')
    await dialog.accept('Press a button!') // Provide input to the prompt
  })
 // Verify the page displays
 await page.click('//button[@id="confirmBtn"]')

    }
    async prompt_alert(){
      const page = this.page
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
    }
}
 