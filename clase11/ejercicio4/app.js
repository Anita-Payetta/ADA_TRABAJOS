/* Ejercicio 4: ¿Es par o impar?
Consigna:
Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un
número y determine si es par o impar. Muestra un mensaje explicativo indicando qué
significa cada caso. */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario el ingreso de un número

let numero = parseInt(prompt("Ingrese un número: "));

//Determino si es par o impar

let par = numero % 2;

par === 0
  ? console.log("El número ingresado es par")
  : console.log("El número ingresado es impar");
