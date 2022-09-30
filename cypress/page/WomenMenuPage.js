/*
-----------Women Button -----------
    Here we validated the Women Button

*/
class WomenMenuPage{
    elements={
        WomenBtn: () => cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]'),
        TshirtBtn: () => cy.get('.submenu-container > :nth-child(1) > ul > :nth-child(1) > a'),
        BlousesBtn: () => cy.get('.submenu-container > :nth-child(1) > ul > :nth-child(2) > a'),
        CasualDressesBtn: () => cy.get('.submenu-container > :nth-child(2) > ul > :nth-child(1) > a'),
        EveningDressesBtn: () => cy.get('.submenu-container > :nth-child(2) > ul > :nth-child(2) > a'),
        SummerDressesBtn: () => cy.get('.submenu-container > :nth-child(2) > ul > :nth-child(3) > a')
    }
    RightWomenBtn(){
        this.elements.WomenBtn().rightclick();
    }
    ClickTshirtBtn(){
        this.elements.TshirtBtn().click();
    }
    ClickBlouseBtn(){
        this.elements.BlousesBtn().click();
    }
    ClickCasualDressesBtn(){
        this.elements.CasualDressesBtn().click();
    }
    ClickEveningDressesBtn(){
        this.elements.EveningDressesBtn().click();
    }
    ClickSummerDressesBtn(){
        this.elements.SummerDressesBtn().click();
    }
}

module.exports = new WomenMenuPage