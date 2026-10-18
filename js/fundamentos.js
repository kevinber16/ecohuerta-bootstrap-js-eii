// Laboratorio 1 — EcoHuerta
// Escribe debajo los ejemplos de las prácticas 1.1 a 1.5.
// Guarda este archivo y recarga fundamentos.html para ver la salida en la Consola.

//console.log("EcoHuerta: JavaScript conectado correctamente.");


//console.log("Bienvenido a EcoHuerta");
//console.log(8 + 5);
//console.log("8" + 5);
//console.warn("Este cultivo necesita revisión");

//console.log("Kevin");
//console.log("Cultivo de tomates");
//console.log(4 * 7); // Multiplicación
//console.log(8 * 2); // Multiplicación
//console.log(10 / 2); // División 
//console.log(20 % 6); // Porcentaje
//console.log(2 ** 3);// Elevación


// Diferencia: un error en la consola indica que ocurrió un problema en el código
// que puede impedir que una instrucción funcione correctamente. En cambio,
// console.warn() muestra una advertencia que el programador escribe para señalar
// una situación que requiere atención, pero no necesariamente es un error.


//console.log("Cultivo registrado");

//const cultivoInicial = "Tomate";
//let diasIniciales = 15;
//const aguaSemanalInicial = 4.5;
//const necesitaSolInicial = true;

//console.log(cultivoInicial);
//console.log(typeof cultivoInicial);
//console.log(typeof diasIniciales);
//console.log(typeof necesitaSolInicial);

//diasIniciales = diasIniciales + 7;
//console.log(diasIniciales);
//console.log(aguaSemanalInicial * 3);

//const cantidadTexto = "12";
//const cantidadNumero = Number(cantidadTexto);

//console.log(cantidadTexto + 3);
//console.log(cantidadNumero + 3);
//console.log(Number("doce"));
//console.log(Number.isNaN(Number("doce")));
//console.log(12 === "12");

//const nombreDePrueba = "Rábano";  // Declara y asigna una cadena
//let unidadesDePrueba = 8;        // Declara un número que puede cambiar
//unidadesDePrueba = 12;           // Reasigna el valor anterior

//console.log(nombreDePrueba);
//console.log(unidadesDePrueba);
//console.log(typeof unidadesDePrueba);

//let pendienteDeAsignacion;
//const datoAusente = null;

//console.log(pendienteDeAsignacion); // undefined
//console.log(datoAusente);          // null
//console.log(typeof pendienteDeAsignacion); // "undefined"

//pendienteDeAsignacion = 15;
//console.log(pendienteDeAsignacion); // 15   se puede cambiar ya que se utiliza la variable let

//const precioDePrueba = 2500;
//const cantidadDePrueba = 3;
//const descuentoDePrueba = 1000;

//console.log(precioDePrueba * cantidadDePrueba);
//console.log(precioDePrueba * cantidadDePrueba - descuentoDePrueba);
//console.log(cantidadDePrueba >= 3);
//console.log(cantidadDePrueba === "3");
//console.log(cantidadDePrueba !== 0);

//Number("-3");
//Number("  ");


//let pendienteDeAsignacion = 20;
//const datoAusente = null;
//pendienteDeAsignacion = "hola mundo"; //permite cambiar el valor de la variable ya que se utiliza let

//console.log(pendienteDeAsignacion); // undefined
//console.log(datoAusente);          // null
//console.log(typeof pendienteDeAsignacion); // "undefined"

//INICIO DE ACTIVIDAD

//let nombreCultivo = "Tomate";
//let unidadesDisponibles = 20 ;
//let necesitaRiego = true;
//let precioSemilla = 2500;

//console.log("Nombre del cultivo:", nombreCultivo);
//console.log("Cantidad de plantas: ", unidadesDisponibles);
//console.log("¿Necesita riego?: ", necesitaRiego);
//console.log("Precio de las semilla ", precioSemilla);

//console.log(typeof nombreCultivo);
//console.log(typeof unidadesDisponibles);
//console.log(typeof necesitaRiego);
//console.log(typeof precioSemilla);

//console.log("Precio de 10 unidades de: ", nombreCultivo);
//console.log(precioSemilla * 10);
//console.log("precio de 7 unidades de: ", nombreCultivo);
//console.log(precioSemilla * 7);
//console.log("Diferencia de precio entre 10 y 7 unidades de: ", nombreCultivo);
//console.log(precioSemilla * 10 - precioSemilla * 7);

//console.log(10 + 2 * 3);// El resultado es 16, ya que la multiplicación tiene prioridad sobre la suma
//console.log((10 + 2) * 3); // El resultado es 36, ya que los paréntesis tienen prioridad sobre la multiplicación

//console.log(10 > 8, 10 <= 8, 10 !== "10", 5 === 5, 5 == "5"); // El resultado es true, false, true, true, true

//const litrosPorSemana = 3.5;
//const semanas = 4;
//const costoPorLitro = 250;

//const consumoTotal = litrosPorSemana * semanas;
//const costoTotal = consumoTotal * costoPorLitro;

//console.log("Consumo total de agua:", consumoTotal, "litros");
//console.log("Costo total del agua:", costoTotal, "unidades monetarias");
//let contador = 0;
//contador += 1;

//const humedadEjemplo = 66;

//if (humedadEjemplo < 30) {
//  console.log("Humedad baja");
//} else if (humedadEjemplo <= 60) {
//  console.log("Humedad adecuada");
//} else {
 // console.log("Humedad alta");
//}

//const temperaturaEjemplo = 24;
//const tieneAguaEjemplo = true;

