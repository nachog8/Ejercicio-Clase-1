document.addEventListener("DOMContentLoaded", () => {
    // Obtener referencias a los elementos del DOM
    let formulario = document.getElementById("formulario");
    let botonEstilo1 = document.getElementById("botonEstilo1");
    let botonEstiloAltoContraste = document.getElementById("botonEstiloAltoContraste");
    let cuerpoFormulario = document.getElementById("cuerpoFormulario");
    let botonesEstilosFormulario = document.getElementById("botonesEstilosFormulario");
    let botonEnviarFormulario = document.getElementById("botonEnviarFormulario");
    
    // Validar campos del formulario
    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevenir el envío del formulario y la recarga de la página

        let valid = true;
        let campos = formulario.querySelectorAll("input[required]");
        
        // Limpiar mensajes de error previos
        campos.forEach(campo => {
            let errorDiv = document.getElementById(`error${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`);
            if (errorDiv) {
                errorDiv.textContent = "";
            }
        });
        
        // Validar que los campos no estén vacíos y no contengan solo espacios en blanco
        campos.forEach(campo => {
            if (campo.value.trim() === "") {
                let errorDiv = document.getElementById(`error${campo.id.charAt(0).toUpperCase() + campo.id.slice(1)}`);
                if (errorDiv) {
                    errorDiv.textContent = `El campo ${campo.name} es obligatorio y no debe contener solo espacios en blanco.`;
                }
                valid = false;
            }
        });

        // Validar que la fecha de nacimiento no esté vacía
        let fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
        let errorFechaNacimiento = document.getElementById("errorFechaNacimiento");
        if (fechaNacimiento === "") {
            errorFechaNacimiento.textContent = "Por favor, ingrese una fecha de nacimiento válida.";
            valid = false;
        } else {
            let fechaIngresada = new Date(fechaNacimiento);
            let fechaActual = new Date();
            if (fechaIngresada > fechaActual) {
                errorFechaNacimiento.textContent = "La fecha de nacimiento no puede ser mayor a la fecha actual.";
                valid = false;
            } else {
                errorFechaNacimiento.textContent = ""; // Eliminar mensaje de error si la fecha es correcta
            }
        }

        // Validar formato del correo electrónico
        let email = document.getElementById("email").value.trim();
        let errorEmail = document.getElementById("errorEmail");
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errorEmail.textContent = "Por favor, ingrese un correo electrónico válido.";
            valid = false;
        }

        // Si todas las validaciones pasan, puedes realizar alguna acción adicional aquí
        if (valid) {
            console.log("Formulario válido. Puedes enviar los datos al servidor aquí.");
            formulario.reset(); // Vaciar el formulario
            let successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
        }
    });

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
        cuerpoFormulario.classList.remove("cuerpoFormulario");
        formulario.classList.add("fondoAltoContraste");
        formulario.classList.remove("fondoEstilo1");
        botonesEstilosFormulario.classList.add("botonesEstilosAltoContraste");
        botonEnviarFormulario.classList.add("botonesEstilosAltoContraste");
    });
});