/* ==========================================
   NOXA | APP.JS
========================================== */

const numero = "573115255712";

/*=============================
  Comprar por WhatsApp
==============================*/

const botones = document.querySelectorAll(".card button");

botones.forEach((boton)=>{

    boton.addEventListener("click",()=>{

        const card = boton.parentElement;

        const producto = card.querySelector("h3").textContent;

        const precio = card.querySelector("p").textContent;

        const mensaje =
`👋 Hola NOXA.

Quiero comprar este producto.

🎧 Producto: ${producto}

💰 Precio: ${precio}

Mi nombre es:

Ciudad:

Dirección:

Muchas gracias.`;

        const url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        window.open(url,"_blank");

    });

});


/*=============================
 Animación al hacer scroll
==============================*/

const elementos = document.querySelectorAll(".card,.hero-info,.hero-image,.nosotros,.contacto");

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

elementos.forEach((el)=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".7s";

observer.observe(el);

});


/*=============================
 Botón flotante WhatsApp
==============================*/

const whatsapp = document.createElement("a");

whatsapp.href="https://wa.me/"+numero;

whatsapp.target="_blank";

whatsapp.innerHTML="💬";

whatsapp.className="floating-whatsapp";

document.body.appendChild(whatsapp);


/*=============================
 Año automático
==============================*/

const footer=document.querySelector("footer p");

footer.innerHTML=`© ${new Date().getFullYear()} NOXA. Todos los derechos reservados.`;