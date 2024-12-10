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

// detalhes das marcas
const detalhesGranulato = document.querySelector(".detalhesGranulato");
const granulatoContent = document.querySelector(".granulato-content");

function mostrarDetalhesGranulato() {
    detalhesGranulato.style.zIndex = "98"
    granulatoContent.style.transform = "translate(-50%, 4%)"
    mascara.style.visibility = "visible"
}

const btnFechar = document.querySelector(".btn-fechar");
const allDetalhesMarcas = document.querySelector(".detalhes-marcas");
const allDetalhesContent = document.querySelector(".detalhes-content");

function fechaDetalhes() {
    allDetalhesMarcas.style.zIndex = "-1"
    allDetalhesContent.style.transform = "translate(-200%, 4%)"
    mascara.style.visibility = "hidden"
}