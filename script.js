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