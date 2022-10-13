import {Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor"
import Dashboardcss from '../PageObject/Dashboard'
const data = require("../../fixtures/dashboard.json")
const dashboard = require('../StepCases/dashboardstep')
const dashboardcss = new Dashboardcss();


Given("Visit the Dashboard", () =>{
    cy.visit("/");
})
When("Validate Women Button", function(){
    dashboard.WomenBtn();
})
Then("Check all is the corretly button", function(){
    cy.get(dashboardcss.MenuTextSearch).should('be.visible',data.searchtextWomen);
})
When("Validate Dresses Button", function(){
    dashboard.DressesBtn();
})
Then("Check all is the corretly button2", function(){
    cy.get(dashboardcss.MenuTextSearch).should('be.visible',data.searchtextDresses);
})
When("Validate Tshirt Button", function(){
    dashboard.DressesBtn();
})

Then("Check all is the corretly button3", function(){
    cy.get(dashboardcss.MenuTextSearch).should('be.visible',data.searchtextTshirt);
})
