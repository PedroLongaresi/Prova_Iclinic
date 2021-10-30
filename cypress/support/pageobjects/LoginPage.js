/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")
const email = Cypress.config("email")
const senha = Cypress.config("senha")

class LoginPage {
    acessarSite() {
        cy.visit(url)
    }

    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoLogin()).click()
    }

    clicarBotaoRealizarLogin() {
        cy.get(loginElements.botaoRealizarLogin()).click()
        // cy.wait(3500)
    }

    informarEmail() {
        cy.get(loginElements.inputEmail()).type(email)
    }

    informarSenha() {
        cy.get(loginElements.inputSenha()).type(senha)
    }


    visualizarHeader() {
        cy.get(loginElements.headerLogado()).should('be.visible')
    }

};

export default LoginPage;
