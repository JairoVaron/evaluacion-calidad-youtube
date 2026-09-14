/* =========================================================
   UTILS.JS
   Funciones utilitarias compartidas: lectura de respuestas,
   promedios e interpretación de puntajes.
   ========================================================= */

function obtenerRespuesta(nombrePregunta) {

    const respuesta = document.querySelector(
        `input[name="${nombrePregunta}"]:checked`
    );

    if (!respuesta) {
        return null;
    }

    return Number(respuesta.value);
}


function calcularPromedio(valores) {

    if (valores.length === 0) {
        return 0;
    }

    const suma = valores.reduce(
        (total, valor) => total + valor,
        0
    );

    return suma / valores.length;
}


function obtenerInterpretacion(puntaje) {

    if (puntaje >= 4.5) {
        return "Excelente";
    }

    if (puntaje >= 4.0) {
        return "Bueno";
    }

    if (puntaje >= 3.0) {
        return "Regular";
    }

    if (puntaje >= 2.0) {
        return "Malo";
    }

    return "Muy malo";
}


function obtenerClaseInterpretacion(puntaje) {

    if (puntaje >= 4.5) {
        return "bg-success";
    }

    if (puntaje >= 4.0) {
        return "bg-primary";
    }

    if (puntaje >= 3.0) {
        return "bg-secondary";
    }

    if (puntaje >= 2.0) {
        return "bg-warning text-dark";
    }

    return "bg-danger";
}
