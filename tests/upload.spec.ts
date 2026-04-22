import { test, expect } from "@playwright/test";
import path from "path";
import CartPage from "../pages/cart.page";

test.describe("Upload File", () => {
  let cartPage: CartPage;
  const files = ["funnypic.jpg", "certificate.pdf"];

  test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
    await cartPage.navigate();
  });

  for (const fileName of files) {
    test(`Should upload the test file (${fileName})`, async () => {
      await cartPage.navigate();
      const filePath = path.resolve(`data/${fileName}`);

      await cartPage.uploadComponent().uploadFile(filePath);
      await cartPage
        .uploadComponent()
        .successText.waitFor({ state: "visible", timeout: 5000 });
      await expect(cartPage.uploadComponent().successText).toHaveText(
        `File ${fileName} uploaded successfully`,
      );
    });
  }

  test("Should upload the test file on a hidden input field", async ({
    page,
  }) => {
    //$env:DEBUG="pw:api"; before npx - debug mode
    await cartPage.navigate();

    const filePath = path.join(__dirname, "../data/funnypic.jpg");
    const fileName = path.basename(filePath);

    // stop test exectuion in inspector mode
    // await page.pause();

    await page.evaluate(() => {
      const selector = document.querySelector("input#upfile_1");
      if (selector) {
        selector.className = "";
      }
    });

    await cartPage.uploadComponent().uploadFile(filePath);

    //harcodred sleep - wrong way
    // await page.waitForTimeout(5000);

    // wait for condition
    // await cartPage.uploadComponent().successText.waitFor({ state: "visible", timeout: 5000 });

    //wait for assertion (specific timout for particular assert)
    await expect(cartPage.uploadComponent().successText).toHaveText(
      `File ${fileName} uploaded successfully`,
      { timeout: 5000 },
    );
  });
});
