/* Ejercicio 1: Calculá el doble de un número
Enunciado:
En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes escribir
un programa en JavaScript que:
1. Solicite al usuario que ingrese un número cualquiera.
2. Calcule el doble de ese número.
3. Muestre el resultado en la consola.
Requisitos:
● Utiliza la función prompt() para solicitar el dato al usuario.
● Almacená el número ingresado en una variable.
● Utiliza un operador aritmético para calcular el doble del número. */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario que ingrese un número cualquiera
let numero = parseFloat(prompt("Ingrese un número: "));

//Calculamos el doble del número ingresado
let dobleNumero = numero * 2;

//Mostramos el resultado en la terminal
console.log(`El doble del número ingresado es : ${dobleNumero}`);
