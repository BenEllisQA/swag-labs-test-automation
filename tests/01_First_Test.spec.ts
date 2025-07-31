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

  //Click into the Username field and provide an incorrect username
  await page.locator('#user-name').fill('incorrect.username')

  //Click into the Username field and provide an incorrect password
  await page.locator('#password').fill('incorrectpassword')

  //Click the login button
  await page.getByRole('button', { name: 'Login' }).click();
});
