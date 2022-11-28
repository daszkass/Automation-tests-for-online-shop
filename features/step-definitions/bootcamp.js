const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("I am on the home page", async () => {
    await browser.url('/');
});

When("I enter {string} in the search bar", async (searchWord) => {
    await $('.header2021-search-inner input[type="search"]').setValue(searchWord);
});

When("I click the search button", async () => {
    try {
        await $('.header2021-search-button button').click();
    } catch {
        await $('#modal-Website .close').click();
        await $('.header2021-search-button button').click();
    }
});

Then("At least {int} item should appear", async (amount) => {
    const items = await $$('.item-cell');
    await expect(items).toBeElementsArrayOfSize({ gte:amount });
});

When("I open {string} tab", async (tabName) => {
    const tab = await $('.header2021').$(`.font-s=${tabName}`);
    try {
        await tab.click();
    } catch {
        await $('#modal-Website .close').click();
        await tab.click();
    }
});

When("I click on the shop logo", async () => {
    const logo = await $('.header2021-logo-img');
    await logo.click();
});

Then("Main page should open", async () => {
    await expect(browser).toHaveUrl('https://www.newegg.com/');
});