const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the home page", async () => {
    await browser.url('/');
});

Given("I close banner if it appears", async () => {
    const modalWebsite = await $('#modal-Website');
    const closeBanner = await $('#modal-Website .close');
    if (await modalWebsite.isDisplayed()) {
        await closeBanner.click();
    }
});

When("I enter {string} in the search bar", async (searchWord) => {
    await $('.header2021-search-inner input[type="search"]').setValue(searchWord);
});

When("I click the search button", async () => {
    const searchButton = await $('.header2021-search-button button');
    await searchButton.click();
});

Then("At least {int} item should appear", async (amount) => {
    const items = await $$('.item-cell');
    await expect(items).toBeElementsArrayOfSize({ gte:amount });
});

When("I open {string} tab", async (tabName) => {
    const tab = await $('.header2021').$(`.font-s=${tabName}`);
    await tab.click();
});

When("I click on the shop logo", async () => {
    const logo = await $('.header2021-logo-img');
    await logo.click();
});

Then("Main page should open", async () => {
    await expect(browser).toHaveUrl('https://www.newegg.com/');
});