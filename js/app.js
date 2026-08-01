/* =====================================
   NOXA | app.js
===================================== */

const numero = "573160598636";

/*==========================
COMPRAR POR WHATSAPP
==========================*/

function comprarWhatsApp() {

    const producto = "NOXA AIR";
    const precio = "$89.900";

    const mensaje =
`👋 ¡Hola NOXA!

Estoy interesado en este producto.

📦 Producto: ${producto}

💰 Precio: ${precio}

¿Está disponible?

Mi nombre:

Ciudad:

Dirección:

Muchas gracias.`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

}

/*==========================
BOTÓN FLOTANTE WHATSAPP
==========================*/

const boton = document.createElement("a");

boton.href = `https://wa.me/${numero}`;

boton.target = "_blank";

boton.innerHTML = "💬";

boton.className = "floating-whatsapp";

document.body.appendChild(boton);

/*==========================
AÑO AUTOMÁTICO
==========================*/

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = `© ${new Date().getFullYear()} NOXA. Todos los derechos reservados.`;

}

/*==========================
ANIMACIÓN AL HACER SCROLL
==========================*/

const elementos = document.querySelectorAll(
    ".hero-content, .card, .nosotros, .contacto"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

elementos.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform = "translateY(40px)";

    elemento.style.transition = ".8s ease";

    observer.observe(elemento);

});

/*==========================
HEADER AL HACER SCROLL
==========================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "#111";

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(0,0,0,.45)";

        header.style.boxShadow = "none";

    }

});