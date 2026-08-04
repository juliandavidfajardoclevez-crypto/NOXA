/*=========================================
            NOXA - app.js
=========================================*/

// Número de WhatsApp
const numeroWhatsApp = "573115255712";

/*=========================================
        MENSAJE GENERAL
=========================================*/

function abrirWhatsApp(producto, precio) {

    const mensaje =
`👋 ¡Hola NOXA!

Estoy interesado en:

👕 Producto: ${producto}

💰 Precio: ${precio}

📏 Talla: M o L

¿Está disponible?`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

}

/*=========================================
      BOTONES DE LOS PRODUCTOS
=========================================*/

document.querySelectorAll(".card").forEach((card) => {

    const boton = card.querySelector("button");

    const producto = card.querySelector("h3").textContent;

    const precio = card.querySelector("span").textContent;

    boton.addEventListener("click", () => {

        abrirWhatsApp(producto, precio);

    });

});

/*=========================================
          HEADER AL HACER SCROLL
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#0d0d0d";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(0,0,0,.45)";
        header.style.boxShadow = "none";

    }

});

/*=========================================
      ANIMACIONES AL HACER SCROLL
=========================================*/

const elementos = document.querySelectorAll(".card,.titulo,.nosotros,.contacto");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: .2

});

elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = ".7s ease";

    observer.observe(elemento);

});

/*=========================================
      BOTÓN FLOTANTE WHATSAPP
=========================================*/

const whatsapp = document.createElement("a");

whatsapp.href = `https://wa.me/${numeroWhatsApp}`;

whatsapp.target = "_blank";

whatsapp.innerHTML = "💬";

whatsapp.className = "floating-whatsapp";

document.body.appendChild(whatsapp);

/*=========================================
      AÑO AUTOMÁTICO
=========================================*/

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = `© ${new Date().getFullYear()} NOXA · Todos los derechos reservados.`;

}