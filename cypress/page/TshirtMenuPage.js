/*
----------- Tshirt Button -----------
    Here we validated the Tshirt button

*/
class TshirtMenuPage{
    elements={
        tshitsBtn: () => cy.get('.sf-menu > :nth-child(3) > a'),
        //tshitstittle: () => cy.get('.cat-name').contains('T-SHIRTS')
    }

    ClicktshitsBtn(){
        this.elements.tshitsBtn().click();
        //this.elements.tshitstittle();
    }
}

module.exports = new TshirtMenuPage