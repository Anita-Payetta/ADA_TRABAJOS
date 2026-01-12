/* Ejercicio 6:
Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad.
Muestra un mensaje personalizado según el caso. */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario que ingrese su edad
let edad = parseFloat(prompt("Ingrese su edad: "));

//Declaro constante mayor para realizar la comparación con el valor ingresado

let mayorEdad = 18;
if (edad >= mayorEdad) {
  console.log("Usted es mayor de edad");
} else {
  console.log("Todavía eres menor de edad");
}
