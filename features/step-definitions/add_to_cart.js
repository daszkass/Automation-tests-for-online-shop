import { Given, When, Then } from '@wdio/cucumber-framework';
import { getMessage, getAllItemsFromCart, getFirstItem, getItemQty, getButton } from '../helpers/selectors';

When("I click first item, which appears", async () => {
    const item = await getFirstItem(); 
    await item.click();
}); 

When("I click {string} button", async (buttonName) => {
    const button = getButton(buttonName);
    await button.click();
});

When("I click {string} button if it appears", async(buttonName) => {
    const button = await getButton(buttonName);
    try {
        await button.click();       
    } catch {}   
});

Then("{string} page should open", async (page) => {
        await expect(browser).toHaveUrl(page);
});

Then("The cart should contain {int} item", async (amount) => {
    const items = await getAllItemsFromCart();
    await expect(items).toBeElementsArrayOfSize(amount);
});

Then("Item should have quantity {int}", async (quantity) => {
    const itemQty = await getItemQty();
    await expect(itemQty).toHaveValue(`${quantity}`);
})

Then("Delete browser cookies", async () => {
    await browser.deleteCookies();
});

Given("I am on the {string} page", async (page) => {
    await browser.url(`/${page}`);
});

When("I change quantity of item for {int}", async (quantity) => {
    const itemQty = await getItemQty();
    await itemQty.setValue(["Backspace", quantity, "Enter"]);
});

Then("I should see a message saying: {string}", async (message) => {
    const elem = await getMessage();
    await expect(elem).toBeExisting();
    await expect(elem).toHaveTextContaining(message);
});
