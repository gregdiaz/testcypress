import ContactUsCss from '../PageObject/ContactUs'
const data = require('../../fixtures/data.json')
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
        cy.get(contactUsCss.subjectHeading).select(Cypress._.random(1, 2)).invoke('val')
        cy.typeText(contactUsCss.message,data.Message)
        cy.get(contactUsCss.fileUpload).selectFile('cypress/e2e/Images/Puppy.jpg')
    }
}
module.exports = new contactUsSteps()