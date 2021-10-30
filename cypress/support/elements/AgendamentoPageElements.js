class AgendamentoElements {

    headerAgendamento = () => {return '.pull-left > :nth-child(2) > a'}

    botaoAgendamentoHeader = () => {return '.pull-left > :nth-child(2) > a'}

    botaoAgendamentoBody = () => {return '.jss11 > .jss9'}

    botaoSelecionarProcedimennto = () => {return '.col-procedure > .dropdown > .btn'}

    botaoSelecionarProcedimenntoConsulta = () => {return '#bs-select-1-0'}

    campoPreencherNomePaciente = () => {return 'input[name="patient_name"]'}

    campoPreencherCelularPaciente = () => {return 'input[name="patient_mobile_phone"]'}

    campoTipoConvenio = () => {return '.bs-placeholder .filter-option-inner-inner'}

    campoTipoConvenioSelecionar = () => {return '#bs-select-2-1'}

    submitAgendamento = () => {return 'SALVAR'}

    modalConfirmandoAgendamento = () => {return '.notification-info'}

    calendarioAgendamento = () => {return 'body [data-reactid=".4.0.1.2.0.0.0.0.$=1$0.$0.2.$3"] > .week-day-inner'}
}

export default AgendamentoElements;
