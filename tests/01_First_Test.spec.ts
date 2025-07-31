// Import Playwright module
import { test, expect } from "@playwright/test";

//Write a test
test("My first Playwright TypeScript test", async ({ page }) => {
  // Go to URL
  await page.goto("https://www.google.com");

  //Click Accept All if the Google prompt appears
  const acceptAllButtonGoogle = page.getByRole('button', { name: 'Accept all' });

  try {
    if (await acceptAllButtonGoogle.isVisible()) {
      await acceptAllButtonGoogle.click();
    }
  } catch (e) {
    // Button not found in the DOM; ignore and continue
  }

  //Search with keywords
  await page.getByRole("combobox", { name: "Search" }).fill("playwright by testers talk");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");

  //Click on playlist
  await page.getByRole("link", { name: "Playwright by Testers Talk☑️" }).first().click();

  //If Accept All Youtube button appears
   const acceptAllButtonYoutube = page.getByRole('button', { name: 'Accept all' });

  try {
    if (await acceptAllButtonYoutube.isVisible()) {
      await acceptAllButtonYoutube.click();
    }
  } catch (e) {
    // Button not found in the DOM; ignore and continue
  }

  //Validate Web Page title
  await expect(page).toHaveTitle('Playwright by Testers Talk☑️ - YouTube');

});
