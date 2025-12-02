import { test, expect } from '@playwright/test';

test('Check console', async ({ page }) => {
    /**
     * Must register listener before action that triggers console log
     * Will NOT catch uncaught exceptions from the page, must use page.on('pageerror') for that
     */
    page.on('console', msg =>  {
        console.log(msg);
        expect.soft(msg.type()).not.toEqual('error'); // Console error will be lowercased to 'error'
    });

    page.on('pageerror', error => {
        console.log(`Found an error: ${error.name} - ${error.message}   ${error.stack}`);
        expect.soft(error.name).not.toEqual('Error'); // Page error will be an Error object and capitalized
    });

    page.goto('/');

    await page.getByRole('button', { name: 'Register' }).click();

    //page.on('dialog', dialog => dialog.accept());
    
});