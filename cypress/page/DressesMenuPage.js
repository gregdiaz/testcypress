/*
----------- Dresses Button -----------
    Here we validated the Dresses button

*/
class DressesMenuPage{
    elements={
        DressesBtn: () => cy.get('.sf-menu > :nth-child(2) > .sf-with-ul'),
        CasualDressesBtn: () => cy.get('.sfHover > .submenu-container > :nth-child(1) > a'),
        EveningDressesBtn: () => cy.get('.sfHover > .submenu-container > :nth-child(2) > a'),
        SummerDressesBtn: () => cy.get('.submenu-container > .sfHoverForce > a')
    }
    RightDressesBtn(){
        this.elements.DressesBtn().rightclick();
    }
    clickCasusalDressesBtn(){
        this.elements.CasualDressesBtn().click();
    }
    ClickEveningDressesBtn(){
        this.elements.EveningDressesBtn().click();
    }
    ClickSummerDressesBtn(){
        this.elements.SummerDressesBtn().click();
    }
}

module.exports = new DressesMenuPage