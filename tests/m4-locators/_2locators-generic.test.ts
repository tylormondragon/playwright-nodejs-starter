import { test, expect } from '@playwright/test';

test('Generic locators examples', async ({ page }) => {
    await page.goto('');

    await page.locator('.needs-validation label[for="firstName"]').fill('John'); // Using CSS selector to locate the input field

    await page.locator('//button[@id="register"]').click(); // Using XPath to locate the button

    await expect(page.locator('//div[normalize-space()="Valid last name is required"]')).toBeVisible(); // Using XPath to locate the warning message
});