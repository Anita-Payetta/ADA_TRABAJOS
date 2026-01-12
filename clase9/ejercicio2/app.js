/* Ejercicio 2:
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores
numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está
dentro del rango definido por las constantes */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario que ingrese un número cualquiera
let numero = parseFloat(prompt("Ingrese un número: "));

//Definimos dos constantes, RANGO_MINIMO y RANGO_MAXIMO.
let RANGO_MAXIMO = 250;
let RANGO_MINIMO = -30;

if (numero > RANGO_MINIMO && numero < RANGO_MAXIMO) {
  console.log(`El numero ${numero} está dentro del rango`);
} else {
  console.log(`El numero ${numero} está fuera del rango`);
}
