Feature: Contact US
    Alow to check all the contact section in the web page

Background: 
        Given Open the Dashboard Page

Scenario: Sending a contact us Email
    When Full in the contact us Form
    When send the info
    Then The information was send

Scenario: validate the invalid information
    When Type an invalid value
    When send the info
    Then Checking the message error


