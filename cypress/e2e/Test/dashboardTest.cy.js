import {Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor"
import Dashboardcss from '../PageObject/Dashboard'
const data = require('../../fixtures/data.json')
const dashboard = require("../StepCases/dashboardSteps")
const dashboardcss = new Dashboardcss();

Given("Open the Dashboard Page",()=> {
    cy.visit("/");
})
When ("Search an Object",function() {
   dashboard.searchText()
})
Then("Checking the URL Result",function(){
    cy.url().should("contains", data.searchTextbox)
})

Then("Checking the result get", function(){
    cy.get(dashboardcss.searchResult).should('contain.text',data.searchTextbox)
})

Then ("Clicking to All the Banners",function(){
    cy.get(dashboardcss.dashboardBannerImage)
      .click({timeout: 8000 , multiple: true, force:true })
      .url().should('contain','www.prestashop.com')
})
When ("Select a Popular Product",function(){
    dashboard.selectQuickViewPopularImage()
})

Then ("Clicking a Popular Image",()=>{
    cy.getIframeBody(dashboardcss.populateQuickViewContainer)
    .should('not.be.empty')
    .then(element=>{
        expect(element.context.innerText).to.contain.text
    })
})
