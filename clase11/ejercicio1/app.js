/* Ejercicio 1: ¿Positivo, negativo o cero?
Consigna:
Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida
al usuario un número cualquiera. El programa deberá analizar si el número ingresado es
positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje
explicativo en cada caso. */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario el ingreso de un número

let numero = parseInt(prompt("Ingreso un número: "));

//Utilizo if ternario para verificar si es positivo, negativo o cero

numero === 0
  ? console.log("El número ingresado es cero")
  : numero > 0
  ? console.log("El número ingresado es positivo")
  : console.log("El números ingresado es negativo");
