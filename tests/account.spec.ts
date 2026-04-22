import { test, expect } from "@playwright/test";

//test.describe("Account Page (Logged In)", () => {
//test by test (seq)
test.describe.serial("Account Page (Logged In)", () => {
  test("Access to the 'Orders'", async ({ page }) => {
    await page.goto("/my-account/orders");
    await expect(page).toHaveURL(/orders/);
  });

  test("Access to the 'Downloads'", async ({ page }) => {
    await page.goto("/my-account/downloads");
    await expect(page).toHaveURL(/downloads/);
  });
});

test.describe("Account Page (Not Looged In)", () => {
  // test.use({ storageState: { cookies: [], origins: [] } });
  test.use({ storageState: "notLoggedInState.json" });

  test("Verify the login and register is visible", async ({ page }) => {
    await page.goto("/my-account");
    await expect(page.locator('form[class*="login"]')).toBeVisible();
    await expect(page.locator('form[class*="register"]')).toBeVisible();
  });
});
