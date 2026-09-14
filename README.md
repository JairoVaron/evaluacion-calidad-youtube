# Evaluación de Calidad de YouTube

## Descripción

Este proyecto consiste en el desarrollo de un sitio web para evaluar la calidad del software de **YouTube** utilizando el modelo de calidad **ISO/IEC 25010**.

El sitio permite responder una serie de preguntas relacionadas con diferentes características de calidad, calcular los resultados de la evaluación y mostrarlos mediante tablas, porcentajes y gráficas.

El proyecto fue realizado como parte de la asignatura relacionada con **Calidad de Software**.

---

## Objetivo

Evaluar la calidad de YouTube mediante diferentes características del modelo ISO/IEC 25010 y presentar los resultados de una manera clara y sencilla mediante un sitio web.

---

## Modelo utilizado

Para la evaluación se utiliza el modelo **ISO/IEC 25010**, tomando como base sus características de calidad del producto:

1. **Adecuación funcional**
2. **Eficiencia de rendimiento**
3. **Compatibilidad**
4. **Usabilidad**
5. **Fiabilidad**
6. **Seguridad**
7. **Mantenibilidad**
8. **Portabilidad**

Cada característica contiene diferentes preguntas que permiten asignar una puntuación.

---

## Escala de evaluación

Las preguntas utilizan una escala de **1 a 5**:

| Puntuación | Significado |
|------------|-------------|
| 1 | Muy bajo |
| 2 | Bajo |
| 3 | Medio |
| 4 | Alto |
| 5 | Muy alto |

A partir de las respuestas se calcula el promedio de cada característica y un resultado general.

---

## Funcionalidades

El sitio web cuenta con las siguientes secciones:

### Inicio

Presenta el proyecto y el objetivo de la evaluación.

### Modelo

Explica el modelo ISO/IEC 25010 y las características utilizadas para evaluar YouTube.

### Evaluación

Contiene el cuestionario con las preguntas correspondientes a cada característica.

El usuario debe responder todas las preguntas para poder obtener los resultados.

### Resultados

Muestra:

- Puntaje de cada característica.
- Porcentaje obtenido.
- Interpretación de los resultados.
- Promedio general.
- Porcentaje de calidad general.
- Gráfica comparativa de las características.
- Gráfica del resultado general.

Los resultados se almacenan temporalmente utilizando `localStorage`.

### Conclusiones

Presenta las conclusiones obtenidas después de realizar la evaluación de YouTube.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- SVG
- LocalStorage

Las gráficas se generan utilizando **SVG y JavaScript**, por lo que no dependen de librerías externas para funcionar.

---

## Estructura del proyecto

```text
evaluacion-youtube/
│
├── index.html
│
├── pages/
│   ├── modelo.html
│   ├── evaluacion.html
│   ├── resultados.html
│   └── conclusiones.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── data.js
│   │   ├── utils.js
│   │   ├── evaluacion.js
│   │   ├── resultados.js
│   │   ├── ui.js
│   │   └── graficas.js
│   │
│   └── img/
│
└── README.md
````

---

## Funcionamiento

El proceso de evaluación funciona de la siguiente manera:

```text
Inicio
   ↓
Información del modelo
   ↓
Cuestionario
   ↓
Respuestas
   ↓
Cálculo de resultados
   ↓
Promedios y porcentajes
   ↓
Gráficas
   ↓
Conclusiones
```

Las respuestas son procesadas mediante JavaScript. Para cada característica se calcula un promedio sobre las respuestas obtenidas.

El porcentaje se obtiene a partir de la puntuación sobre 5:

```text
Porcentaje = Promedio × 20
```

El resultado general se obtiene a partir del promedio de las características evaluadas.

---

## Gráficas

El proyecto utiliza gráficas creadas directamente con **SVG y JavaScript**.

Se incluyen:

### Gráfica de características

Permite comparar visualmente las puntuaciones obtenidas en las ocho características del modelo.

### Gráfica de calidad general

Muestra mediante un indicador circular el porcentaje general obtenido por YouTube.

Estas gráficas no necesitan conexión a Internet ni librerías externas para funcionar.

---

## Ejecución del proyecto

Al ser un proyecto desarrollado con HTML, CSS y JavaScript, no necesita un servidor backend.

Se puede ejecutar de las siguientes formas:

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto.
3. Abrir `index.html` en un navegador.

También puede publicarse utilizando servicios de alojamiento gratuito para sitios web estáticos.

---

## Almacenamiento de resultados

Los resultados de la evaluación se guardan en el almacenamiento local del navegador utilizando:

```javascript
localStorage
```

La información se guarda con la clave:

```text
resultadosYoutube
```

Esto permite que la página de resultados pueda recuperar la evaluación realizada anteriormente.

---

## Objetivo académico

Este proyecto busca aplicar de manera práctica un modelo de calidad de software a una aplicación utilizada diariamente, identificando sus principales características de calidad y representando los resultados mediante una aplicación web.

---

## Autor

**Jairo de Jesús Varón Hernández**

Estudiante de Ingeniería de Sistemas

Universidad de La Guajira

---

## Proyecto académico

Evaluación de calidad de software utilizando el modelo ISO/IEC 25010.
