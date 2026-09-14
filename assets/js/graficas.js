/* =========================================================
   GRAFICAS.JS
   Gráficas creadas con SVG y JavaScript puro.
   
   NO utiliza Chart.js.
   NO necesita internet.
   NO necesita librerías externas.
   ========================================================= */


/* =========================================================
   COLORES DEL PROYECTO
========================================================= */

const COLOR_YOUTUBE = "#FF0000";
const COLOR_YOUTUBE_DARK = "#CC0000";
const COLOR_GRIS = "#E5E5E5";
const COLOR_GRIS_OSCURO = "#606060";
const COLOR_NEGRO = "#212121";


/* =========================================================
   CREAR GRÁFICA DE CARACTERÍSTICAS
========================================================= */

function crearGraficaCaracteristicas(resultados) {

    const canvas = document.getElementById(
        "graficaCaracteristicas"
    );

    if (!canvas) {
        return;
    }


    /*
     * Ya no utilizaremos canvas.
     *
     * Lo reemplazamos por un contenedor SVG.
     */

    const contenedor = canvas.parentElement;

    if (!contenedor) {
        return;
    }


    /* Datos */

    const datos = [
        {
            nombre: "Funcionalidad",
            valor: resultados.funcionalidad.promedio
        },
        {
            nombre: "Rendimiento",
            valor: resultados.rendimiento.promedio
        },
        {
            nombre: "Compatibilidad",
            valor: resultados.compatibilidad.promedio
        },
        {
            nombre: "Usabilidad",
            valor: resultados.usabilidad.promedio
        },
        {
            nombre: "Fiabilidad",
            valor: resultados.fiabilidad.promedio
        },
        {
            nombre: "Seguridad",
            valor: resultados.seguridad.promedio
        },
        {
            nombre: "Mantenibilidad",
            valor: resultados.mantenibilidad.promedio
        },
        {
            nombre: "Portabilidad",
            valor: resultados.portabilidad.promedio
        }
    ];


    /* =====================================================
       CONFIGURACIÓN DE LA GRÁFICA
    ====================================================== */

    const ancho = 1000;
    const alto = 500;

    const margenIzquierdo = 70;
    const margenDerecho = 30;
    const margenSuperior = 30;
    const margenInferior = 100;

    const anchoUtil =
        ancho -
        margenIzquierdo -
        margenDerecho;

    const altoUtil =
        alto -
        margenSuperior -
        margenInferior;


    /* =====================================================
       CREAR SVG
    ====================================================== */

    const svg = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
    );

    svg.setAttribute(
        "viewBox",
        `0 0 ${ancho} ${alto}`
    );

    svg.setAttribute(
        "width",
        "100%"
    );

    svg.setAttribute(
        "height",
        "100%"
    );

    svg.style.display = "block";


    /* =====================================================
       FONDO
    ====================================================== */

    const fondo = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
    );

    fondo.setAttribute(
        "x",
        "0"
    );

    fondo.setAttribute(
        "y",
        "0"
    );

    fondo.setAttribute(
        "width",
        ancho
    );

    fondo.setAttribute(
        "height",
        alto
    );

    fondo.setAttribute(
        "fill",
        "#FFFFFF"
    );

    svg.appendChild(fondo);


    /* =====================================================
       LÍNEAS HORIZONTALES
    ====================================================== */

    for (let i = 0; i <= 5; i++) {

        const valor = i;

        const y =
            margenSuperior +
            altoUtil -
            (valor / 5) * altoUtil;


        const linea = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "line"
        );

        linea.setAttribute(
            "x1",
            margenIzquierdo
        );

        linea.setAttribute(
            "y1",
            y
        );

        linea.setAttribute(
            "x2",
            ancho - margenDerecho
        );

        linea.setAttribute(
            "y2",
            y
        );

        linea.setAttribute(
            "stroke",
            "#E5E5E5"
        );

        linea.setAttribute(
            "stroke-width",
            "1"
        );

        svg.appendChild(linea);


        /* Número del eje */

        const texto = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
        );

        texto.setAttribute(
            "x",
            margenIzquierdo - 15
        );

        texto.setAttribute(
            "y",
            y + 5
        );

        texto.setAttribute(
            "text-anchor",
            "end"
        );

        texto.setAttribute(
            "font-size",
            "14"
        );

        texto.setAttribute(
            "fill",
            COLOR_GRIS_OSCURO
        );

        texto.textContent = valor;

        svg.appendChild(texto);
    }


    /* =====================================================
       TAMAÑO DE CADA BARRA
    ====================================================== */

    const espacio =
        anchoUtil / datos.length;

    const anchoBarra =
        espacio * 0.55;


    /* =====================================================
       CREAR BARRAS
    ====================================================== */

    datos.forEach(function (dato, indice) {

        const valor = Number(dato.valor) || 0;

        const altura =
            (valor / 5) * altoUtil;

        const x =
            margenIzquierdo +
            indice * espacio +
            (espacio - anchoBarra) / 2;

        const y =
            margenSuperior +
            altoUtil -
            altura;


        /* ---------------------------------------------
           Barra
        --------------------------------------------- */

        const barra = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "rect"
        );

        barra.setAttribute(
            "x",
            x
        );

        barra.setAttribute(
            "y",
            margenSuperior + altoUtil
        );

        barra.setAttribute(
            "width",
            anchoBarra
        );

        barra.setAttribute(
            "height",
            "0"
        );

        barra.setAttribute(
            "rx",
            "8"
        );

        barra.setAttribute(
            "fill",
            COLOR_YOUTUBE
        );

        barra.style.transition =
            "y 0.8s ease, height 0.8s ease";

        svg.appendChild(barra);


        /* Animación */

        setTimeout(function () {

            barra.setAttribute(
                "y",
                y
            );

            barra.setAttribute(
                "height",
                altura
            );

        }, 100 + indice * 80);


        /* ---------------------------------------------
           Número encima de la barra
        --------------------------------------------- */

        const textoValor = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
        );

        textoValor.setAttribute(
            "x",
            x + anchoBarra / 2
        );

        textoValor.setAttribute(
            "y",
            y - 10
        );

        textoValor.setAttribute(
            "text-anchor",
            "middle"
        );

        textoValor.setAttribute(
            "font-size",
            "15"
        );

        textoValor.setAttribute(
            "font-weight",
            "bold"
        );

        textoValor.setAttribute(
            "fill",
            COLOR_NEGRO
        );

        textoValor.textContent =
            valor.toFixed(2);

        svg.appendChild(textoValor);


        /* ---------------------------------------------
           Nombre
        --------------------------------------------- */

        const textoNombre = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
        );

        textoNombre.setAttribute(
            "x",
            x + anchoBarra / 2
        );

        textoNombre.setAttribute(
            "y",
            alto - 50
        );

        textoNombre.setAttribute(
            "text-anchor",
            "middle"
        );

        textoNombre.setAttribute(
            "font-size",
            "13"
        );

        textoNombre.setAttribute(
            "fill",
            COLOR_GRIS_OSCURO
        );

        /*
         * Si el nombre es largo,
         * lo dividimos en dos líneas.
         */

        const palabras = dato.nombre.split(" ");

        if (palabras.length > 1) {

            const mitad =
                Math.ceil(
                    palabras.length / 2
                );

            const primeraLinea =
                palabras
                    .slice(0, mitad)
                    .join(" ");

            const segundaLinea =
                palabras
                    .slice(mitad)
                    .join(" ");


            const tspan1 =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "tspan"
                );

            tspan1.setAttribute(
                "x",
                x + anchoBarra / 2
            );

            tspan1.setAttribute(
                "dy",
                "0"
            );

            tspan1.textContent =
                primeraLinea;


            const tspan2 =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "tspan"
                );

            tspan2.setAttribute(
                "x",
                x + anchoBarra / 2
            );

            tspan2.setAttribute(
                "dy",
                "17"
            );

            tspan2.textContent =
                segundaLinea;


            textoNombre.appendChild(tspan1);
            textoNombre.appendChild(tspan2);

        } else {

            textoNombre.textContent =
                dato.nombre;

        }


        svg.appendChild(textoNombre);


        /* ---------------------------------------------
           Evento al pasar el mouse
        --------------------------------------------- */

        barra.addEventListener(
            "mouseenter",
            function () {

                barra.setAttribute(
                    "fill",
                    COLOR_YOUTUBE_DARK
                );

            }
        );


        barra.addEventListener(
            "mouseleave",
            function () {

                barra.setAttribute(
                    "fill",
                    COLOR_YOUTUBE
                );

            }
        );

    });


    /* =====================================================
       EJE VERTICAL
    ====================================================== */

    const ejeY = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
    );

    ejeY.setAttribute(
        "x1",
        margenIzquierdo
    );

    ejeY.setAttribute(
        "y1",
        margenSuperior
    );

    ejeY.setAttribute(
        "x2",
        margenIzquierdo
    );

    ejeY.setAttribute(
        "y2",
        margenSuperior + altoUtil
    );

    ejeY.setAttribute(
        "stroke",
        "#606060"
    );

    svg.appendChild(ejeY);


    /* =====================================================
       EJE HORIZONTAL
    ====================================================== */

    const ejeX = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
    );

    ejeX.setAttribute(
        "x1",
        margenIzquierdo
    );

    ejeX.setAttribute(
        "y1",
        margenSuperior + altoUtil
    );

    ejeX.setAttribute(
        "x2",
        ancho - margenDerecho
    );

    ejeX.setAttribute(
        "y2",
        margenSuperior + altoUtil
    );

    ejeX.setAttribute(
        "stroke",
        "#606060"
    );

    svg.appendChild(ejeX);


    /* =====================================================
       TÍTULO DEL EJE Y
    ====================================================== */

    const tituloY = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
    );

    tituloY.setAttribute(
        "x",
        "18"
    );

    tituloY.setAttribute(
        "y",
        alto / 2
    );

    tituloY.setAttribute(
        "text-anchor",
        "middle"
    );

    tituloY.setAttribute(
        "font-size",
        "14"
    );

    tituloY.setAttribute(
        "fill",
        COLOR_GRIS_OSCURO
    );

    tituloY.setAttribute(
        "transform",
        `rotate(-90 18 ${alto / 2})`
    );

    tituloY.textContent =
        "Puntuación";

    svg.appendChild(tituloY);


    /* =====================================================
       COLOCAR SVG
    ====================================================== */

    contenedor.innerHTML = "";

    contenedor.appendChild(svg);
}



