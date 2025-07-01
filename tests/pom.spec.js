import {expect, test} from '@playwright/test'
import {formLocators} from '../locators/formLocators.json'
import {formClass} from '../pages/formPage'
test.describe('Form Automation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.pause()
  })
  test('Test automation using POM', async ({ page }) => {
    const form = new formClass(page)
    /*await form.formFill()
    await form.radiobtn()
    await form.dropdown()
    await form.date_picker1()
    await form.date_picker2()
    await form.date_picker3()
    await form.simple_alert()
    await form.confirmation_alert()*/
    await form.prompt_alert()
  })
  test.afterEach(({page}) => {
    console.log('All tests completed successfully');
  })
});