const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Login Sauce Demo', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://www.saucedemo.com/');

  await loginPage.getusername('standard_user');
  await page.waitForTimeout(1000);
  await loginPage.getpassword('secret_sauce');
  await page.waitForTimeout(1000);
  await loginPage.clickloginbutton();
  
  await expect(page).toHaveURL(/.*inventory.html/);

});

