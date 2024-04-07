import { Given, When, Then } from '@wdio/cucumber-framework';

import SignInScreen from '../../pageobjects/flutter/signin.screen.js';
import BookScreen from '../../pageobjects/flutter/books.screen.js';


When(/^I signin with (\w+) and (.+)$/, async (username, password) => {
    await SignInScreen.signIn(username, password);
});

Then(/^I should see a Book (.*)$/, async (text) => {
   await BookScreen.verifyAppBarTitle(text);
});

