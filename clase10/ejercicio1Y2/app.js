/* Ejercicio 1 - Declarar dos variables: Nuestra tarea será declarar dos variables: una
con el nombre, edad y la otra con el nombre peso. Después deberás asignarle un
valor. */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario que ingrese su nombre
let nombre = prompt("Ingrese su nombre: ");

//Solicito al usuario que ingrese su edad
let edad = parseInt(prompt("Ingrese su edad: "));

//Solicito al usuario que ingrese su peso
let peso = parseFloat(prompt("Ingrese su peso: "));

//Mostramos los datos en la terminal
console.log(
  `Tu nombre es: ${nombre}, tu edad es: ${edad} años y tu peso es: ${peso} kg.`
);
