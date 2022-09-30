/*
-----------Login Page-----------
    Here we validated the login is corretly 

*/
class HomePage{
    elements={
        LoginBtnIni: () => cy.get('.login'),
        EmailPut: () => cy.get('#email'),
        PasswrdPut: () => cy.get('#passwd'),
        EnterBtn: () => cy.get('#SubmitLogin > span')
    }
    ClickLoginBtnIni(){
        this.elements.LoginBtnIni().click();
    }
    typeEmailPut(username){
        this.elements.EmailPut().type(username);
    }
    typePasswrdPut(password){
        this.elements.PasswrdPut().type(password);
    }
    ClickEnterBtn(){
        this.elements.EnterBtn().click();
    }
}

module.exports = new HomePage