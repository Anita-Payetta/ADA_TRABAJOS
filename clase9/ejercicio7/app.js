/* Ejercicio 7:
Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras. Muestra
el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462) */

const prompt = require("prompt-sync")({ sigint: true });

//Piso al usuario que ingrese su peso en kilogramos

let pesoKg = parseFloat(prompt("Ingrese su peso en kilogramos: "));
let pesoLb = pesoKg * 2.20462;

console.log(`Su peso en libras es: ${pesoLb} lb`);
