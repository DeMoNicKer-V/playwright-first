import { test, expect } from "@playwright/test";
import BlogPage from "../pages/blog.page";

test.describe("Blog Page", () => {
  let blogPage: BlogPage;

  test.beforeEach(({ page }) => {
    blogPage = new BlogPage(page);
  });

  test("Verify the length of Recent Posts", async () => {
    await blogPage.navigate();
    const posts = await blogPage.getRecentPostsTexts();

    for (const text of posts) {
      expect(text.length).toBeGreaterThan(10);
    }

    expect(posts).toHaveLength(5);
  });
});
