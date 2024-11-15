// document.addEventListener("scroll", () => {
//     const secciones = document.querySelectorAll(".seccion");
    
//     secciones.forEach((seccion) => {
//         const posicion = seccion.getBoundingClientRect().top;
//         const ventanaAltura = window.innerHeight;

//         // Activar animación si la sección es visible
//         if (posicion < ventanaAltura - 100) {
//             seccion.classList.add("visible");
//         } else {
//             seccion.classList.remove("visible");
//         }
//     });
// });


// whatsapp animation

document.addEventListener("DOMContentLoaded", () => {
    const whatsappButton = document.querySelector(".whatsapp");
    const instagramButton = document.querySelector(".instagram");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            whatsappButton.classList.add("visible");
            instagramButton.classList.add("visible");
        } else {
            whatsappButton.classList.remove("visible");
            instagramButton.classList.remove("visible");
        }
    });
});