/* Ejercicio 1:
Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese
dos números y muestra cuál es mayor o si son iguales. */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario que ingrese un número cualquiera
let numero1 = parseFloat(prompt("Ingrese el primer número: "));

//Solicito al usuario que ingrese un segundo número
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));

//Verificamos cuál es el mayor de los números ingresados
let mayor;

if (numero1 > numero2) {
  mayor = numero1;
} else if (numero2 > numero1) {
  mayor = numero2;
} else {
  mayor = "ninguno, los números ingresados son iguales.";
}

//Mostramos el resultado en la terminal
console.log(`El mayor de los números ingresados es : ${mayor}`);
