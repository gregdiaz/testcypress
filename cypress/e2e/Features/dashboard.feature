Feature: Dashboard page

Background: 
        Given Open the Dashboard Page

@dashboard
Scenario: Search a Product
    When Search an Object
    Then Checking the URL Result
    Then Checking the result get

@dashboard
Scenario: Validate the links
    Then Clicking to All the Banners

@dashboard
Scenario: Validate the Quick View Product Behavior
    When Select a Popular Product
    And Clicking a Popular Image