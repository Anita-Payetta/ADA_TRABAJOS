/* Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en
un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se
encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su
desarrollo) */

const prompt = require("prompt-sync")({ sigint: true });

let nombres = [];

console.log(
  "A continuación le pediremos que ingrese los nombres de 5 personas"
);

for (let index = 0; index < 5; index++) {
  let nombreIndividuo = prompt("Ingrese nombre: ");
  nombres[index] = nombreIndividuo;
}

let nombreAVerificar = prompt(
  "Ingrese el nombre que desea buscar en la lista: "
);
let verificacion = false;

for (let index = 0; index < nombres.length; index++) {
  nombres[index] === nombreAVerificar ? (verificacion = true) : "";
}

verificacion
  ? console.log(`El nombre ${nombreAVerificar} está en la lista`)
  : console.log(`El nombre ${nombreAVerificar} no está en la lista`);
