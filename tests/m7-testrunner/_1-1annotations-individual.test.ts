import { test, expect } from '@playwright/test';

//test.skip(); // Can skip an entire file using the .skip annotation - unconditional skip

test.skip('Will not run', async ({ page }) => { // Can skip individual tests using the .skip annotation
    console.log('This should not be printed');
});

test('Skip (un)conditionally', async ({ page, browserName }) => { // 
    test.skip(browserName === 'chromium', 'Skipping on Chromium browsers'); // Can skip conditionally based on any runtime condition
});

test.fixme('Fixme (un)conditionally', async ({ page, browserName }) => { // Needs to be fixed can use as a todo marker

});

test('Will fail by annoytation', async ({ page }) => {
    test.fail(); // Marks a test as expected to fail

    expect(2).toBe(3); // This will pass but assertion is not correct
});