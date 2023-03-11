/// <reference types="cypress" />

export class LoginPage {

    navigate() {
        cy.visit((''),{
            headers:{
                "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
                "user-agent":"axios/0.18.0"             
             },
            timeout: 60000
    })
    cy.setCookie('HB-Load','Hepisiburada-Load-Test');
    cy.wait(5000)
}

    login() {
        cy.get('#txtUserName').type("alpcangazan@gmail.com").should('have.value',"alpcangazan@gmail.com@gmail.com")
        cy.get('#btnLogin').click();
        cy.get('#txtPassword').type("xxxxx").should('have.value',"xxxxx")
        cy.get('#btnEmailSelect').click();
        cy.wait(5000)
    }

    loginUser(user, pass) {
        cy.get('#txtUserName').type(user).should('have.value',user)
        cy.get('#btnLogin').click();
        cy.get('#txtPassword').type(pass).should('have.value',pass)
        cy.get('#btnEmailSelect').click();
        cy.wait(5000)
    }
}
