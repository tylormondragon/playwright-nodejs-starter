import { test, chromium, webkit, firefox } from '@playwright/test';

test('Test with Page fixture', async ({ page }) => { // Page is called a 'fixture'
    for (const browserType of [chromium, webkit, firefox]) {

        await page.goto('https://playwright.dev/');

        console.log("Text content: ", await page.title());


    }
});

test('Other fixtures test', async ({ page, context, browser, browserName }) => {

});