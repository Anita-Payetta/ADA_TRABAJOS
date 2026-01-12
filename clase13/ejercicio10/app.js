/* ⦁	Ejercicio 10: Factorial de un número (Ejercicio entrevista)
Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.
Fórmula del factorial: n! = n.(n-1).(n-2)...3.2.1 */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito el ingreso de un numero mayor que 1
let numero = parseInt(prompt("Ingrese un número mayor que 1: "));

let factorial = function (numero) {
  let factorial = 1;
  for (let index = 1; index <= numero; index++) {
    factorial = factorial * index;
  }
  return factorial;
};

console.log(`El resultado de ${numero}! es: ${factorial(numero)}`);
