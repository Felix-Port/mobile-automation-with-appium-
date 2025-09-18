
const { $ } = require('@wdio/globals')


class LoginPage {
   
    get inputUsername () {
        return $("~test-Username");
    }

    get inputPassword () {
        return $("~test-Password");
    }

    get loginBtn () {
        return $("~test-LOGIN");
    }

    get errorMessage(){
        return $("~test-Error message");
    }

    get errorUsernameRequired() {
        return $("android=new UiSelector().text(\"Username is required\")");
    }

    get errorPasswordRequired() {
        return $("android=new UiSelector().text(\"Password is required\")");
    }

    get errorInvalidCredentials() {
        return $("android=new UiSelector().text(\"Username and password do not match any user in this service.\")");
    }

    get productScreen() {
        return $("android=new UiSelector().text(\"PRODUCTS\")");
    }

    async login (username, password) {
        await this.inputUsername.clearValue();
        await this.inputUsername.setValue(username);
        await this.inputPassword.clearValue();
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }
}

module.exports = new LoginPage();
