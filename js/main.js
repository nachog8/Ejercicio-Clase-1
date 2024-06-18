// Obtener referencias a los elementos del DOM
let botonEnviar = document.getElementById("botonEnviar");
let botonEstilo1 = document.getElementById("botonEstilo1");
let botonEstiloAltoContraste = document.getElementById("botonEstiloAltoContraste");
let formulario = document.getElementById("formulario");
let cuerpoFormulario = document.getElementById("cuerpoFormulario");
let botonesEstilosFormulario = document.getElementById("botonesEstilosFormulario");
let botonEnviarFormulario = document.getElementById("botonEnviarFormulario");

// Cambiar al estilo 1
botonEstilo1.addEventListener("click", () => {
    cuerpoFormulario.classList.remove("cuerpoFormularioContraste");
    cuerpoFormulario.classList.add("cuerpoFormulario");
    formulario.classList.remove("fondoAltoContraste");
    formulario.classList.add("fondoEstilo1");
    botonesEstilosFormulario.classList.remove("botonesEstilosAltoContraste");
    botonEnviarFormulario.classList.remove("botonesEstilosAltoContraste");
});

// Cambiar al estilo de alto contraste
botonEstiloAltoContraste.addEventListener("click", () => {
    cuerpoFormulario.classList.add("cuerpoFormularioContraste");
    formulario.classList.add("fondoAltoContraste");
    botonesEstilosFormulario.classList.add("botonesEstilosAltoContraste");
    botonEnviarFormulario.classList.add("botonesEstilosAltoContraste");
});

