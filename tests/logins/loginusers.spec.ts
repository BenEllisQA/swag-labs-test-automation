// Import Playwright module
import { test, expect } from "@playwright/test";
const testdata = JSON.parse(JSON.stringify(require("../../testdata.json")))

test.describe("Data Driven Login Test", function () 
{
    for(const data of testdata)
    {
        test.describe(`Login with Users ${data.id}`, function ()
        {
            test("Login to Application", async ({page}) =>
            {
                await page.goto("https://www.saucedemo.com/");
                await page.locator("#user-name").fill(data.username);
                await page.locator("#password").fill(data.password);
                await page.locator("#login-button").click();
            })
        })
    }
})