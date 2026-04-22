import { Locator, Page } from "@playwright/test";

class BlogPage {
  readonly recentPosts: Locator;

  constructor(private page: Page) {
    this.recentPosts = page.locator(
      'aside#zak-secondary section[id^="recent-posts"] li',
    );
  }

  async navigate() {
    await this.page.goto("/blog");
  }
  async getRecentPostsCount() {
    return await this.recentPosts.count();
  }

  async getRecentPostsTexts() {
    return await this.recentPosts.allTextContents();
  }
}
export default BlogPage;
