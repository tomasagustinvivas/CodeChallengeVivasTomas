import { Page } from "playwright/test";

let page: Page;

export class CreatedAccount  {
  protected elements = {
    createdAccount : (page: Page) => page.getByText("Account Created!")
  };
  
  getCreatedAccount(page: Page) {
    return this.elements.createdAccount(page);
  }

}