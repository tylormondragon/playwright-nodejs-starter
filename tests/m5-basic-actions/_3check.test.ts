import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test('Check test', async ({ page }) => {
    await page.goto('/');

    const checkbox = page.getByRole('checkbox');
    const textarea = page.locator('#textarea');
    const message = 'msg';

    await checkbox.check();
    await textarea.fill(message);

    await expect(checkbox).toBeChecked();
    await expect(textarea).toHaveValue(message);
});