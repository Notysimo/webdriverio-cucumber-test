Feature: buy a dress e2e test
    As a User in Test
    I want to test login in the page

    Scenario: login to page
        Given I open the url "http://automationpractice.com/index.php?controller=authentication&back=my-account"
        When I log in with a notysimo user
        Then a user name is on the top menu
    
    Scenario: add a dress to chart
        Given I open the url "http://automationpractice.com/index.php?id_category=8&controller=category"
        When I add a dress to the cart
        Then a dress is in the cart
    
    Scenario: pay a dress
        Given I open the url "http://automationpractice.com/index.php?controller=order"
        When I pay for a dress
        Then a dress is payed by check