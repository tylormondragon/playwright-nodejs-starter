import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('textbox', { name: 'First name' }).click();
  await page.getByRole('textbox', { name: 'First name' }).fill('Tylor');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByText('Please enter a valid email').click();
});