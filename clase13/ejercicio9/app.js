/* ⦁	Ejercicio 9: Contar hasta un número
Crea una función declarada llamada contarHasta que reciba un número y use un bucle para imprimir todos los números desde 1 hasta ese número.
 */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito el ingreso de un numero mayor que 1
let numero = parseInt(prompt("Ingrese un número mayor que 1: "));

function contarHasta(numero) {
  for (let index = 1; index <= numero; index++) {
    console.log(index);
  }
}

contarHasta(numero);
