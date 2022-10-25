import {When, Then } from "@badeball/cypress-cucumber-preprocessor"
import ContactUsCss from '../PageObject/ContactUs'
const ContactUs = require("../StepCases/contactUsSteps")
const contactUsCss = new ContactUsCss()

When("Full in the contact us Form",function()
{

    ContactUs.fullInContactForm("valid")
})
When("send the info",function()
{
    cy.clickElement(contactUsCss.submitbutton)
})
Then("The information was send",function(){
    cy.get(contactUsCss.alertMessage).should('have.class','alert alert-success')
    cy.get(contactUsCss.alertMessage).should('contain.text','Your message has been successfully sent to our team.')
})
When("Type an invalid value",function(){
    ContactUs.fullInContactForm("invalid")
})
Then("Checking the message error",function(){
    cy.get(contactUsCss.alertMessage).should('have.class','alert alert-danger')
    cy.get(contactUsCss.alertMessage).should('contain.text','Invalid email address.')
})