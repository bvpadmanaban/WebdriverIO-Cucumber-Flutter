import { bySemanticsLabel, byText, byType, byValueKey } from 'appium-flutter-finder';

class BookScreen  {
    /**
     * define selectors using getter methods
     */
    get tabBarPopular () {
        return byText("Popular");
    }

    async verifyAppBarTitle (text) {
        await driver.execute('flutter:waitFor', this.tabBarPopular);
        expect(await driver.getElementText(this.tabBarPopular)).toEqual(text);
    }

}

export default new BookScreen();
