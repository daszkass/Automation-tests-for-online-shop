import { Given, When, Then } from '@wdio/cucumber-framework';
import { getCloseBanner, getTab } from '../helpers/selectors';

Given("I am on the home page", async () => {
    await browser.url('/');
});

Given("I close banner if it appears", async () => {
    const closeBanner = await getCloseBanner();
    try {
        await closeBanner.click();
    } catch {}
});

When("I open {string} tab", async (tabName) => {
    const tab = await getTab(tabName);
    await tab.click();
});
