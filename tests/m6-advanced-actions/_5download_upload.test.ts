import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Download a Single file and assert', async ({ page }) => {
    await page.goto('/savings.html');

    /**
     * File that can be previewed (pdf, etc) will not trigger download event
     * unless forced by setting proper headers on the server side. 
     * If the file will download it will trigger the event (.zip). If you do have 
     * a pdf file or other viewable file - you can run the test in headless mode and it should download fine
     */
    const downloadPromise = page.waitForEvent('download');

    await page.getByText('Download Our Offer').click();

    const download = await downloadPromise;

    const suggestedFileName = download.suggestedFilename();
    const filePath = 'download/' + suggestedFileName;

    // Save download to specific path
    await download.saveAs(filePath);

    expect(await download.failure()).toBeNull();

    expect(fs.existsSync(filePath)).toBeTruthy();

    // Clean up file after test
    fs.unlinkSync(filePath);
});

test('Upload a file', async ({ page }) => {
    await page.goto('/loans.html');

    const uploadInput = page.locator('input[type="file"]');
    await uploadInput.setInputFiles('download/dummy.pdf'); // ([]) for multiple files 

    // clear
    await uploadInput.setInputFiles([]);

    // submit - no button on this form but this would be the next logical step in a real web-application
});