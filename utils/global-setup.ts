import { chromium, FullConfig } from "@playwright/test";
import { users } from "../config/users";

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("https://practice.sdetunicorns.com/my-account/");

  await page.context().storageState({ path: "notLoggedInState.json" });

  await page.locator("#username").fill(users.default.username);
  await page.locator("#password").fill(users.default.password);
  await page.locator('button[name="login"]').click();
  //save signed-in state to 'loggedInState.json'

  await page.context().storageState({ path: "loggedInState.json" });
  await browser.close();
}

export default globalSetup;
