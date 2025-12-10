import { test, expect } from '@playwright/test';


test.beforeEach('Meaningful description', async ({ page }) => {
    console.log('Before each setup');

    await page.goto('');
});

test()
