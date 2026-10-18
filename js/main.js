// Laboratorio 1 — EcoHuerta
// Este archivo se ejecuta desde index.html (con el atributo defer).
// La interfaz está preparada, pero los controles todavía no tienen lógica.
// Construye las funciones, eventos y validaciones de las prácticas 1.6 y 1.7
// y de la actividad integradora. No elimines los id del HTML.

//const anio = document.getElementById("2026");
//  anio.textContent = new Date().getFullYear();

// Punto de partida: crea aquí tu arreglo de cultivos, funciones y eventos.
// Revisa los criterios de la actividad integradora antes de empezar.

const cultivos = [
    {
        nombre: "Tomate",
        dias: 85,
        agua: 7,
        estado: "cosecha"
    },
    {
        nombre: "Lechuga",
        dias: 25,
        agua: 3,
        estado: "crecimiento"
    },
    {
        nombre: "Zanahoria",
        dias: 5,
        agua: 2,
        estado: "semilla"
    }
];

const estadosPermitidos = [
    "semilla",
    "crecimiento",
    "cosecha"
];


const listaCultivos = document.getElementById("listaCultivos");
const totalCultivos = document.getElementById("totalCultivos");
const totalCrecimiento = document.getElementById("totalCrecimiento");
const totalCosecha = document.getElementById("totalCosecha");

const busqueda = document.getElementById("busqueda");
const filtroEstado = document.getElementById("filtroEstado");
const sinResultados = document.getElementById("sinResultados");

const formCultivo = document.getElementById("formCultivo");
const nombreCultivo = document.getElementById("nombreCultivo");
const diasCultivo = document.getElementById("diasCultivo");
const aguaCultivo = document.getElementById("aguaCultivo");
const estadoCultivo = document.getElementById("estadoCultivo");
const mensajeFormulario = document.getElementById("mensajeFormulario");



function crearTarjeta(cultivo) {
   
    const columna = document.createElement("div");
    columna.className = "col-md-6 col-lg-4";

    const tarjeta = document.createElement("article");
    tarjeta.className = "card crop-card h-100";

    
    const portada = document.createElement("div");
    portada.classList.add("crop-cover");

    const clasesCultivo = {
        tomate: "crop-tomate",
        lechuga: "crop-lechuga",
        zanahoria: "crop-zanahoria"
    };

    const nombreNormalizado = cultivo.nombre.trim().toLowerCase();

    const clasePortada =
        clasesCultivo[nombreNormalizado] || "crop-generico";

    portada.classList.add(clasePortada);
    portada.textContent = cultivo.nombre.toUpperCase();

   
    const cuerpo = document.createElement("div");
    cuerpo.className = "card-body";

    
    const encabezado = document.createElement("div");
    encabezado.className =
        "d-flex justify-content-between gap-2 align-items-center";

    const nombre = document.createElement("h3");
    nombre.className = "h5 mb-0";
    nombre.textContent = cultivo.nombre;


    const insignia = document.createElement("span");
    insignia.className = "badge";

    const estados = {
        semilla: {
            texto: "Semilla",
            clase: "text-bg-secondary"
        },
        crecimiento: {
            texto: "Crecimiento",
            clase: "text-bg-warning"
        },
        cosecha: {
            texto: "Cosecha",
            clase: "text-bg-success"
        }
    };

    const estado = estados[cultivo.estado];
    insignia.classList.add(estado.clase);
    insignia.textContent = estado.texto;

    encabezado.append(nombre, insignia);


    const detalles = document.createElement("p");
    detalles.className = "text-secondary small mt-3 mb-0";
    detalles.textContent =
        `Días de cultivo: ${cultivo.dias} · Agua por semana: ${cultivo.agua} L`;

    cuerpo.append(encabezado, detalles);
    tarjeta.append(portada, cuerpo);
    columna.appendChild(tarjeta);

    return columna;
}

function actualizarIndicadores() {
    totalCultivos.textContent = cultivos.length;

    totalCrecimiento.textContent = cultivos.filter(
        cultivo => cultivo.estado === "crecimiento"
    ).length;

    totalCosecha.textContent = cultivos.filter(
        cultivo => cultivo.estado === "cosecha"
    ).length;
}



function renderizarCultivos() {
    const textoBusqueda = busqueda.value.trim().toLowerCase();
    const estadoSeleccionado = filtroEstado.value;

    const cultivosFiltrados = cultivos.filter(cultivo => {
        const coincideNombre = cultivo.nombre
            .toLowerCase()
            .includes(textoBusqueda);

        const coincideEstado =
            estadoSeleccionado === "todos" ||
            cultivo.estado === estadoSeleccionado;

        return coincideNombre && coincideEstado;
    });

    
    listaCultivos.replaceChildren();

   
    cultivosFiltrados.forEach(cultivo => {
        listaCultivos.appendChild(crearTarjeta(cultivo));
    });

  
    if (cultivosFiltrados.length === 0) {
        sinResultados.classList.remove("d-none");
    } else {
        sinResultados.classList.add("d-none");
    }

    actualizarIndicadores();
}



formCultivo.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = nombreCultivo.value.trim();
    const diasTexto = diasCultivo.value.trim();
    const aguaTexto = aguaCultivo.value.trim();
    const estado = estadoCultivo.value;

    const dias = Number(diasTexto);
    const agua = Number(aguaTexto);


    if (nombre === "") {
        mostrarMensaje("Escribe el nombre del cultivo.", "danger");
        return;
    }

    if (nombre.length > 50) {
        mostrarMensaje(
            "El nombre no puede superar los 50 caracteres.",
            "danger"
        );
        return;
    }


    if (
        diasTexto === "" ||
        !Number.isInteger(dias) ||
        dias < 0
    ) {
        mostrarMensaje(
            "Los días deben ser un número entero mayor o igual a cero.",
            "danger"
        );
        return;
    }

    
    if (
        aguaTexto === "" ||
        !Number.isFinite(agua) ||
        agua < 0
    ) {
        mostrarMensaje(
            "El agua debe ser un número mayor o igual a cero.",
            "danger"
        );
        return;
    }

    if (!estadosPermitidos.includes(estado)) {
        mostrarMensaje("Selecciona un estado válido.", "danger");
        return;
    }

    
    const nuevoCultivo = {
        nombre: nombre,
        dias: dias,
        agua: agua,
        estado: estado
    };

    cultivos.push(nuevoCultivo);

    renderizarCultivos();

    mostrarMensaje("¡Cultivo registrado correctamente!", "success");

   
    formCultivo.reset();
});

function mostrarMensaje(texto, tipo) {
    mensajeFormulario.textContent = texto;
    mensajeFormulario.className = `alert alert-${tipo}`;
}

busqueda.addEventListener("input", renderizarCultivos);

filtroEstado.addEventListener("change", renderizarCultivos);


const anioActual = document.getElementById("anioActual");

if (anioActual) {
    anioActual.textContent = new Date().getFullYear();
}

renderizarCultivos();
