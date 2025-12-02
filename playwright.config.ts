import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:3000/',
    headless: true,
    launchOptions: { slowMo: 1000 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  }

});