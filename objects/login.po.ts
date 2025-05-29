import { Page } from "playwright/test";

let page: Page;

export class Login  {
  protected elements = {
    nameField: (page: Page) => page.locator('[data-qa="signup-name"]'),
    emailField: (page: Page) => page.locator('[data-qa="signup-email"]'),
    signUpButton : (page: Page) => page.locator('[data-qa="signup-button"]'),
    errorMessage: (page: Page) => page.getByText("Email Address already exist!"),
  };
  
  getSignUpButton(page: Page) {
    return this.elements.signUpButton(page);
  }

  getNameField(page: Page) {
    return this.elements.nameField(page);
  }

  getEmailField(page: Page) {
    return this.elements.emailField(page);
  }

  getErrorMessage(page: Page) {
    return this.elements.errorMessage(page);
  }


}