/* Ejercicio 5:
Escribe un programa que pida al usuario que ingrese tres números y determine
cuál es el mayor de los tres.
 */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario que ingrese un número cualquiera
let numero1 = parseFloat(prompt("Ingrese el primer número: "));

//Solicito al usuario que ingrese un segundo número
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));

//Solicito al usuario que ingrese un tercer número
let numero3 = parseFloat(prompt("Ingrese el tercer número: "));

//Verificamos cuál es el mayor de los números ingresados
let mayor;

if (numero1 >= numero2 && numero1 >= numero3) {
  mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
  mayor = numero2;
} else {
  mayor = numero3;
}

//Mostramos el resultado en la terminal
console.log(`El mayor de los números ingresados es : ${mayor}`);
