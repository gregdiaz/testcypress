import Dashboardcss from '../PageObject/Dashboard'
const dataCred = require('../../fixtures/Credencials.json')
const data = require('../../fixtures/dashboard.json')
const dashboardcss = new Dashboardcss();


class DashboardPageSteps{
    WomenBtn(){
       cy.get(dashboardcss.WomenBotton).click();
    }
    DressesBtn(){
        cy.get(dashboardcss.DressesBotton).click();
    }
    TshirtBtn(){
        cy.get(dashboardcss.TshirtBotton).click();
    }
    UserLoginData(){
        cy.get(dashboardcss.LoginBtn).click();
        cy.get(dashboardcss.UserEmail).type(dataCred.UserCredencials);
        cy.get(dashboardcss.UserPassrwd).type(dataCred.PassCredencials);
        cy.get(dashboardcss.SubmitBtn).click();
    }

}


module.exports = new DashboardPageSteps()