/* =========================================================
   GRÁFICA GLOBAL
========================================================= */

function crearGraficaGlobal(resultados) {

    const canvas = document.getElementById(
        "graficaGlobal"
    );

    if (!canvas) {
        return;
    }


    const contenedor = canvas.parentElement;

    if (!contenedor) {
        return;
    }


    const porcentaje =
        Number(
            resultados.general.porcentaje
        ) || 0;


    const calidad =
        Math.max(
            0,
            Math.min(
                100,
                porcentaje
            )
        );


    const radio = 120;

    const circunferencia =
        2 * Math.PI * radio;


    const progreso =
        (calidad / 100) *
        circunferencia;


    /* =====================================================
       SVG
    ====================================================== */

    const svg =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );


    svg.setAttribute(
        "viewBox",
        "0 0 300 300"
    );

    svg.setAttribute(
        "width",
        "100%"
    );

    svg.setAttribute(
        "height",
        "100%"
    );


    /* =====================================================
       FONDO DEL CÍRCULO
    ====================================================== */

    const fondo =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );


    fondo.setAttribute(
        "cx",
        "150"
    );

    fondo.setAttribute(
        "cy",
        "150"
    );

    fondo.setAttribute(
        "r",
        radio
    );

    fondo.setAttribute(
        "fill",
        "none"
    );

    fondo.setAttribute(
        "stroke",
        COLOR_GRIS
    );

    fondo.setAttribute(
        "stroke-width",
        "25"
    );


    svg.appendChild(fondo);


    /* =====================================================
       CÍRCULO DE PROGRESO
    ====================================================== */

    const progresoCirculo =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );


    progresoCirculo.setAttribute(
        "cx",
        "150"
    );

    progresoCirculo.setAttribute(
        "cy",
        "150"
    );

    progresoCirculo.setAttribute(
        "r",
        radio
    );

    progresoCirculo.setAttribute(
        "fill",
        "none"
    );

    progresoCirculo.setAttribute(
        "stroke",
        COLOR_YOUTUBE
    );

    progresoCirculo.setAttribute(
        "stroke-width",
        "25"
    );

    progresoCirculo.setAttribute(
        "stroke-linecap",
        "round"
    );

    progresoCirculo.setAttribute(
        "transform",
        "rotate(-90 150 150)"
    );

    progresoCirculo.setAttribute(
        "stroke-dasharray",
        `0 ${circunferencia}`
    );

    progresoCirculo.style.transition =
        "stroke-dasharray 1.2s ease";


    svg.appendChild(
        progresoCirculo
    );


    /* Animación */

    setTimeout(function () {

        progresoCirculo.setAttribute(
            "stroke-dasharray",
            `${progreso} ${circunferencia}`
        );

    }, 150);


    /* =====================================================
       PORCENTAJE CENTRAL
    ====================================================== */

    const texto =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
        );


    texto.setAttribute(
        "x",
        "150"
    );

    texto.setAttribute(
        "y",
        "145"
    );

    texto.setAttribute(
        "text-anchor",
        "middle"
    );

    texto.setAttribute(
        "font-size",
        "42"
    );

    texto.setAttribute(
        "font-weight",
        "bold"
    );

    texto.setAttribute(
        "fill",
        COLOR_NEGRO
    );

    texto.textContent =
        calidad.toFixed(1) + "%";


    svg.appendChild(texto);


    /* =====================================================
       TEXTO INFERIOR
    ====================================================== */

    const subtitulo =
        document.createElementNS(
            "http://www.w3.org/2000/svg",
            "text"
        );


    subtitulo.setAttribute(
        "x",
        "150"
    );

    subtitulo.setAttribute(
        "y",
        "175"
    );

    subtitulo.setAttribute(
        "text-anchor",
        "middle"
    );

    subtitulo.setAttribute(
        "font-size",
        "14"
    );

    subtitulo.setAttribute(
        "fill",
        COLOR_GRIS_OSCURO
    );

    subtitulo.textContent =
        "Calidad general";


    svg.appendChild(
        subtitulo
    );


    /* =====================================================
       COLOCAR SVG
    ====================================================== */

    contenedor.innerHTML = "";

    contenedor.appendChild(
        svg
    );
}