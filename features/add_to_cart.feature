Feature: Add item to cart

Scenario: As a user, I can add an item to the cart
    Given I am on the home page
    * I close banner if it appears 
    When I open "Today's Best Deals" tab
    And I click first item, which appears
    * I click "Add to cart" button 
    * I click "No, thanks" button if it appears
    * I click "View Cart" button
    Then "https://secure.newegg.com/shop/cart" page should open
    And The cart should contain 1 item
    * Item should have quantity 1
    * Delete browser cookies 
    
Scenario: As a user, I can remove item from cart by changing its quantity
    Given I am on the "netflix-30-00/p/N82E16832124001" page
    When I click "Add to cart" button 
    * I click "View Cart" button
    * I change quantity of item for 0
    Then The cart should contain 0 item
    And I should see a message saying: "Oh...seems like the cart is empty..."
    * Delete browser cookies     

Scenario Outline: As a user, I cannot change quantity of item for higher than limit
    Given I am on the "<product>" page
    When I click "Add to cart" button 
    * I click "View Cart" button
    * I change quantity of item for <quantity>
    Then I should see a message saying: "ITEM QUANTITY LIMIT"
    And Item should have quantity <limit>
    * Delete browser cookies
    Examples:
        | product                                               | quantity | limit  |
        | netflix-30-00/p/N82E16832124001                       | 8        | 5      | 
        | chipotle-50-00/p/N82E16832474008?Item=N82E16832474008 | 25       | 15     |
