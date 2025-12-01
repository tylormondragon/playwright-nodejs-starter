import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',

  webServer: {
    command: 'npm start',
    url: 'https://localhost:3000/',
  }
});