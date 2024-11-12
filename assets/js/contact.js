document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();  // Evita que el formulario se envíe de manera tradicional
        
        // Recopila los datos del formulario
        const name = document.getElementById("name").value;
        const lastName = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        // Valida que los campos requeridos no estén vacíos
        if (!name || !lastName || !email) {
            alert("Por favor, completa todos los campos requeridos.");
            return;
        }

        // Define los datos que se enviarán en la solicitud
        const data = {
            name: name,
            last_name: lastName,
            email: email,
            message: message
        };
        
        // Realiza el fetch con el método POST
        fetch("https://staging.3plfasttrack.com/api/contact/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al enviar el formulario");
            }
            return response.json();
        })
        .then(data => {
            // Muestra un mensaje de éxito o redirige a una página de confirmación
            alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
            form.reset();  // Limpia el formulario después de enviarlo
        })
        .catch(error => {
            console.error("Hubo un problema con la solicitud:", error);
            alert("Hubo un problema al enviar el formulario. Por favor, intenta nuevamente.");
        });
    });
});
