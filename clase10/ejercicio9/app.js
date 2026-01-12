/* Ejercicio 9: Cálculo del IMC: Escribe un programa que calcule el Índice de Masa
Corporal (IMC). */
//Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario que ingrese su peso y altura
let peso = parseFloat(prompt("Ingrese su peso en Kg: "));
let altura = parseFloat(prompt("Ingrese su altura en metros y con punto: "));

//Declaro la variable imc para realizar el cálculo del mismo

let imc = peso / (altura * altura);

//Muestro el resultado de la conversión

console.log(`Su IMC es ${imc}`);
