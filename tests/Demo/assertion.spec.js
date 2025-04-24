import {test, expect} from '@playwright/test'


test('Asssertion Demo Test', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.pause()
    //assertion
    //Check element present or not
    await expect(page.locator('text = GUI Elements')).toHaveCount(1)
    if(await page.$('text = GUI Elements')){
        await page.locator('text = GUI Elements').click()
    }
    //check element hidden or visible.
    await expect(page.locator('text = GUI Elements')).toBeVisible()
    ///await expect.soft(page.locator('text = GUI Elements')).toBeHidden()
     //check element enabled or disabled.
     await expect(page.locator('text = GUI Elements')).toBeEnabled()
   ///await expect.soft(page.locator('text = GUI Elements')).toBeDisabled()
     ///check text matches with values or not.///
     await expect(page.locator('text=GUI Elements')).toHaveText('GUI Elements')   
     await expect(page.locator('text=GUI Elements')).not.toHaveText('ABCD')
    //check attribute value
     await expect(page.locator('text=Name')).toHaveAttribute('class','form-group')   
    // await expect('GUI Elements').toHaveClass('post-title entry-title')
    //check pae URl and title.
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveTitle('/.testautomationpractice/')




})


