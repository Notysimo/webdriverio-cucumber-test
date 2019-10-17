class LoginPage {
    open() {
        browser.url('/');
    }

    get buttonSignIn() {
        return $('#SubmitLogin');
    }

    get inputEmail() {
        return $('#email');
    }

    get inputPassword() {
        return $('#passwd');
    }

    login(user) {
        if (this.buttonSignIn.isExisting()) {
            this.inputEmail.waitForEnabled();
            this.inputEmail.setValue(user.login);
            this.inputPassword.setValue(user.password);
            this.buttonSignIn.click();
        }
    }
}

module.exports = new LoginPage();