// Import Playwright module
import { test, expect } from "@playwright/test";

async function loginAndMeasureTime(page, username: string, password: string, maxLoadTimeMs: number) {
        // Go to URL
        await page.goto("https://www.saucedemo.com/");

        // Verifies the page has the correct heading
        await expect(page.getByText('Swag Labs')).toBeVisible();
        
        // FilL user details
        await page.fill('#user-name', username);
        await page.fill('#password', password);

        const start = Date.now();
        await page.getByRole('button', { name: 'Login' }).click();

        // Wait for the expected page to load
        await page.waitForSelector('.inventory_item_name ');
        const end = Date.now();

        // Calculate loadtime
        const loadTime = end - start;
        console.log(`${username} load time: ${loadTime}ms`);
        return loadTime;
    }

test('standard_user should load dashboard in under 1s', async ({ page }) => {
    const maxLoadTimeMs = 1000;
    const loadTime = await loginAndMeasureTime(page, 'standard_user', 'secret_sauce');
    expect(loadTime).toBeLessThanOrEqual(maxLoadTimeMs);
});

test('performance_glitch_user should take longer to load dashboard', async ({ page }) => {
    const maxLoadTimeMs = 1000;
    const loadTime = await loginAndMeasureTime(page, 'performance_glitch_user', 'secret_sauce');
    expect(loadTime).toBeGreaterThan(maxLoadTimeMs);
});