/* Ejercicio 8: Encuentra los múltiplos de un número
Consigna:
Escribe un programa que le pida al usuario un número entero positivo y muestre todos los
múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.
 */

const prompt = require("prompt-sync")({ sigint: true });

let numero = parseInt(prompt("Ingreso un número entero positivo: "));

for (let index = 1; index <= 100; index++) {
  let multiplo = index % numero;
  if (multiplo === 0) {
    console.log(index);
  }
}
