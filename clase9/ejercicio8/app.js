/* Ejercicio 8:
Pide al usuario que ingrese las longitudes de los tres lados de un triángulo.
Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga
sobre los triángulos para determinar la formula) */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario que ingrese la longitud del lado 1
let lado1 = prompt("Ingrese la longitud del primer lado del triángulo: ");

//Solicito al usuario que ingrese la longitud del lado 2
let lado2 = prompt("Ingrese la longitud del segundo lado del triángulo: ");

//Solicito al usuario que ingrese la longitud del lado 3
let lado3 = prompt("Ingrese la longitud del tercer lado del triángulo: ");

//Determino que tipo de triángulo es
if (lado1 !== lado2 && lado1 !== lado3) {
  console.log("El triángulo es escaleno");
} else if (lado1 === lado2 && lado2 === lado3) {
  console.log("El triángulo es equilátero");
} else {
  console.log("El triángulo es isósceles");
}
