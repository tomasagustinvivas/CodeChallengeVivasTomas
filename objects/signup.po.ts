import { Page } from "playwright/test";

let page: Page;

export class SignUp  {
  
  protected elements = {
    titleMr : (page: Page) => page.locator("#uniform-id_gender1"),
    titleMrs : (page: Page) => page.locator("#uniform-id_gender2"),
    nameField: (page: Page) => page.locator('[data-qa="name"]'),
    emailField : (page: Page) => page.locator('[data-qa="email"]'),
    passwordField : (page: Page) => page.locator('[data-qa="password"]'),
    daysSelector: (page: Page) => page.locator('[data-qa="days"]'),
    monthsSelector: (page: Page) => page.locator('[data-qa="months"]'),
    yearsSelector: (page: Page) => page.locator('[data-qa="years"]'),
    firstNameField: (page: Page) => page.locator('[data-qa="first_name"]'), 
    lastNameField: (page: Page) => page.locator('[data-qa="last_name"]'),
    addressField: (page: Page) => page.locator('[data-qa="address"]'),
    country : (page: Page) => page.locator('[data-qa="country"]'),
    state : (page: Page) => page.locator('[data-qa="state"]'),
    city : (page: Page) => page.locator('[data-qa="city"]'),
    zipCode : (page: Page) => page.locator('[data-qa="zipcode"]'),
    mobileNumber : (page: Page) => page.locator('[data-qa="mobile_number"]'),
    createAccountButton : (page: Page) => page.locator('[data-qa="create-account"]'),
        
  };
  
  getTitleMr(page: Page) {
    return this.elements.titleMr(page);
  }

  getTitleMrs(page: Page) {
    return this.elements.titleMrs(page);
  }

  getNameField(page: Page) {
    return this.elements.nameField(page);
  }

  getEmailField(page: Page) {
    return this.elements.emailField(page);
  }
  getPasswordField(page: Page) {
    return this.elements.passwordField(page);
  }

  getDaysSelector(page: Page) {
    return this.elements.daysSelector(page);
  }

  getMonthsSelector(page: Page) {
    return this.elements.monthsSelector(page);
  }

  getYearsSelector(page: Page) {
    return this.elements.yearsSelector(page);
  }

  getFirstNameField(page: Page) {
    return this.elements.firstNameField(page);
  }

  getLastNameField(page: Page) {
    return this.elements.lastNameField(page);
  }

  getAddressField(page: Page) {
    return this.elements.addressField(page);
  }

  getCountry(page: Page) {
    return this.elements.country(page);
  }

  getState(page: Page) {
    return this.elements.state(page);
  }

  getCity(page: Page) {
    return this.elements.city(page);
  }

  getZipCode(page: Page) {
    return this.elements.zipCode(page);
  }

  getMobileNumber(page: Page) {
    return this.elements.mobileNumber(page);
  }

  getCreateAccountButton(page: Page) {
    return this.elements.createAccountButton(page);
  }

  async completeForm(page: Page, data: { firstName: string; lastName: string; title: string; email: string; password: string; day: string; month: string; year: string; address: string; country: string; state: string; city: string; zipCode: string; mobileNumber: string; }) {
      await this.getNameField(page).fill(data.firstName + " " + data.lastName);
      if (data.title === "Mr") {
        await this.getTitleMr(page).click();
      }
      else if (data.title === "Mrs") {
        await this.getTitleMrs(page).click();
      }
      await this.getPasswordField(page).fill(data.password);
      await this.getDaysSelector(page).selectOption(data.day);
      await this.getMonthsSelector(page).selectOption(data.month);
      await this.getYearsSelector(page).selectOption(data.year);
      await this.getFirstNameField(page).fill(data.firstName);
      await this.getLastNameField(page).fill(data.lastName);
      await this.getAddressField(page).fill(data.address);
      await this.getCountry(page).selectOption(data.country);
      await this.getState(page).fill(data.state);
      await this.getCity(page).fill(data.city);
      await this.getZipCode(page).fill(data.zipCode);
      await this.getMobileNumber(page).fill(data.mobileNumber);

  }
}