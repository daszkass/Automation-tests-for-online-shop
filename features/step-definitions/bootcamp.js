import { Given, When, Then } from '@wdio/cucumber-framework';
import { getAllItems, getSearchButton, getSearchInput, getShopLogo } from '../helpers/selectors';
import { homePageUrl } from '../helpers/variables';

When("I enter {string} in the search bar", async (searchWord) => {
    const searchInput = await getSearchInput(); 
    await searchInput.setValue(searchWord);
});

When("I click the search button", async () => {
    const searchButton = await getSearchButton();
    await searchButton.click();
});

Then("At least {int} item should appear", async (amount) => {
    const items = await getAllItems();
    await expect(items).toBeElementsArrayOfSize({ gte:amount });
});

When("I click on the shop logo", async () => {
    const logo = await getShopLogo(); 
    await logo.click();
});

Then("Main page should open", async () => {
    await expect(browser).toHaveUrl(homePageUrl);
});