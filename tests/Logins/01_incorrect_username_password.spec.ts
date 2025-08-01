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

  //Click into the Username field and provide an incorrect username
  await page.locator('#user-name').fill('incorrect.username')

  //Click into the Username field and provide an incorrect password
  await page.locator('#password').fill('incorrectpassword')

  //Click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  //Verify error message is visible and text is correct
  await expect(page.getByRole('heading', { level: 3, name: 'Epic sadface: Username and password do not match any user in this service'})).toBeVisible();

  //Close error message
  await page.locator('.error-button').click()

  //Verify error message is no longer visible
  await expect(page.getByRole('heading', { level: 3, name: 'Epic sadface: Username and password do not match any user in this service'})).toBeHidden();
});
