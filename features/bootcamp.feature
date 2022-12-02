Feature: The Newegg main page

  Background: 
    Given I am on the home page
    * I close banner if it appears

  Scenario: As a user, I can use the search bar
    When I enter "Windows" in the search bar 
    And I click the search button
    Then At least 1 item should appear

  Scenario: As a user, I can use shop logo button to open main page
    When I open "Today's Best Deals" tab
    And I click on the shop logo 
    Then Main page should open
