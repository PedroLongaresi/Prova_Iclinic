/* global Given, Then, When */
import LoginPage from '../pageobjects/LoginPage'
import RealizarAgendamento from '../pageobjects/AgendamentoPage'
const loginPage = new LoginPage
const realizarAgendamento = new RealizarAgendamento


And("clico em Salvar", () => {
    realizarAgendamento.agendarConsulta();
})

And("informo {} correto", (email) => {
    loginPage.informarEmail(email);
})

And("informo {} correta", (senha) => {
    loginPage.informarSenha(senha);
})

And("Preencho os campos Nome, Celular e Convenio",() => {
    realizarAgendamento.preencherCampos();
})

Given("acesso a Home do site", () => {
    loginPage.acessarSite();
})

Given("acesso a pagina de agendamento", () =>{
    realizarAgendamento.acessarPageAgendamento();
})

When("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

When("clico no botão de realizar login", () => {
    loginPage.clicarBotaoRealizarLogin();
})

When("clico no botão agendamento", () =>{
    realizarAgendamento.abrirModalAgendamentoBody();
})

When("clico no Calendario", () =>{
    realizarAgendamento.abrirModalAgendamentoCalendario();
})


Then("devo logar no sistema", () => {
    loginPage.visualizarHeader();
})

Then("deve aparecer a modal confirmando o agendamento", () => {
    realizarAgendamento.confirmarAgendamento();
})
