import { Page } from "@playwright/test";
import UploadComponent from "./components/upload.component";

class CartPage {
  constructor(private page: Page) {}
  uploadComponent() {
    return new UploadComponent(this.page);
  }

  async navigate() {
    await this.page.goto("/cart");
  }
}

export default CartPage;
