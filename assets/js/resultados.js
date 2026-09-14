/* =========================================================
   RESULTADOS.JS
   Renderizado de resultados.html: tabla y marcadores.
   Las gráficas se encuentran en graficas.js.
   ========================================================= */


function mostrarResultados() {

    const seccionResultados = document.getElementById(
        "seccionResultados"
    );

    const mensajeSinResultados = document.getElementById(
        "mensajeSinResultados"
    );

    if (!seccionResultados || !mensajeSinResultados) {
        return;
    }


    const resultados = cargarResultados();


    /* =====================================================
       SI NO HAY RESULTADOS
       ====================================================== */

    if (!resultados) {

        mensajeSinResultados.style.display = "block";

        seccionResultados.style.display = "none";

        return;
    }


    /* =====================================================
       MOSTRAR SECCIÓN DE RESULTADOS
       ====================================================== */

    mensajeSinResultados.style.display = "none";

    seccionResultados.style.display = "block";


    /* =====================================================
       RESULTADO GENERAL
       ====================================================== */

    const resultadoGlobal = document.getElementById(
        "resultadoGlobal"
    );

    const resultadoPorcentaje = document.getElementById(
        "resultadoPorcentaje"
    );

    const resultadoInterpretacion = document.getElementById(
        "resultadoInterpretacion"
    );


    if (resultadoGlobal) {

        resultadoGlobal.textContent =
            resultados.general.promedio.toFixed(2);
    }


    if (resultadoPorcentaje) {

        resultadoPorcentaje.textContent =
            resultados.general.porcentaje.toFixed(1) + "%";
    }


    if (resultadoInterpretacion) {

        resultadoInterpretacion.textContent =
            resultados.general.interpretacion;

        resultadoInterpretacion.className =
            "fs-3 fw-bold " +
            obtenerClaseInterpretacion(
                resultados.general.promedio
            );
    }


    /* =====================================================
       MOSTRAR RESULTADOS DE CADA CARACTERÍSTICA
       ====================================================== */

    mostrarCaracteristica(
        resultados.funcionalidad,
        "Funcionalidad"
    );

    mostrarCaracteristica(
        resultados.rendimiento,
        "Rendimiento"
    );

    mostrarCaracteristica(
        resultados.compatibilidad,
        "Compatibilidad"
    );

    mostrarCaracteristica(
        resultados.usabilidad,
        "Usabilidad"
    );

    mostrarCaracteristica(
        resultados.fiabilidad,
        "Fiabilidad"
    );

    mostrarCaracteristica(
        resultados.seguridad,
        "Seguridad"
    );

    mostrarCaracteristica(
        resultados.mantenibilidad,
        "Mantenibilidad"
    );

    mostrarCaracteristica(
        resultados.portabilidad,
        "Portabilidad"
    );


    /* =====================================================
       CREAR GRÁFICAS
       ====================================================== */

    crearGraficaCaracteristicas(resultados);

    crearGraficaGlobal(resultados);
}


/* =========================================================
   MOSTRAR UNA CARACTERÍSTICA
   ========================================================= */

function mostrarCaracteristica(resultado, nombreId) {

    if (!resultado) {
        return;
    }


    const puntaje = document.getElementById(
        "puntaje" + nombreId
    );

    const porcentaje = document.getElementById(
        "porcentaje" + nombreId
    );

    const interpretacion = document.getElementById(
        "interpretacion" + nombreId
    );


    /* Puntuación */

    if (puntaje) {

        puntaje.textContent =
            resultado.promedio.toFixed(2) + " / 5";
    }


    /* Porcentaje */

    if (porcentaje) {

        porcentaje.textContent =
            resultado.porcentaje.toFixed(1) + "%";
    }


    /* Interpretación */

    if (interpretacion) {

        const texto =
            obtenerInterpretacion(
                resultado.promedio
            );


        interpretacion.innerHTML =
            `<span class="badge ${obtenerClaseInterpretacion(
                resultado.promedio
            )}">${texto}</span>`;
    }
}


/* =========================================================
   EJECUTAR RESULTADOS AL CARGAR resultados.html
   ========================================================= */

if (
    document.getElementById("seccionResultados")
) {

    mostrarResultados();

}