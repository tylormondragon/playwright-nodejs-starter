import { test, expect } from '@playwright/test';

test('Simple assertions', async ({ page }) => {
    expect('a').toBe('a');
    expect(1 + 1).toBe(2);
    expect([1, 2, 3]).toContain(2);
    expect({ foo: 'bar' }).toEqual({ foo: 'bar' });

    await page.goto('https://playwright.dev/');
    const title = await page.title();
    expect(title).toBe('Playwright');
});

test('Test with simple auto-retrying assertions', async ({ page }) => {
    await page.goto('http://localhost:3000/');

    await expect(page.getByTestId('location')).toContainText('New York');

    await expect(page).toHaveTitle('Credit Association');
    await expect(page).toHaveURL('http://localhost:3000/');
});