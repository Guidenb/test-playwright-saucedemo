class LoginPage {
    constructor(page) {
        this.page = page;
    }

    get UsernameInput() {
        return this.page.locator('[data-test="username"]');
    }

    get PasswordInput() {
        return this.page.locator('[data-test="password"]');
    }

    get LoginButton() {
        return this.page.locator('[data-test="login-button"]');
    }

    get ErrorMessage() {
        return this.page.locator('[data-test="error-button"]');
    }
    // Methods
    async getusername (username) {
        await this.UsernameInput.fill(username);
    }

    async getpassword (password) {
        await this.PasswordInput.fill(password);
    }

    async clickloginbutton () {
        await this.LoginButton.click();
    }

    async  getErrorMessage() {
         return await this.ErrorMessage.textContent(); //textContent() ดึงข้อความที่แสดงบนหน้าเว็บ
    }
}
module.exports = LoginPage;