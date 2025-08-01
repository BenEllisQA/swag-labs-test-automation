// Import Playwright module
import { test, expect } from "@playwright/test";

//Write a test
test("Login with incorrect details", async ({ page }) => {
  // Go to URL
  await page.goto("https://www.saucedemo.com/");

  //Verify the Page has the correct title
  await expect(page).toHaveTitle('Swag Labs');

  //Verifies the page has the correct heading
  await expect(page.getByText('Swag Labs')).toBeVisible();

  //Click into the Username field and provide a correct username
  await page.locator('#user-name').fill('standard_user')

  //Click into the Username field and provide a correct password
  await page.locator('#password').fill('secret_sauce')

  //Click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  //Verify successful login
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});
