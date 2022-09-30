/*
-----------Contact Menu Page-----------
    Here we validated the contact Button

*/
class ContactMenuPage{
    elements={
        ContactBtn: () => cy.get('#contact-link > a')
    }
    ClickContactMenuPage(){
        this.elements.ContactBtn().click();
    }
}

module.exports = new ContactMenuPage