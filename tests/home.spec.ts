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

  test("Verify Heading Text is visible using Text Selector", async () => {
    await expect(homePage.headingText).toBeVisible();
  });

  test("Verify Home Link is enabled using Text and CSS Selectors", async () => {
    await expect(homePage.homeText).toBeEnabled();
  });

  test("Verify Search Icon is visible using XPath Selector", async () => {
    await expect(homePage.searchIcon).toBeVisible();
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
