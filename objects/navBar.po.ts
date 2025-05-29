import { Page } from "playwright/test";

let page: Page;

export class NavBar  {
  protected elements = {
      signUpButton: (page: Page) => page.locator('.nav.navbar-nav').locator('a[href="/login"]'),
      productsButton: (page: Page) => page.locator('.nav.navbar-nav').locator('a[href="/products"]'),
  };
  
  getSignUpButton(page: Page) {
    return this.elements.signUpButton(page);
  }

  getProductsButton(page: Page) {
    return this.elements.productsButton(page);
  }

  

}