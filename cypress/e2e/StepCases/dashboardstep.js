import Dashboardcss from '../PageObject/Dashboard'
const data = require('../../fixtures/dashboard.json')
const dashboardcss = new Dashboardcss();

class DashboardPageSteps{
    WomenBtn(){
       cy.get(dashboardcss.WomenBotton).click();
    }
    DressesBtn(){
        cy.get(dashboardcss.DressesBotton).click();
    }

}


module.exports = new DashboardPageSteps()