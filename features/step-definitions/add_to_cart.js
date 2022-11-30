const { Given, When, Then } = require('@wdio/cucumber-framework');

When("I click first item, which appears", async () => {
    const item = await $('.page-section-inner .item-img');
    await item.click();
}); 

When("I click {string} button", async (buttonName) => {
    const button = await $(`button=${buttonName}`);
    await button.click();
});

When("I click {string} button if it appears", async(buttonName) => {
    const button = await $(`button=${buttonName}`);
    if (await button.isDisplayed()) {
        await button.click();
    }
});

Then("{string} page should open", async (page) => {
        await expect(browser).toHaveUrl(page);
});

Then("The cart should contain {int} item", async (amount) => {
    const items = await $$('.row-body > .item-cells-wrap:not(.empty-cells) > .item-cell:not(.item-removed)');
    await expect(items).toBeElementsArrayOfSize(amount);
});

Then("Item should have quantity {int}", async (quantity) => {
    const itemQty = await $('.item-container .item-qty .form-text');
    await expect(itemQty).toHaveValue(`${quantity}`);
})

Then("Delete browser cookies", async () => {
    await browser.deleteCookies();
});

Given("I am on the {string} page", async (page) => {
    await browser.url(`/${page}`);
});

When("I change quantity of item for {int}", async (quantity) => {
    const itemQty = await $('.item-container .item-qty .form-text');
    await itemQty.setValue(["Backspace", quantity, "Enter"]);
});

Then("I should see a message saying: {string}", async (message) => {
    const elem = await $('.message-information');
    await expect(elem).toBeExisting();
    await expect(elem).toHaveTextContaining(message);
});





// When("I check the item quantity limit", async () => {
//     const elem = await $('.item-qty-limit');
//     const limitString = await elem.getText();
//     const limitArray = await limitString.split(" ");
//     const limit = limitArray[1];
// })