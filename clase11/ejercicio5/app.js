/* Ejercicio 5: Encuentra los números pares entre dos valores
Consigna:
Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa
debe mostrar todos los números pares que se encuentran entre esos dos valores,
incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre el
inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un
mensaje indicando que los valores son inválidos */

//Le pido al usuario dos números enteros (inicio y fin)

const prompt = require("prompt-sync")({ sigint: true });

let inicio = parseInt(prompt("Ingreso un número entero: "));
let fin = parseInt(prompt("Ingreso otro número entero mayor al anterior: "));

if (inicio > fin) {
  console.log(
    "El segundo número es mayor que el primero. Vuelva a ingresar los números correctamente"
  );
} else {
  for (inicio; inicio <= fin; inicio++) {
    let par = inicio % 2;
    par === 0 ? console.log(inicio) : "";
  }
}
