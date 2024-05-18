    const form = document.getElementById("miFormulario");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Limpiar mensajes de error previos
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(function(message) {
            message.textContent = "";
        });

        // Validar campos
        let isValid = true;

        // Validar nombre
        const nombre = document.getElementById("nombre").value.trim();
        if (nombre === "") {
            mostrarError("nombreError", "El nombre es obligatorio.");
            isValid = false;
        }

        // Validar correo
        const email = document.getElementById("email").value.trim();
        if (!validarEmail(email)) {
            mostrarError("emailError", "El correo electrónico no es válido.");
            isValid = false;
        }

        // Validar mensaje
        const contacto = document.getElementById("mensajecontacto").value.trim();
        if (contacto.length < 6) {
            mostrarError("mensajecontactoError", "El mensaje debe tener al menos 6 caracteres.");
            isValid = false;
        }

        // Si el formulario es válido, enviarlo y poner el nombre para demostrar su consumo
        if (isValid) {
            mostrarNombreVerde(nombre);
            form.submit();
        }
    });

    // Funci�n para mostrar el nombre en Verde
    function mostrarNombreVerde(nombre) {
        const nombreElemento = document.getElementById("mostrarConsumo");
        nombreElemento.textContent = `Nombre: ${nombre}`;
        document.body.appendChild(nombreElemento);
    }

    // Función para mostrar mensajes de error
    function mostrarError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    // Función para validar correo electrónico
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };