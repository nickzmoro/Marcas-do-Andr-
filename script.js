// formulário
const form = document.querySelector(".formulario");
const mascara = document.querySelector(".mask");

function mostrarForm() {
    form.style.bottom = "35%"
    mascara.style.visibility = "visible"
}

function esconderForm() {
    form.style.bottom = "-50%"
    mascara.style.visibility = "hidden"
}

// DETALHES DAS MARCAS
// granulato
const mascaraDetalhes = document.querySelector(".maskDetalhes");
const detalhesGranulato = document.querySelector(".detalhesGranulato");
const granulatoContent = document.querySelector(".granulato-content");

function mostrarDetalhesGranulato() {
    detalhesGranulato.style.zIndex = "98"
    granulatoContent.style.transform = "translate(-50%, 4%)"
    mascaraDetalhes.style.visibility = "visible"
}

function fechaDetalhesGranulato() {
    detalhesGranulato.style.zIndex = "-1"
    granulatoContent.style.transform = "translate(-200%, 4%)"
    mascaraDetalhes.style.visibility = "hidden"
}

// natus
const detalhesNatus = document.querySelector(".detalhesNatus");
const natusContent = document.querySelector(".natus-content");

function mostrarDetalhesNatus() {
    detalhesNatus.style.zIndex = "98"
    natusContent.style.transform = "translate(-50%, 3%)"
    mascaraDetalhes.style.visibility = "visible"
}

function fechaDetalhesNatus() {
    detalhesNatus.style.zIndex = "-1"
    natusContent.style.transform = "translate(-200%, 4%)"
    mascaraDetalhes.style.visibility = "hidden"
}

// wepudim
const detalhesWePudim = document.querySelector(".detalhesWePudim");
const wepudimContent = document.querySelector(".wepudim-content");

function mostrarDetalhesWePudim() {
    detalhesWePudim.style.zIndex = "98"
    wepudimContent.style.transform = "translate(-50%, 3%)"
    mascaraDetalhes.style.visibility = "visible"
}

function fechaDetalhesWePudim() {
    detalhesWePudim.style.zIndex = "-1"
    wepudimContent.style.transform = "translate(-200%, 4%)"
    mascaraDetalhes.style.visibility = "hidden"
}

// casacrista
const detalhesCasaCrista = document.querySelector(".detalhesCasaCrista");
const casacristaContent = document.querySelector(".casacrista-content");

function mostrarDetalhesCasaCrista() {
    detalhesCasaCrista.style.zIndex = "98"
    casacristaContent.style.transform = "translate(-50%, 3%)"
    mascaraDetalhes.style.visibility = "visible"
}

function fechaDetalhesCasaCrista() {
    detalhesCasaCrista.style.zIndex = "-1"
    casacristaContent.style.transform = "translate(-200%, 4%)"
    mascaraDetalhes.style.visibility = "hidden"
}

// be sucrée
const detalhesBeSucree = document.querySelector(".detalhesBeSucree");
const besucreeContent = document.querySelector(".besucree-content");

function mostrarDetalhesBeSucree() {
    detalhesBeSucree.style.zIndex = "98"
    besucreeContent.style.transform = "translate(-50%, 3%)"
    mascaraDetalhes.style.visibility = "visible"
}

function fechaDetalhesBeSucree() {
    detalhesBeSucree.style.zIndex = "-1"
    besucreeContent.style.transform = "translate(-200%, 4%)"
    mascaraDetalhes.style.visibility = "hidden"
}