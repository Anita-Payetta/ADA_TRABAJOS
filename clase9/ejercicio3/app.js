/* Ejercicio 3:
Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que
ingrese dos valores booleanos (true o false) y muestra el resultado de diversas
combinaciones lógicas.
 */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario que ingrese un valor booleano T o F
let condicion1 = prompt("Ingrese un valor booleano true o F false: ");

//Solicito al usuario que ingrese un valor booleano T o F
let condicion2 = prompt("Ingrese otro valor booleano true o false: ");

//Creo varialbles para el resultado de la operación lógica AND y OR

resultadoAnd = condicion1 && condicion2;
resultadoOr = condicion1 || condicion2;

console.log(
  `El resultado de ${condicion1} AND ${condicion2} es ${resultadoAnd}`
);
console.log(`El resultado de ${condicion1} OR ${condicion2} es ${resultadoOr}`);
