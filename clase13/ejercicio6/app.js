/* ⦁	Ejercicio 6: Convertir a minutos
Crea una función declarada llamada convertirHorasAMinutos que reciba un número de horas como parámetro y devuelva el total en minutos.
 */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito el ingreso de un las horas
let horas = parseInt(
  prompt("Ingrese la cantidad de horas que desea convertir a minutos: ")
);

function convertirHorasAMinutos(horas) {
  return horas * 60;
}

console.log(`${horas} hs es igual a ${convertirHorasAMinutos(horas)} minutos.`);
