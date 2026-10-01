/* ========================================
   FECHA DE INICIO
======================================== */

const fechaInicio = new Date("2024-10-27T00:00:00");


/* ========================================
   PANTALLA DE BIENVENIDA
======================================== */

const bienvenida =
    document.getElementById("bienvenida");

const abrirPagina =
    document.getElementById("abrirPagina");


abrirPagina.addEventListener("click", function () {

    bienvenida.classList.add("ocultar");

    reproducirMusica();

});


/* ========================================
   CONTADOR
======================================== */

function actualizarContador() {

    const ahora = new Date();

    let diferencia =
        ahora - fechaInicio;


    if (diferencia < 0) {
        diferencia = 0;
    }


    const segundosTotales =
        Math.floor(diferencia / 1000);


    const dias =
        Math.floor(
            segundosTotales / 86400
        );


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


setInterval(
    actualizarContador,
    1000
);


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
   MÚSICA
======================================== */

const musicaFondo =
    document.getElementById("musicaFondo");

const botonMusica =
    document.getElementById("botonMusica");


musicaFondo.volume = 0.5;


function actualizarBotonMusica() {

    if (musicaFondo.paused) {

        botonMusica.textContent =
            "🎵 Reproducir música";

    } else {

        botonMusica.textContent =
            "🔊 Pausar música";

    }
}


function reproducirMusica() {

    musicaFondo.play()
        .then(function () {

            actualizarBotonMusica();

        })
        .catch(function () {

            actualizarBotonMusica();

        });
}


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


/* ========================================
   CORAZONES FLOTANTES
======================================== */

function crearCorazon() {

    const corazon =
        document.createElement("div");


    corazon.className =
        "corazon-flotante";


    const corazones = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞"
    ];


    corazon.textContent =
        corazones[
            Math.floor(
                Math.random() *
                corazones.length
            )
        ];


    corazon.style.left =
        Math.random() * 100 + "vw";


    corazon.style.fontSize =
        Math.random() * 20 + 15 + "px";


    corazon.style.animationDuration =
        Math.random() * 3 + 5 + "s";


    document.body.appendChild(
        corazon
    );


    setTimeout(function () {

        corazon.remove();

    }, 9000);

}


setInterval(
    crearCorazon,
    900
);


/* ========================================
   FOTOS AMPLIABLES
======================================== */

const fotos =
    document.querySelectorAll(
        ".foto img"
    );


const modalFoto =
    document.getElementById(
        "modalFoto"
    );


const imagenGrande =
    document.getElementById(
        "imagenGrande"
    );


const cerrarFoto =
    document.getElementById(
        "cerrarFoto"
    );


fotos.forEach(function (foto) {

    foto.addEventListener(
        "click",
        function () {

            imagenGrande.src =
                foto.src;

            imagenGrande.alt =
                foto.alt;

            modalFoto.classList.add(
                "mostrar"
            );

        }
    );

});


cerrarFoto.addEventListener(
    "click",
    function () {

        modalFoto.classList.remove(
            "mostrar"
        );

    }
);


modalFoto.addEventListener(
    "click",
    function (evento) {

        if (
            evento.target === modalFoto
        ) {

            modalFoto.classList.remove(
                "mostrar"
            );

        }

    }
);


/* ========================================
   CERRAR FOTO CON ESCAPE
======================================== */

document.addEventListener(
    "keydown",
    function (evento) {

        if (
            evento.key === "Escape"
        ) {

            modalFoto.classList.remove(
                "mostrar"
            );

        }

    }
);


/* ========================================
   SORPRESA FINAL
======================================== */

const botonFinal =
    document.getElementById(
        "botonFinal"
    );


const mensajeFinal =
    document.getElementById(
        "mensajeFinal"
    );


botonFinal.addEventListener(
    "click",
    function () {

        mensajeFinal.classList.add(
            "mostrar"
        );


        botonFinal.textContent =
            "❤️ Siempre contigo";


        lanzarCorazonesFinales();


        mensajeFinal.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }
);


/* ========================================
   EXPLOSIÓN DE CORAZONES
======================================== */

function lanzarCorazonesFinales() {

    for (
        let i = 0;
        i < 35;
        i++
    ) {

        setTimeout(
            function () {

                crearCorazon();

            },
            i * 100
        );

    }

}


/* ========================================
   INICIO
======================================== */

actualizarBotonMusica();
