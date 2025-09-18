/// <reference types="webdriverio" />
/// <reference types="@wdio/appium-service" />
/// <reference types="@wdio/mocha-framework" />

const { expect } = require('@wdio/globals');
const loginPage = require('../pageobjects/login.screen.js')
const loginData = require('../data/login.data.js');

describe('Login form validation', () => {
    beforeEach(async () => {
        await driver.setTimeout({ implicit: 2000 });
    });

    it('should show error for empty credentials', async () => {
        await loginPage.login('', '');
        const errorMessage = await loginPage.errorMessage;
        await expect(errorMessage).toBeDisplayed();
        await expect(loginPage.errorUsernameRequired).toHaveText("Username is required");
    });

    it('should show error for only username provided', async () => {
        await loginPage.login(loginData.validUsername, '');
        const errorMessage = await loginPage.errorMessage;
        await expect(errorMessage).toBeDisplayed();
        await expect(loginPage.errorPasswordRequired).toHaveText("Password is required");
    });

    it('should show error for only password provided', async () => {
        await loginPage.login('', loginData.validPassword);
        const errorMessage = await loginPage.errorMessage;
        await expect(errorMessage).toBeDisplayed();
        await expect(loginPage.errorUsernameRequired).toHaveText("Username is required");
    });

    it('should show error for valid username and invalid password', async () => {
        await loginPage.login(loginData.validUsername, loginData.invalidPassword);
        const errorMessage = await loginPage.errorMessage;
        await expect(errorMessage).toBeDisplayed();
        await expect(loginPage.errorInvalidCredentials).toHaveText("Username and password do not match any user in this service.");
    });

    it('should show error for invalid username and valid password', async () => {
        await loginPage.login(loginData.invalidUsername, loginData.validPassword);
        const errorMessage = await loginPage.errorMessage;
        await expect(errorMessage).toBeDisplayed();
        await expect(loginPage.errorInvalidCredentials).toHaveText("Username and password do not match any user in this service.");
    });

    it('should login successfully with valid credentials', async () => {
        await loginPage.login(loginData.validUsername, loginData.validPassword);
        const productScreen = await loginPage.productScreen;
        await expect(productScreen).toBeDisplayed();
    });
});


