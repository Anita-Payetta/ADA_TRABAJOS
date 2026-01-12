/* Ejercicio 4: Ciclo For - Array
Crear un programa que permita registrar las notas de varios estudiantes usando
arrays y mostrarlas por pantalla: */

//1. Crear un array para almacenar las notas.
//2. Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
const prompt = require("prompt-sync")({ sigint: true });

let notas = [];

//3. Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
//4. Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones específicas del array notas.

console.log(
  "A continuación le pediremos que ingrese las notas de 6 estudiantes"
);

for (let index = 0; index < 6; index++) {
  let notaAlumno = parseFloat(prompt("Ingrese calificación: "));
  notas[index] = notaAlumno;
}

//5. Imprime en consola las notas ingresadas usando el array notas

console.log(`Las notas ingresadas son: ${notas}`);
