/* ⦁	Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit.
Fórmula: fahrenheit = (celsius * 9/5) + 32 */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito el ingreso de un numero
let celsius = parseFloat(prompt("Ingrese una temperatura en °C: "));

let convertirCelsiusAFahrenheit = function (celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
};

console.log(
  `${celsius} °C son equivalentes a ${convertirCelsiusAFahrenheit(celsius)} °F`
);
