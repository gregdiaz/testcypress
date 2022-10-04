import Dashboardcss from '../PageObject/Dashboard'
const data = require('../../fixtures/dashboard.json')
const dashboardcss = new Dashboardcss();

class SearchTexbox {
    searchText(){
        cy.typeText(dashboardcss.searchTextbox,data.searchTexbox);
        cy.clickElement(dashboardcss.searchTextBtn);   
    }

}
module.exports = new SearchTexbox()