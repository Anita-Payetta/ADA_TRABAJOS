/* Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente hasta
que el usuario ingrese un número negativo. Luego, imprime la suma de todos los
números ingresados.
 */
const prompt = require("prompt-sync")({ sigint: true });

let numero = parseInt(prompt("Ingrese un número entero: "));
console.log(numero);

let suma = numero;
while (numero >= 0) {
  numero = parseInt(prompt("Ingreso un número entero: "));
  console.log(numero);
  suma = suma + numero;
}
console.log(`La suma de todos los números ingresados es ${suma}`);
