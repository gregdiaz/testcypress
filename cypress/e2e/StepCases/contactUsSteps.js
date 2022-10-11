import ContactUsCss from '../PageObject/ContactUs'
const data = require('../../fixtures/dashboard.json')
const contactUsCss = new ContactUsCss()

class contactUsSteps{
    fullInContactForm(emailKind)
    {
        cy.clickElement(contactUsCss.contactUsButton)
        if ( emailKind !="invalid"){
            cy.typeText(contactUsCss.email, data.EmailAddress)
        }else{
            console.log()
            cy.typeText(contactUsCss.email, data.InvalidEmail)
        }
        cy.typeText(contactUsCss.orderReference, data.OrderReference)
        cy.get(contactUsCss.subjectHeading).select(randomNumber(1,2)).invoke('val')
        cy.typeText(contactUsCss.message,data.Message)
        cy.get(contactUsCss.fileUpload).selectFile('cypress/e2e/Images/Puppy.jpg')
    }
}
module.exports = new contactUsSteps()

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }