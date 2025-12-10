import { test, expect } from '@playwright/test';

test('Basic filter locators examples - multiple matches', async ({ page }) => {
    await page.goto('');

    const buttons = page.getByRole('button'); // This will match multiple buttons

    console.log(await buttons.first().textContent()); // Get the text content of the first button
    console.log(await buttons.last().textContent()); // Get the text content of the last button
    console.log(await buttons.nth(1).textContent()); // Get the text content of the second button
});

test('Multiple matches test - count or iterate', async ({ page }) => {
    await page.goto('');
    await page.getByRole('button', { name: 'Register', exact: true }).click();

    const feedback = page.locator('.invalid-feedback'); // This will match multiple feedback messages

    await expect(feedback).toHaveCount(3); // Assert that there are 3 feedback messages

    for(const message of await feedback.all()) {
        console.log(`${await message.textContent()}`);
    }
});