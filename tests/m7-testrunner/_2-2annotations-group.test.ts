import { test, expect } from '@playwright/test';

test.describe.skip('Suite A', () => {
    test('Test A.1', async ({ page }) => {
        await page.goto('');
        console.log('Test A.1');
    });

    test('Test A.2', async ({ page }) => {
        await page.goto('');
        console.log('Test A.2');
    });
});

test.describe('Suite B', () => {

    test.skip(({browserName}) => browserName === 'chromium', 'optional message');

    //test.skip(browserName === 'chromium', 'Does not work on Chromium')
    test('Test B.1', async ({ page }) => {
        await page.goto('');
        console.log('Test B.1');
    });

    test('Test B.2', async ({ page }) => {
        await page.goto('');
        console.log('Test B.2');
    });
});
