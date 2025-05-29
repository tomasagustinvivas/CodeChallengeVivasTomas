import { Page } from "playwright/test";

let page: Page;

export class Products  {
  protected elements = {
    productWrapper: (page: Page) => page.locator('.product-image-wrapper'),
    searchInput: (page: Page) => page.locator('#search_product'),
    searchButton: (page: Page) => page.locator('#submit_search'),
  };
  
  getProductWrapper(page: Page) {
    return this.elements.productWrapper(page).all();
  }

  getSearchInput(page: Page) {
    return this.elements.searchInput(page);
  }
  
  getSearchButton(page: Page) {
    return this.elements.searchButton(page);
  }
  

}