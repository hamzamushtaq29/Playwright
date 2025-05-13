-------How to add assertions:----------------
    Present/not present
    visible/hidden
    Enabled/Disablednpn
    Text matches value or not
    Element attribute
-------------------Commands:-----------------------
    npx playwright test tests/assertion.spec.js --project firefox  --headed
    npx playwright test  --ui

    -------how many assertions we can apply on text fields--------------------
    assertions
    before each
    after each
    test cases
    fill method with assertion

    Date picker
    upload single file
    upload multiple file
    Mouser hover.    
    
    https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
    I have followed this link for Git setup and installation.

    New tab:-
        1. npm install --save-dev serve // insatall a static server thorugh this command
        2. "scripts": {
  "start": "serve ./ -l 3000"
} ////package.json me script add karo
ahan:

./ = current directory (jahan index.html hai)

-l 3000 = port 3000 (jahan Playwright access karega)
        3. Update your playwright.config.js
        // playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    command: 'npm start',
    port: 3000,
    timeout: 60 * 1000,
    reuseExistingServer: !process.env.CI,
  },

    4. npx playwright test
    Ye:

Automatically serve command se index.html serve karega

http://localhost:3000 pe page load karega

Test run karega
 

    

    