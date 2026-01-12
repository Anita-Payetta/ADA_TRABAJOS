/* Ejercicio 9:
Define una constante PI con el valor de pi (3.14159). Pide al usuario que ingrese el
radio de un círculo y calcula su área y perímetro utilizando la constante PI. */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario que ingrese el radio de un círculo
let radio = parseFloat(
  prompt("Ingrese el radio de un círculo para poder calcular su área: ")
);

//Creo una constante para le número PI
let pi = 3.14159;

//Calculo el área del círculo
let areaCirculo = pi * radio ** 2;

//Calculo el perímetro del círculo
let perimetroCirculo = 2 * pi * radio;

//Muestro los resultados
console.log(`El área del círculo es: ${areaCirculo}`);
console.log(`El perímetro del círculo es: ${perimetroCirculo}`);
