/* =========================================================
   UI.JS
   Mejoras puramente visuales/UX. No participa en el cálculo
   ni en el guardado de resultados — solo lee el DOM.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MENÚ LATERAL (sidebar) — abrir/cerrar en móvil
       ====================================================== */

    const sidebar = document.getElementById("ytSidebar");
    const backdrop = document.getElementById("ytSidebarBackdrop");
    const toggleButtons = document.querySelectorAll("[data-sidebar-toggle]");

    function abrirSidebar() {
        if (sidebar) sidebar.classList.add("is-open");
        if (backdrop) backdrop.classList.add("is-open");
    }

    function cerrarSidebar() {
        if (sidebar) sidebar.classList.remove("is-open");
        if (backdrop) backdrop.classList.remove("is-open");
    }

    toggleButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            if (sidebar && sidebar.classList.contains("is-open")) {
                cerrarSidebar();
            } else {
                abrirSidebar();
            }
        });
    });

    if (backdrop) {
        backdrop.addEventListener("click", cerrarSidebar);
    }

    /* Cierra el menú al elegir una sección (en móvil) */
    if (sidebar) {
        sidebar.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", cerrarSidebar);
        });
    }


    /* =====================================================
       BUSCADOR — sugerencias sobre las secciones del sitio
       (navegación rápida, no realiza búsquedas externas)
       ====================================================== */

    const base = document.body.dataset.base || "";

    const secciones = [
        { nombre: "Inicio", icono: "bi-house-fill", href: base + "index.html", claves: ["inicio", "home", "youtube quality"] },
        { nombre: "Modelo de calidad", icono: "bi-diagram-3", href: base + "pages/modelo.html", claves: ["modelo", "iso", "25010", "caracteristicas", "características"] },
        { nombre: "Evaluación", icono: "bi-clipboard-check", href: base + "pages/evaluacion.html", claves: ["evaluacion", "evaluación", "cuestionario", "preguntas"] },
        { nombre: "Resultados", icono: "bi-bar-chart-fill", href: base + "pages/resultados.html", claves: ["resultados", "puntuacion", "puntuación", "graficas", "gráficas"] },
        { nombre: "Conclusiones", icono: "bi-award", href: base + "pages/conclusiones.html", claves: ["conclusiones", "fortalezas", "mejoras"] }
    ];

    // Desde index.html el enlace a Inicio no lleva "pages/"
    if (base === "") {
        secciones[0].href = "index.html";
    }

    const buscadorInput = document.getElementById("ytSearchInput");
    const buscadorForm = document.getElementById("ytSearchForm");
    const sugerencias = document.getElementById("ytSearchSuggestions");

    function renderSugerencias(texto) {

        if (!sugerencias) return;

        const valor = texto.trim().toLowerCase();

        const coincidencias = valor === ""
            ? secciones
            : secciones.filter(function (s) {
                return s.claves.some(function (clave) {
                    return clave.includes(valor);
                });
            });

        if (coincidencias.length === 0) {
            sugerencias.classList.remove("is-open");
            sugerencias.innerHTML = "";
            return;
        }

        sugerencias.innerHTML = coincidencias.map(function (s) {
            return (
                '<a href="' + s.href + '">' +
                '<i class="bi ' + s.icono + '"></i>' +
                '<span>' + s.nombre + '</span>' +
                '</a>'
            );
        }).join("");

        sugerencias.classList.add("is-open");
    }

    if (buscadorInput && sugerencias) {

        buscadorInput.addEventListener("focus", function () {
            renderSugerencias(buscadorInput.value);
        });

        buscadorInput.addEventListener("input", function () {
            renderSugerencias(buscadorInput.value);
        });

        document.addEventListener("click", function (evento) {
            if (!sugerencias.contains(evento.target) && evento.target !== buscadorInput) {
                sugerencias.classList.remove("is-open");
            }
        });
    }

    if (buscadorForm) {

        buscadorForm.addEventListener("submit", function (evento) {

            evento.preventDefault();

            const valor = (buscadorInput ? buscadorInput.value : "").trim().toLowerCase();

            const coincidencia = secciones.find(function (s) {
                return s.claves.some(function (clave) {
                    return clave.includes(valor) || valor.includes(clave);
                });
            });

            if (coincidencia) {
                window.location.href = coincidencia.href;
            }
        });
    }


    /* =====================================================
       BARRA DE PROGRESO DEL CUESTIONARIO
       (evaluacion.html) — cuenta cuántas de las 24 preguntas
       ya tienen una opción marcada.
       ====================================================== */

    const formulario = document.getElementById("formEvaluacion");
    const progressFill = document.getElementById("progresoFill");
    const progressLabel = document.getElementById("progresoLabel");

    if (formulario && progressFill && progressLabel) {

        const totalPreguntas =
            formulario.querySelectorAll(".question-box").length;

        function actualizarProgreso() {

            const nombresContados = new Set();

            formulario
                .querySelectorAll("input[type='radio']:checked")
                .forEach(function (input) {
                    nombresContados.add(input.name);
                });

            const respondidas = nombresContados.size;
            const porcentaje = totalPreguntas
                ? Math.round((respondidas / totalPreguntas) * 100)
                : 0;

            progressFill.style.width = porcentaje + "%";
            progressLabel.textContent =
                respondidas + " de " + totalPreguntas + " preguntas respondidas";
        }

        formulario.addEventListener("change", actualizarProgreso);
        actualizarProgreso();
    }


    /* =====================================================
       SOMBRA DE LA BARRA SUPERIOR AL HACER SCROLL
       ====================================================== */

    const navbar = document.querySelector(".yt-navbar");

    if (navbar) {

        function actualizarSombraNavbar() {

            if (window.scrollY > 4) {
                navbar.style.boxShadow = "0 1px 4px rgba(0,0,0,0.12)";
            } else {
                navbar.style.boxShadow = "";
            }
        }

        window.addEventListener("scroll", actualizarSombraNavbar, { passive: true });
        actualizarSombraNavbar();
    }

});
