document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();  // Evita que el formulario se envíe de manera tradicional
        
        // Recopila los datos del formulario
        const name = document.getElementById("name").value;
        const lastName = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phone_number").value;
        const city = document.getElementById("city").value;
        const message = document.getElementById("message").value;
        
        // // Valida que los campos requeridos no estén vacíos
        // if (!name || !lastName || !email) {
        //     alert("Por favor, completa todos los campos requeridos.");
        //     return;
        // }

        const messageDiv = document.getElementById("contact__form_message");
        if (!name || !lastName || !email || !phoneNumber || !city || !message) {
            messageDiv.textContent = "Por favor, completa todos los campos."

        } else {
            const data = {
                name: name,
                last_name: lastName,
                email: email,
                phone_number : phoneNumber,
                city : city,
                message: message
            };
            
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
                form.reset();
                messageDiv.textContent = "¡Gracias por tu mensaje, te contactaremos a la brevedad!"
            })
            .catch(error => {
            });
        }
        
    });
});
