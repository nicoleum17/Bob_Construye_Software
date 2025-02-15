// Ejercicio 1
const numero = prompt("Ingresa un número: ");

for (let i = 1; i <= numero; i++) {
  document.write(i + " ");
  document.write(i * i + " ");
  document.write(i * i * i + " <br/>");
}

// Ejercicio 2
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;
let correcta = num1 + num2;

let tiempoInicial = Date.now();
let respuesta = prompt(`¿Cuánto es ${num1} + ${num2}?`);
let tiempoFinal = Date.now();

let tiempo = ((tiempoFinal - tiempoInicial) / 1000).toFixed(2);
let resultado = parseInt(respuesta) === correcta ? "Correcto" : "Incorrecto";
document.write(
  "La respuesta es " + resultado + ". El tiempo es " + tiempo + " segundos"
);

//Ejercicio 3

function contador(arreglo) {
  let negativos = 0;
  let ceros = 0;
  let positivos = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] < 0) {
      negativos++;
    } else if (arreglo[i] === 0) {
      ceros++;
    } else {
      positivos++;
    }
  }

  return { negativos, ceros, positivos };
}

let arreglo = [3, -8, 0, 7, 0, 2, 9, 1, -4];
resultado = contador(arreglo);

console.log("Negativos:", resultado.negativos);
console.log("Ceros:", resultado.ceros);
console.log("Positivos:", resultado.positivos);

// Ejercicio 4
function promedio(matriz) {
  let promedios = [];
  let suma = 0;
  let promedioFila = 0;

  for (let i = 0; i < matriz.length; i++) {
    suma = 0;
    for (let j = 0; j < matriz[i].length; j++) {
      suma += matriz[i][j];
    }
    promedioFila = suma / matriz[i].length;
    promedios.push(promedioFila);
  }

  return promedios;
}

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let promedios_matriz = promedio(matriz);
console.log(promedios_matriz);

//Ejercicio 5
function inverso(num) {
  let str = num.toString();
  let inv = [];
  for (let i = str.length - 1; i >= 0; i--) {
    inv.push(str[i]);
  }

  return inv;
}
let num = 230301;
let numInv = inverso(num);
console.log(numInv);

//Ejercicio 6
class Tarea {
  constructor(titulo, descripcion, fecha, estatus) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.estatus = estatus;
  }

  completar() {
    this.estatus = "completada";
  }

  mostrarInfo() {
    document.getElementById("resultado").innerText =
      `Tarea: ${this.titulo} - ${this.descripcion} - Fecha: ${this.fecha} (${this.estatus === "completada" ? "✅ Completada" : "❌ En proceso"})`;
  }
}

const tarea1 = new Tarea("Lab1", "Iniciar HTML", "2025-02-14", "En Proceso");
