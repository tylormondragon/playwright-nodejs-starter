import { test, expect } from '@playwright/test';

test('Fill test', async ({ page }) => {
    await page.goto('');
    await page.getByLabel('First name').fill('Tylor');

    await page.getByLabel('Date of birth').fill('2025-12-01'); // International standard of YYYY-MM-DD regardless of locale
});

test('Click demo', async ({ page }) => {
    /**
     * Various ways to invoke multiple clicks on the same element
     */
    const btn = page.getByRole('button', { name: 'Register' });
    await btn.click();
    await btn.click();
    await btn.click();
    // ...

    for(let i = 0; i < 5; i++) {
        await btn.click();
    }

    await btn.click({ clickCount: 10 });
});