import { test, expect } from '@playwright/test';

test('Filtering demo', async ({ page }) => {
    await page.goto('/savings.html');

    const rows = page.getByRole('row'); // This will match all rows including the header
    console.log('await rows.count()', await rows.count());

    const row = page.getByRole('row')
        .filter({ hasText: 'Competition' }); // This will filter to only the row that has the text 'Competition'

    console.log(await row.textContent());

    const cell = page.getByRole('row')
        .filter({ hasText: 'Competition' }) // Note the typo here
        .getByRole('cell')
        .nth(1);

    console.log(await cell.textContent());
});