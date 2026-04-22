import { Locator, Page } from "@playwright/test";

class HomePage {
  headingText: Locator;
  homeText: Locator;
  searchIcon: Locator;
  navLinks: Locator;
  getStartedBtn: Locator;
  constructor(private page: Page) {
    this.headingText = page.locator("text=Think different. Make different");
    this.homeText = page.locator('#zak-primary-menu:has-text("Home")');
    this.searchIcon = page
      .locator(
        '//a[@class="zak-header-search__toggle"]//*[@class="zak-icon zakra-icon--magnifying-glass"]',
      )
      .first();
    this.navLinks = page.locator("#zak-primary-nav li[id*='menu-item']");
    this.getStartedBtn = page.locator("#get-started");
  }

  /**
   * Navigate page to baseUrl
   */
  async navigate() {
    await this.page.goto("/");
  }

  /**
   *
   */
  getNavLiknsText() {
    return this.navLinks.allTextContents();
  }
}

export default HomePage;
