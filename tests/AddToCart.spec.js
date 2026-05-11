const { test, expect } = require('@playwright/test');
const AddToCart = require('../pages/AddToCart');
const LoginPage = require('../pages/LoginPage');

test('Add item to cart and proceed to checkout', async ({ page }) => {
    const addtoCart = new AddToCart(page);
    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.getusername('standard_user');
    await page.waitForTimeout(1000);
    await loginPage.getpassword('secret_sauce');
    await page.waitForTimeout(1000);
    await loginPage.clickloginbutton();

    await addtoCart.clickAddToCart();
    await addtoCart.clickCheckout();
    await page.waitForTimeout(1000);
    // await expect(page).toHaveURL(/.*checkout-step-one.html/);
    
    // checkout information
    await page.locator('#first-name').fill('John');
    await page.locator('#last-name').fill('Doe');
    await page.getByPlaceholder('Zip/Postal Code').fill('12345');
    await page.locator('#continue').click();
   
    // await expect(page).toHaveURL(/.*checkout-step-two.html/);

    await page.locator('#finish').click();
    await page.waitForTimeout(1000);
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    
})