//if (temperaturaEjemplo >= 18 && temperaturaEjemplo <= 30 && tieneAguaEjemplo) {
//  console.log("Se cumplen las condiciones de la simulación");
//} else {
//  console.log("Revisar condiciones");
//}

//const litrosDisponibles = 1;
//const temperaturaActual = 34;
//const revisarPorAgua = litrosDisponibles < 2;
//const revisarPorCalor = temperaturaActual > 30;

//console.log(revisarPorAgua && revisarPorCalor); // Ambas condiciones
//console.log(revisarPorAgua || revisarPorCalor); // Al menos una condición
//console.log(!revisarPorAgua);                   // Invierte el booleano

// Alertas del cultivo (reglas de simulación)

const alertaAgua = true;
const alertaPlagas = false;

if (alertaAgua || alertaPlagas) {
    console.log("Revisar cultivo");
} else {
    console.log("Sin alertas");
}

const cantidad = 32;

if (cantidad === 0) {
    console.log("Sin existencias");
} else if (cantidad >= 1 && cantidad <= 5) {
    console.log("Existencias bajas");
} else {
    console.log("Disponible");
}

const calificacion = 992;

if (calificacion >= 0 && calificacion <= 59) {
    console.log("Por mejorar");
} else if (calificacion >= 60 && calificacion <= 79) {
    console.log("Aceptable");
} else if (calificacion >= 80 && calificacion <= 100) {
    console.log("Destacado");
} else {
    console.log("Calificación no válida");
}


const estadoCultivo = "crecimiento";
const aguaDisponible = 1.5;

if (estadoCultivo === "crecimiento" && aguaDisponible < 2) {
    console.log("Aviso: el cultivo necesita agua");
} else {
    console.log("No es necesario enviar el aviso");
}

const EstadoCultivo = "crecimiento";
const AguaDisponible = 1.5;

const necesitaAgua = EstadoCultivo === "crecimiento" && AguaDisponible < 2;

if (necesitaAgua) {
    console.log("Aviso: el cultivo necesita agua");
} else {
    console.log("No es necesario enviar el aviso");
}
const litrosRegistrados = [2, 3.5, 4, 1.5];
let totalLitros = 0;

for (let indice = 0; indice < litrosRegistrados.length; indice++) {
  totalLitros += litrosRegistrados[indice];
}

console.log(totalLitros);
console.log(litrosRegistrados[0]);
console.log(litrosRegistrados.length);

const herramientas = ["Pala", "Regadera", "Guantes"];
herramientas.push("Rastrillo");
console.log(herramientas.includes("Regadera"));
console.log(herramientas[1]);
herramientas.splice(0, 1);
console.log(herramientas);
for (const herramienta of herramientas) {
  console.log("Herramienta: " + herramienta);
}

let intentosEjemplo = 0;
while (intentosEjemplo < 3) {
  console.log("Intento " + (intentosEjemplo + 1));
  intentosEjemplo++;
}


const cultivos = ["Tomate", "Lechuga", "Maíz", "Zanahoria", "Cebolla"];

console.log("Primer cultivo:", cultivos[0]);
console.log("Último cultivo:", cultivos[cultivos.length - 1]);

cultivos.push("Papa");
cultivos.splice(1, 1);

console.log("Arreglo actualizado:", cultivos);
console.log("Nueva longitud:", cultivos.length);

const cantidades = [12, 8, 15, 5, 10];
let suma = 0;

for (let i = 0; i < cantidades.length; i++) {
    suma += cantidades[i];
}

const promedio = suma / cantidades.length;

console.log("Suma:", suma);
console.log("Promedio:", promedio);

const existencias = [2, 0, 3, 0, 1];
let agotadas = 0;

for (let i = 0; i < existencias.length; i++) {
    if (existencias[i] === 0) {
        agotadas++;
    }
}

console.log("Cultivos con existencias agotadas:", agotadas);

const nombres = ["Tomate", "Lechuga", "Maíz"];

for (let i = 0; i < nombres.length; i++) {
    console.log((i + 1) + ". " + nombres[i]);
}const cantidadesVacias = [3, 5, 5];
let sumaVacia = 0;

for (let i = 0; i < cantidadesVacias.length; i++) {
    sumaVacia += cantidadesVacias[i];
}

if (cantidadesVacias.length > 0) {
    const promedioVacio = sumaVacia / cantidadesVacias.length;
    console.log("Promedio:", promedioVacio);
} else {
    console.log("No se puede calcular el promedio: no hay datos.");
}


const cultivoEjemplo = {
  nombre: "Tomate",
  dias: 85,
  agua: 7,
  estado: "cosecha"
};

console.log(cultivoEjemplo.nombre);
console.log(cultivoEjemplo["agua"]);

cultivoEjemplo.agua = 7.5;
console.log(cultivoEjemplo.agua);


const cultivosDeEjemplo = [
  { nombre: "Tomate", dias: 85, agua: 7, estado: "cosecha" },
  { nombre: "Lechuga", dias: 25, agua: 3, estado: "crecimiento" },
  { nombre: "Zanahoria", dias: 5, agua: 2, estado: "semilla" }
];

for (const cultivo of cultivosDeEjemplo) {
  console.log(cultivo.nombre + ": " + cultivo.estado);
}


function describirCultivo(cultivo) {
  return cultivo.nombre + " lleva " + cultivo.dias + " días registrado";
}

console.log(describirCultivo(cultivosDeEjemplo[1]));

const duplicarEjemplo = (numero) => numero * 2;
console.log(duplicarEjemplo(6));