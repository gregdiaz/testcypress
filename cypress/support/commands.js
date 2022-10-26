// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Command to clicking a button
Cypress.Commands.add('clickElement', (selector) => {
    cy.get(selector).click()
})

//Command to Type in a textbox
Cypress.Commands.add('typeText',(selector, data)=>{
    return cy.get(selector).type(data)
})

Cypress.Commands.add('clickElementForce',(selector)=>{
    cy.get(selector).click({force: true})
})
// Command to allow get the iframe body
Cypress.Commands.add('getIframeBody',(iframeSelector)=>{
    return cy.get(iframeSelector).its('0.contentDocument.body')
})

