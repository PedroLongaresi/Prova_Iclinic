/// <reference types="Cypress" />

import AgendamentoElements from '../elements/AgendamentoPageElements'
const agendamentoElements = new AgendamentoElements
const faker = require('faker')

class RealizarAgendamento {

    abrirModalAgendamentoBody() {
        cy.get(agendamentoElements.botaoAgendamentoBody()).click()
    }

    acessarPageAgendamento() {
        cy.get(agendamentoElements.botaoAgendamentoHeader()).click()
    }

    agendarConsulta() {
        cy.contains(agendamentoElements.submitAgendamento()).click({waitForAnimations: true})
    }
    
    preencherCampos() {
        cy.get(agendamentoElements.botaoSelecionarProcedimennto()).click({waitForAnimations: false})
          .get(agendamentoElements.botaoSelecionarProcedimenntoConsulta()).click({waitForAnimations: false})
          .get(agendamentoElements.campoPreencherNomePaciente()).type(faker.name.firstName())
          .get(agendamentoElements.campoPreencherCelularPaciente()).type(faker.phone.phoneNumber())
          .get(agendamentoElements.campoTipoConvenio()).click({waitForAnimations: false})
          .get(agendamentoElements.campoTipoConvenioSelecionar()).click({waitForAnimations: false})

    }

    confirmarAgendamento() {
        cy.get(agendamentoElements.modalConfirmandoAgendamento()).should('be.visible')
        cy.get(agendamentoElements.modalConfirmandoAgendamento()).click()
    }

    abrirModalAgendamentoCalendario() {
        // cy.get(agendamentoElements.calendarioAgendamento()).click()
        cy.get(agendamentoElements.calendarioAgendamento()).click('top', {force: true})
    }

}

export default RealizarAgendamento;