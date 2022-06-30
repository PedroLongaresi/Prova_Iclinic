Feature: Agendar consulta

    Background: Acessar e logar no App da Iclinic
        Given acesso a Home do site
        And informo email correto
        And informo senha correta
        When clico no botão de realizar login
        Then devo logar no sistema

    @testeum
    Scenario: Agendar pelo botão
        Given acesso a pagina de agendamento
        When clico no botão agendamento
        And Preencho os campos Nome, Celular e Convenio 
        And clico em Salvar
        Then deve aparecer a modal confirmando o agendamento

    @testedois
    Scenario: Agendar pelo Calendario
        Given acesso a pagina de agendamento
        When clico no Calendario
        And Preencho os campos Nome, Celular e Convenio
        And clico em Salvar
        Then deve aparecer a modal confirmando o agendamento

