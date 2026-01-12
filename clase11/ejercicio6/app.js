/* Ejercicio 6: La tabla de multiplicar
Consigna:
Crea un programa que le pida al usuario un número y luego imprima su tabla de
multiplicar desde el 1 hasta el 10. Usa un ciclo for.
 */

const prompt = require("prompt-sync")({ sigint: true });

let numero = parseInt(prompt("Ingreso un número entero: "));

for (let index = 1; index <= 10; index++) {
  let multiplicar = numero * index;
  console.log(`${numero} x ${index} = ${multiplicar}`);
}
