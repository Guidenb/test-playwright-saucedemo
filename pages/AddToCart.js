class AddToCart {
    constructor(page) {
        this.page = page;
    }

    get IconCartButton() {
        return this.page.locator('//div[@class="primary_header"]//a[@class="shopping_cart_link"]');
    }

    get CheckoutButton() {
        return this.page.locator('//div[@class="cart_footer"]//button[text()="Checkout"]');
    }

    get ContinueShoppingButton() {
        return this.page.locator('//div[@class="cart_footer"]//button[text()="Continue Shopping"]');
    }

    get RemoveButton() {
        return this.page.locator('//div[@class="cart_item"]//button[text()="Remove"]');
    }

    // Methods
    async  clickAddToCart() {
        await this.IconCartButton.click();
    }
    async clickCheckout () {
        await this.CheckoutButton.click();
    }

    async clickContinueShopping () {
        await this.ContinueShoppingButton.click();
    }

    async clickRemoveButton () {
        await this.RemoveButton.click();
    }
}
module.exports = AddToCart;