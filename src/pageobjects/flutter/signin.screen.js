import { bySemanticsLabel, byValueKey } from 'appium-flutter-finder';

class SignInScreen  {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return bySemanticsLabel("Username");
    }

    get inputPassword () {
        return bySemanticsLabel("Password");
    }

    get btnSignIn () {
        return byValueKey("SignIn");
    }

    async signIn (username, password) {
        await driver.elementSendKeys(this.inputUsername, username);
        await driver.elementSendKeys(this.inputPassword, password);
        await driver.execute('flutter:clickElement', this.btnSignIn, {timeout:5000} );
    }

}

export default new SignInScreen();
