import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";

test.describe("Home Page", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test("Open Home Page and verify Title", async ({ page }) => {
    await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
  });

  test("Verify Heading Text is visible using Text Selector", async ({
    page,
  }) => {
    const headingText = page.locator("text=Think different. Make different");
    await expect(headingText).toBeVisible();
  });

  test("Verify Home Link is enabled using Text and CSS Selectors", async ({
    page,
  }) => {
    // const homeText = page.locator("#zak-primary-menu >> text=Home");
    const homeText = page.locator('#zak-primary-menu:has-text("Home")');

    await expect(homeText).toBeEnabled();
  });

  test("Verify Search Icon is visible using XPath Selector", async ({
    page,
  }) => {
    // const homeText = page.locator("#zak-primary-menu >> text=Home");
    const searchIcon = page.locator(
      '//*[@class="zak-header-actions"]//*[@class="zak-icon zakra-icon--magnifying-glass"]',
    );
    await expect(searchIcon).toBeVisible();
  });

  test("Verify the Text of all Nav Links", async () => {
    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    expect(await homePage.getNavLiknsText()).toEqual(expectedLinks);
  });
});
