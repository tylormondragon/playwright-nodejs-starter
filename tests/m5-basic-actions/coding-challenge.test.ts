import { test, expect } from '@playwright/test';

test('Validation reset test', async ({ page }) => {
    await page.goto('/');    

    await page.getByRole('button', { name: 'Register' }).click();
    await expect(page.getByText('Please enter a valid email')).toBeVisible();
    await expect(page.getByText('Valid first name is required')).toBeVisible();
    await expect(page.getByText('Valid last name is required')).toBeVisible();

    await page.reload();

    await expect(page.getByText('Please enter a valid email')).not.toBeVisible();
    await expect(page.getByText('Valid first name is required')).not.toBeVisible();
    await expect(page.getByText('Valid last name is required')).not.toBeVisible();
});