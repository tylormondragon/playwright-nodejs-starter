import { test, expect } from '@playwright/test';

test('Recommended built-in locators examples', async ({ page }) => {
    await page.goto('');

    const firstName = page.getByLabel('First name'); // If you are taking two or more actions, then store the locator in a variable
    await firstName.fill('John');
    await firstName.clear();

    await page.getByLabel('First name').fill('John'); // If you are taking one action, then you can chain the locator with the action

    await page.getByRole('button', { name: 'Register', exact: true }).click(); // Exact will need case match

    const warning = page.getByText('Valid last name is required');

    await expect(warning).toBeVisible();

}); 