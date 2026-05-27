const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Login Functionality', () => {
  test('valid user can login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('qa@example.com', 'Password123!');
    await expect(loginPage.message).toHaveText('Login successful.');
  });

  test('invalid password shows safe error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('qa@example.com', 'wrong');
    await expect(loginPage.message).toHaveText('Invalid email or password.');
  });

  test('empty fields show validation error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', '');
    await expect(loginPage.message).toHaveText('Email and password are required.');
  });
});
