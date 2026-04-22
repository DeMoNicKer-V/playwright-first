import { test, expect } from "@playwright/test";
import ContactPage from "../pages/contact.page";
import { faker } from "@faker-js/faker";

test.describe("Contact Page", () => {
  let contactPage: ContactPage;

  test.beforeEach(({ page }) => {
    contactPage = new ContactPage(page);
  });

  test("Should submit contact form successfully", async () => {
    await contactPage.navigate();

    await contactPage.fillForm({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      message: faker.lorem.paragraphs(2),
    });

    //await expect.soft(textarea).toHaveText("Not My Contact Data");
    //expect(test.info().errors?.length).toBe(1);

    await contactPage.submitForm();
    await expect(contactPage.successMessage).toBeVisible();
  });
});
