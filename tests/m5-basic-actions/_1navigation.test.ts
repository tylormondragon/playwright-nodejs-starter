import { test, expect } from "@playwright/test";

const homeTitle = 'Credit Association';
const savingsTitle = 'Save with us';


/**
 * test.use({navigationTimeout: 3000});
 * This will set the navigation timeout for any test on this page
 */ 
test('Back, forward, reload (refresh) test', async ({ page }) => {
    await page.goto('/', {waitUntil: 'load', timeout: 3000}); // Timeout useful to check for latency - dedicated tests for these

    await page.goto('/savings.html');
    await expect(page).toHaveTitle(savingsTitle);

    await page.goBack();
    await expect(page).toHaveTitle(homeTitle);

    await page.goForward();
    await expect(page).toHaveTitle(savingsTitle);

    await page.reload();
    await expect(page).toHaveTitle(savingsTitle);
});