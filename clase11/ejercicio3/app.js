/* Ejercicio 3: ¿Sabes contar?
Consigna:
Crea un programa que le pida al usuario un número positivo. El programa deberá contar
desde el 1 hasta ese número e imprimir cada valor en la consola. Usa un ciclo for para
realizar la tarea. */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario el ingreso de un número

let numero = parseInt(prompt("Ingrese un número: "));

for (let index = 0; index < numero; index++) {
  console.log(index + 1);
}
