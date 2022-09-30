import HomePage from '../page/HomePage'
import WomenMenuPage from '../page/WomenMenuPage'
import DressesMenuPage from '../page/DressesMenuPage'
import TshirtMenuPage from '../page/TshirtMenuPage'
import ContactMenuPage from '../page/ContactMenuPage'


describe('AutomatePractice', () => {
  it('Page', () => {
    cy.visit('http://automationpractice.com/index.php')
  })

  //Login test
  it('Login Page', () => {
    HomePage.ClickLoginBtnIni();
    HomePage.typeEmailPut('TestJc@hotmail.com');
    HomePage.typePasswrdPut('JC123456789');
    HomePage.ClickEnterBtn();
  })
  //Women Botton test
  it('Women Menu Test',() => {
    WomenMenuPage.RightWomenBtn();
      WomenMenuPage.ClickTshirtBtn();
    WomenMenuPage.RightWomenBtn();
      WomenMenuPage.ClickBlouseBtn();
    WomenMenuPage.RightWomenBtn();
      WomenMenuPage.ClickCasualDressesBtn();
    WomenMenuPage.RightWomenBtn();
      WomenMenuPage.ClickEveningDressesBtn();
    WomenMenuPage.RightWomenBtn();
      WomenMenuPage.ClickSummerDressesBtn();

  })
  //Dresses Botten test
  it('Dresses Menu Test', () =>{
    DressesMenuPage.RightDressesBtn();
      DressesMenuPage.clickCasusalDressesBtn();
    DressesMenuPage.RightDressesBtn();
      DressesMenuPage.ClickEveningDressesBtn();
    DressesMenuPage.RightDressesBtn();
      DressesMenuPage.ClickSummerDressesBtn();
  })
  //Tshirt Botton Test
  it('Tshirt Menu Test', () =>{
    TshirtMenuPage.ClicktshitsBtn();
  })
  it('Contact Menu test', () => {
    ContactMenuPage.ClickContactMenuPage();
  })
})