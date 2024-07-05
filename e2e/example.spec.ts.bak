import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
});

test('start at 0', async ({ page }) => {
    // Expect button content to be 0 at startup
    await expect(page.locator("//button")).toHaveText(/count\s+is\s+0/i);
});

test('is 2 after 2 clicks', async ({ page }) => {
    // Expect button content to be 2 after 2 clicks
    await page.locator("//button").click();
    await page.locator("//button").click();
    await expect(page.locator("//button")).toHaveText(/count\s+is\s+2/i);
});

