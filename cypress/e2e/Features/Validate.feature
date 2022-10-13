Feature: Validate Menu 


Validate all the button of the menu

Scenario: Validate Women button
    Given Visit the Dashboard
    When Validate Women Button
    Then Check all is the corretly button


Scenario: Validate Dresses button
    When Validate Dresses Button
    Then Check all is the corretly button2

Scenario: Validate Tshirt button
    When Validate Tshirt Button
    Then Check all is the corretly button3