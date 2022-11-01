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

When ("Select a Popular Product",function(){
    dashboard.selectQuickViewPopularImage()
})

When("Selected footer {string} option", function (string) {
    dashboard.footerBehavior(string)
})

When("the copyright is selected", ()=>{
    dashboard.footerCopyRight()
})

When ("register a newsletter with valid email",()=>{
    dashboard.newsletterRegister(`optest${Cypress._.random(200000)}@test.com`)
})

When("register a newsletter with invalid email",()=>{
    dashboard.newsletterRegister(`optest${Cypress._.random(2000)}.com`)
})

When("trying to register a duplicate email",()=>{
    dashboard.newsletterRegister(data.EmailAddress)
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

Then ("Clicking a Popular Image",()=>{
    cy.getIframeBody(dashboardcss.populateQuickViewContainer)
    .should('not.be.empty')
    .then(element=>{
        expect(element.context.innerText).to.contain.text
    })
})

Then ("Checking the correct {string}",function (string){
    cy.get(dashboardcss.navegationPage).should("contain.text", string)
})


Then("Validate the correct URL",()=>{
    cy.url().should('include', 'https://www.prestashop.com/en')
})

Then("validation the successfull subscribe to newsletter",()=>{
    cy.get(dashboardcss.alertMessage)
    .should('have.class','alert alert-success')
    .should('contain.text',' Newsletter : You have successfully subscribed to this newsletter.')
})

Then("validation the unsuccessfull in newsletter",()=>{
    cy.get(dashboardcss.alertMessage)
    .should('have.class','alert alert-danger')
    .should('contain.text',' Newsletter : Invalid email address.')
})

Then("validation the duplicate email in newsletter",()=>{
    cy.get(dashboardcss.alertMessage)
    .should('have.class','alert alert-danger')
    .should('contain.text',' Newsletter : This email address is already registered.')
})
