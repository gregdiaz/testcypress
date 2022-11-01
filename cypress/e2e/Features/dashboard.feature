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
    Then Clicking a Popular Image

@dashboard @footer
Scenario: Footer Behavior
    When Selected footer '"<section>"' option
    Then Checking the correct '<element>'

Examples:  
| section                       | element                       |
| women                         |Women                          |
| Specials                      |Price drop                     |
| New products                  |New products                   |
| Best sellers                  |Best sellers                   |
| Our stores                    | Our store(s)!                 |
| Contact us                    |Contact                        |
| Terms and conditions of use   |Terms and conditions of use    |
| About us                      |About us                       |
| Sitemap                       |Sitemap                        |
| My credit slips               |Authentication                 |
| My addresses                  |Authentication                 |
| my personal info              |Authentication                 |

@dashboard @footer
Scenario: Footer Copy Right
    When the copyright is selected
    Then Validate the correct URL

@dashboard @footer
Scenario: Footer Register Newsletter
        When register a newsletter with valid email
        Then validation the successfull subscribe to newsletter

@dashboard @footer
Scenario:  Footer Invalid Newsletter Email
        When register a newsletter with invalid email
        Then validation the unsuccessfull in newsletter

@dashboard @footer
Scenario:  Footer Duplicate Newsletter Email
        When trying to register a duplicate email
        Then validation the duplicate email in newsletter
