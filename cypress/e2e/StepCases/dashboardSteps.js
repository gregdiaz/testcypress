import Dashboardcss from '../PageObject/Dashboard'
const data = require('../../fixtures/data.json')
const dashboardcss = new Dashboardcss();
var ramdom

class DashboardPageSteps {
    searchText()
    {
        cy.typeText(dashboardcss.searchTextbox,data.searchTextbox);
        cy.clickElement(dashboardcss.searchTextBtn);   
    }

    selectQuickViewPopularImage()
    {
        cy.get(dashboardcss.imagePopularContainer)
        .should('be.visible')
        .within((element)=>{  
            ramdom = Cypress._.random(element.length)
            cy.get(element[ramdom]).should('not.be.empty')
        })
        cy.get(dashboardcss.popularImageQuickView)
        .should('be.visible')
        .then(quickview =>{
            cy.clickElementForce(quickview[ramdom])
        })
    }
}
module.exports = new DashboardPageSteps()