import { Locator, Page } from "@playwright/test";

class ContactPage {
  form: Locator;
  successMessage: Locator;
  constructor(private page: Page) {
    this.form = this.page.locator('form[id^="evf-form"]');
    this.successMessage = page.locator(
      "text=Thanks for contacting us! We will be in touch with you shortly",
    );
  }

  async navigate() {
    await this.page.goto("/contact");
    await this.form.waitFor();
  }

  async fillForm(data: {
    name: string;
    email: string;
    phone: string;
    message: string;
  }) {
    await this.form.locator(".contact-name input").fill(data.name);
    await this.form.locator(".contact-email input").fill(data.email);
    await this.form.locator(".contact-phone input").fill(data.phone);
    await this.form.locator(".contact-message textarea").fill(data.message);
  }

  async submitForm() {
    await this.form.locator('button[type="submit"]').click();
  }
}
export default ContactPage;
