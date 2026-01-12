/* ⦁	Ejercicio 4: Número par o impar
Crea una función declarada llamada esPar que reciba un número y devuelva "Es par" si el número es par o "Es impar" si el número es impar. Usa una variable local para guardar el resultado.
 */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito el ingreso de un numero
let numero = parseInt(prompt("Ingrese un número: "));

function esPar(numero) {
  let verificadorPar = numero % 2;
  if (verificadorPar === 0) {
    return "es par";
  } else {
    return "es impar";
  }
}

console.log(`El número ingresado ${esPar(numero)}`);
