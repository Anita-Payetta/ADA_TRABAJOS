/* Ejercicio 8 - Conversión de Temperaturas: Escribe un programa que convierta
una temperatura dada en grados Celsius a grados Fahrenheit. La fórmula de
conversión es: F = C x 9/5 + 32 */
/* Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en
Fahrenheit. */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario que ingrese la temperatura en °C
let celsius = parseFloat(prompt("Ingrese su la temperatura en °C: "));

//Declaro la variable fahreheit para realizar la conversión

let fahrenheit = (celsius * 9) / 5 + 32;

//Muestro el resultado de la conversión

console.log(`La temperatura ${celsius}°C es equivalente a ${fahrenheit}°F`);
