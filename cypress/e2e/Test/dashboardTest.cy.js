import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import Dashboardcss from '../PageObject/Dashboard'
const data = require('../../fixtures/dashboard.json')
const dashboard = require("../StepCases/dashboardSteps")
const dashboardcss = new Dashboardcss();

Given("Open the Dashboard Page",()=> {
    cy.visit("/");
})
When ("Search an Object",function() {+
   dashboard.searchText()
})
Then("Checking the URL Result",function(){
    cy.url().should("contains", data.searchTexbox);
})

Then("Checking the result get", function(){
    console.log(dashboardcss.searchResult)
    cy.get(dashboardcss.searchResult).should('contain.text',data.searchTexbox)
})