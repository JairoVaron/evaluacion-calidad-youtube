/* =========================================================
   EVALUACION.JS
   Cálculo de resultados a partir del formulario, guardado en
   localStorage y manejo del envío en evaluacion.html.
   ========================================================= */

function calcularResultados() {

    const resultados = {};
    let todosRespondidos = true;

    for (const clave in caracteristicas) {

        const caracteristica = caracteristicas[clave];

        const valores = [];

        caracteristica.preguntas.forEach(nombrePregunta => {

            const respuesta = obtenerRespuesta(nombrePregunta);

            if (respuesta === null) {
                todosRespondidos = false;
            } else {
                valores.push(respuesta);
            }

        });

        resultados[clave] = {
            nombre: caracteristica.nombre,
            promedio: calcularPromedio(valores),
            porcentaje: calcularPromedio(valores) * 20
        };
    }


    if (!todosRespondidos) {

        alert(
            "Por favor, responde todas las preguntas antes de calcular los resultados."
        );

        return null;
    }


    /* =====================================================
       CALCULAR PROMEDIO GENERAL
       ====================================================== */

    const promedios = Object.values(resultados).map(
        resultado => resultado.promedio
    );

    const promedioGeneral = calcularPromedio(promedios);

    resultados.general = {
        promedio: promedioGeneral,
        porcentaje: promedioGeneral * 20,
        interpretacion: obtenerInterpretacion(promedioGeneral)
    };


    return resultados;
}


function guardarResultados(resultados) {

    localStorage.setItem(
        "resultadosYoutube",
        JSON.stringify(resultados)
    );
}


function cargarResultados() {

    const datos = localStorage.getItem("resultadosYoutube");

    if (!datos) {
        return null;
    }

    try {

        return JSON.parse(datos);

    } catch (error) {

        console.error(
            "No se pudieron cargar los resultados:",
            error
        );

        return null;
    }
}


/* =========================================================
   EVALUACIÓN.HTML — envío del formulario
   ========================================================= */

const formulario = document.getElementById("formEvaluacion");

if (formulario) {

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const resultados = calcularResultados();

        if (!resultados) {
            return;
        }

        guardarResultados(resultados);

        alert(
            "Evaluación completada correctamente."
        );

        window.location.href = "resultados.html";

    });

}
