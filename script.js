/* ========================================
   FECHA DE INICIO DE LA RELACIÓN
======================================== */

const fechaInicio = new Date("2024-10-27T00:00:00");


/* ========================================
   CONTADOR
======================================== */

function actualizarContador() {

    const ahora = new Date();

    let diferencia = ahora - fechaInicio;

    if (diferencia < 0) {
        diferencia = 0;
    }

    const segundosTotales =
        Math.floor(diferencia / 1000);

    const dias =
        Math.floor(segundosTotales / 86400);

    const horas =
        Math.floor(
            (segundosTotales % 86400) / 3600
        );

    const minutos =
        Math.floor(
            (segundosTotales % 3600) / 60
        );

    const segundos =
        segundosTotales % 60;


    document.getElementById("dias").textContent =
        dias;

    document.getElementById("horas").textContent =
        horas;

    document.getElementById("minutos").textContent =
        minutos;

    document.getElementById("segundos").textContent =
        segundos;
}


actualizarContador();

setInterval(actualizarContador, 1000);


/* ========================================
   BOTÓN SORPRESA
======================================== */

const botonSorpresa =
    document.getElementById("botonSorpresa");

const mensajeSorpresa =
    document.getElementById("mensajeSorpresa");


botonSorpresa.addEventListener(
    "click",
    function () {

        const abierto =
            mensajeSorpresa.classList.toggle(
                "mostrar"
            );


        if (abierto) {

            botonSorpresa.textContent =
                "❤️ Te amo, Yoselin";

        } else {

            botonSorpresa.textContent =
                "💝 Tengo algo para ti";
        }

    }
);


/* ========================================
   CORAZONES FLOTANTES
======================================== */

function crearCorazon() {

    const corazon =
        document.createElement("div");


    corazon.textContent = "❤️";


    corazon.style.position =
        "fixed";

    corazon.style.left =
        Math.random() * 100 + "vw";

    corazon.style.bottom =
        "-30px";

    corazon.style.fontSize =
        Math.random() * 18 + 14 + "px";

    corazon.style.opacity =
        "0.7";

    corazon.style.pointerEvents =
        "none";

    corazon.style.zIndex =
        "999";

    corazon.style.transition =
        "transform 6s linear, opacity 6s linear";


    document.body.appendChild(corazon);


    setTimeout(function () {

        corazon.style.transform =
            "translateY(-110vh)";

        corazon.style.opacity =
            "0";

    }, 100);


    setTimeout(function () {

        corazon.remove();

    }, 6100);
}


setInterval(crearCorazon, 900);


/* ========================================
   MÚSICA
======================================== */

const musicaFondo =
    document.getElementById("musicaFondo");

const botonMusica =
    document.getElementById("botonMusica");


musicaFondo.volume = 0.5;


/* Actualizar texto del botón */

function actualizarBotonMusica() {

    if (musicaFondo.paused) {

        botonMusica.textContent =
            "🎵 Reproducir música";

    } else {

        botonMusica.textContent =
            "🔊 Pausar música";
    }
}


/* Reproducir */

function reproducirMusica() {

    musicaFondo.play()
        .then(function () {

            actualizarBotonMusica();

        })
        .catch(function () {

            actualizarBotonMusica();

        });
}


/* Botón de música */

botonMusica.addEventListener(
    "click",
    function () {

        if (musicaFondo.paused) {

            reproducirMusica();

        } else {

            musicaFondo.pause();

            actualizarBotonMusica();
        }

    }
);


/* Intentar iniciar automáticamente */

window.addEventListener(
    "load",
    function () {

        reproducirMusica();

    }
);


/* Primera interacción con la página */

document.addEventListener(
    "click",
    function iniciarMusica(evento) {

        if (
            evento.target === botonMusica
        ) {
            return;
        }


        if (musicaFondo.paused) {

            reproducirMusica();

        }


        document.removeEventListener(
            "click",
            iniciarMusica
        );

    }
);