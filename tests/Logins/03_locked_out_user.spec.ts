// Import Playwright module
import { test, expect } from "@playwright/test";

//Write a test
test("Login with locked out  details", async ({ page }) => {
  // Go to URL
  await page.goto("https://www.saucedemo.com/");
  
  //Verify the Page has the correct title
  await expect(page).toHaveTitle('Swag Labs');

  //Verifies the page has the correct heading
  await expect(page.getByText('Swag Labs')).toBeVisible();

  //Click into the Username field and provide the username for the locked out account
  await page.locator('#user-name').fill('locked_out_user')

  //Click into the Password field and provide the Password for the locked out account
  await page.locator('#password').fill('secret_sauce')

  //Click the login button
  await page.getByRole('button', { name: 'Login' }).click();

  //Verify error message is visible and text is correct
  await expect(page.getByRole('heading', { level: 3, name: 'Epic sadface: Sorry, this user has been locked out.'})).toBeVisible();

  //Close error message
  await page.locator('.error-button').click()

  //Verify error message is no longer visible
  await expect(page.getByRole('heading', { level: 3, name: 'Epic sadface: Sorry, this user has been locked out.'})).toBeHidden();
});
