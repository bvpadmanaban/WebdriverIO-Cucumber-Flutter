import { Given, When, Then } from '@wdio/cucumber-framework';

import SignInScreen from '../../src/pageobjects/signin.screen.js';
import BookScreen from '../../src/pageobjects/books.screen.js';




When(/^I signin with (\w+) and (.+)$/, async (username, password) => {
    await SignInScreen.signIn(username, password);
});

Then(/^I should see a Book (.*)$/, async (text) => {
   await BookScreen.verifyAppBarTitle(text);
});

