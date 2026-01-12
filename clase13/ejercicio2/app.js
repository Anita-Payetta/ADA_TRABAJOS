/* ⦁	Ejercicio 2: Número mayor (función expresada)
Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor.
 */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito el ingreso de los valores de dos números para comparar
let numero1 = parseFloat(prompt("Ingrese un número: "));

let numero2 = parseFloat(prompt("Ingrese otro número: "));

let encontrarMayor = function (numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else {
    return numero2;
  }
};

console.log(`El número ${encontrarMayor(numero1, numero2)} es mayor`);
