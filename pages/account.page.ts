import { Page } from "@playwright/test";
import { SignInData } from "../types/auth.types";

class AccountPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("/my-account");
  }

  async signIn(data: SignInData) {
    const username = data.email ?? data.username;

    await this.page.locator("#username").fill(username);
    await this.page.locator("#password").fill(data.password);
    await this.page.locator('button[name="login"]').click();
  }

  async signUp(data: { username: string; email: string; password: string }) {
    await this.page.locator("#reg_username").fill(data.username);
    await this.page.locator("#reg_email").fill(data.email);
    await this.page.locator("#reg_password").fill(data.password);
    await this.page.locator('button[name="register"]').click();
  }

  async navigateDownloads() {
    await this.page.locator('li a[href*="downloads"]').click();
  }
  async navigateOrders() {
    await this.page.locator('li a[href*="orders"]').click();
  }
}
export default AccountPage;
