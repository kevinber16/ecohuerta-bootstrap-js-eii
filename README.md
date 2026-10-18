# EcoHuerta — Fundamentos de JavaScript

EcoHuerta es una aplicación web de práctica para aprender **JavaScript desde cero** utilizando una interfaz preparada con **HTML, CSS y Bootstrap 5.3**. El objetivo es transformar una página estática en un gestor sencillo de cultivos.

## Laboratorio

- [Laboratorio 1 — Fundamentos de JavaScript y programación en el navegador](laboratorios/laboratorio-01.md)

## Archivos de trabajo

| Archivo | Uso |
| --- | --- |
| [fundamentos.html](fundamentos.html) | Página de apoyo para ejecutar instrucciones y observar la consola. |
| [js/fundamentos.js](js/fundamentos.js) | Variables, tipos, operadores, condiciones, ciclos, arreglos, objetos y funciones. |
| [index.html](index.html) | Interfaz inicial del gestor de cultivos. |
| [js/main.js](js/main.js) | Manipulación del DOM, eventos, formularios y actividad integradora. |
| [css/style.css](css/style.css) | Estilos propios sobre Bootstrap. |

## Cómo comenzar

1. Descarga o clona el repositorio y abre la carpeta en **Visual Studio Code**.
2. Abre `fundamentos.html` en el navegador para realizar las primeras prácticas. Presiona **F12**, entra a **Consola** y observa la salida de `js/fundamentos.js`.
3. Abre `index.html` para observar la interfaz de EcoHuerta. Utiliza `js/main.js` para incorporar la interacción indicada en el laboratorio.
4. Sigue las instrucciones de [Laboratorio 1](laboratorios/laboratorio-01.md), desde la Práctica 1.1 hasta la actividad integradora.

No necesitas Node.js, npm ni un servidor para los ejercicios propuestos. Puedes abrir los archivos HTML directamente en un navegador moderno. Se requiere **conexión a internet para cargar Bootstrap desde su CDN**; la lógica JavaScript propia se ejecuta en el navegador sin servicios externos.

> **Punto de partida:** la interfaz incluye tarjetas ilustrativas y controles visibles, pero el registro, búsqueda, filtrado y actualización de indicadores todavía no están programados. Esas funcionalidades forman parte del trabajo del aprendiz.

## Tecnología

- JavaScript nativo (sin frameworks).
- Bootstrap **5.3.8** mediante CDN oficial de jsDelivr.
- HTML5 y un archivo CSS adicional.

Documentación de consulta: [JavaScript en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide) y [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/).



## Evidencias de trabajo

### 1. Cómo ejecutar el proyecto

1. Abrir la carpeta del proyecto `ecohuerta-bootstrap-js-eii` en Visual Studio Code.
2. Abrir el archivo `index.html` con un servidor local, por ejemplo, la extensión Live Server.
3. Utilizar el navegador para interactuar con el gestor de cultivos.
4. Para revisar posibles errores, abrir las herramientas de desarrollador del navegador con `F12` y consultar la pestaña Consola.

### 2. Funcionalidades implementadas

- Visualización dinámica de cultivos mediante un arreglo de objetos en JavaScript.
- Actualización de los indicadores de total de cultivos, crecimiento y cosecha.
- Búsqueda por nombre sin distinguir mayúsculas y minúsculas.
- Filtro por estado combinado con la búsqueda.
- Mensaje informativo cuando no existen resultados.
- Registro de nuevos cultivos mediante un formulario.
- Validación del nombre, los días de cultivo, el consumo de agua y el estado.
- Actualización de las tarjetas y los indicadores después de registrar un cultivo.

### 3. Casos de prueba

**Caso 1: Búsqueda por nombre**

- Acción: escribir `TOM` en el buscador.
- Resultado esperado: mostrar únicamente el cultivo Tomate.

**Caso 2: Registro de un cultivo válido**

- Acción: registrar Albahaca, con 10 días, 2.5 litros de agua por semana y estado Semilla.
- Resultado esperado: agregar el cultivo a la lista y actualizar el total de registros.

**Caso 3: Validación de un registro inválido**

- Acción: intentar registrar un cultivo con el nombre vacío.
- Resultado esperado: mostrar un mensaje de validación, conservar los datos introducidos y no agregar el registro.

### 4. Problema encontrado y solución

Durante el desarrollo, al generar nuevamente las tarjetas mediante JavaScript, desaparecieron los cuadros de colores del diseño original.

Identifiqué el problema al revisar la función que construía las tarjetas y observar que no conservaba las clases CSS originales. Lo resolví adaptando la función de creación de tarjetas para reutilizar las clases `crop-cover`, `crop-tomate`, `crop-lechuga`, `crop-zanahoria` y `crop-generico`.

