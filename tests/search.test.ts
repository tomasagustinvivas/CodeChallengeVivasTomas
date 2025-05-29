// Example Playwright test
import { test, expect } from '@playwright/test';
import { NavBar } from '../objects/navBar.po';
import { Products } from '../objects/products.po';


test.describe('Search for a product', () => {

    const navBar = new NavBar();
    const products = new Products();

    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.automationexercise.com/");
    });

    test('search for a product successfully', async ({ page }) => {
        const productsButton = await navBar.getProductsButton(page);
        await productsButton.click();
        const searchInput = await products.getSearchInput(page);
        await searchInput.fill("blue");
        await products.getSearchButton(page).click();
        expect( await page.url()).toContain("blue");
        const results = await products.getProductWrapper(page)
        for (const result of results) {
            const text = await result.textContent();
            expect(text?.toLocaleLowerCase()).toContain("blue");
        }
    });

});

