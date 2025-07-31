// Import Playwright module
import { test, expect } from "@playwright/test";

//Write a test
test("My first Playwright TypeScript test", async ({ page }) => {
  // Go to URL
  await page.goto("https://www.saucedemo.com/");

  //Verify the Page has the correct title
  await expect(page).toHaveTitle('Swag Labs');

  //Verifies the page has the correct heading
  await expect(page.getByText('Swag Labs')).toBeVisible();
});
