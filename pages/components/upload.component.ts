import { Locator, Page } from "@playwright/test";

class UploadComponent {
  uploadInput: string;
  submitBtn: Locator;
  successText: Locator;

  constructor(private page: Page) {
    this.uploadInput = "#upfile_1";
    this.submitBtn = page.locator("#upload_1");
    this.successText = page.locator("#wfu_messageblock_header_1_1");
  }

  async uploadFile(filePath: string) {
    await this.page.setInputFiles(this.uploadInput, filePath);
    await this.submitBtn.click();
  }
}

export default UploadComponent;
