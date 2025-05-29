// Example Playwright test
import { test, expect } from '@playwright/test';
import { NavBar } from '../objects/navBar.po';
import { Login } from '../objects/login.po';
import { SignUp } from '../objects/signup.po';
import { CreatedAccount} from '../objects/createdAccount.po';


test.describe('Sign up tests', () => {

    const navBar = new NavBar();
    const login = new Login();
    const signUp = new SignUp();
    const createdAccount = new CreatedAccount();

    const email = "test@test.com"
    const randomEmail = `testuser_${Date.now()}_${Math.floor(Math.random()*10000)}@test.com`;
    const data = {
        firstName: "Test",
        lastName: "User",
        title: "Mr",
        email: randomEmail,
        password: "password123",
        day: "1",
        month: "January",
        year: "1990",
        address: "3 de febrero 1234",
        country: "United States",
        state: "California",
        city: "Los Angeles",
        zipCode: "2000",
        mobileNumber: "1234567890"

        };

    test.beforeEach(async ({ page }) => {
        await page.goto("https://www.automationexercise.com/");
    });

    test('sign up successfully', async ({ page }) => {
        const signupButton = await navBar.getSignUpButton(page);
        await signupButton.click();
        await login.getNameField(page).fill(data.firstName + " " + data.lastName);
        await login.getEmailField(page).fill(data.email);
        await login.getSignUpButton(page).click();
        await signUp.completeForm(page, data);
        await signUp.getCreateAccountButton(page).click();
        expect( await createdAccount.getCreatedAccount(page)).toBeVisible();
        expect( await page.url()).toContain("account_created");
    });

    test('try to sign up with an existing email', async ({ page }) => {
        const signupButton = await navBar.getSignUpButton(page);
        await signupButton.click();
        await login.getNameField(page).fill(data.firstName + " " + data.lastName);
        await login.getEmailField(page).fill(email);
        await login.getSignUpButton(page).click();
        await expect(login.getErrorMessage(page)).toBeVisible();
        await expect(login.getErrorMessage(page)).toHaveText("Email Address already exist!");
    });
});
