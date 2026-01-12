/* Ejercicio 7: Calculadora simple
Consigna:
Crea un programa que le pida al usuario dos números y una operación matemática a
realizar: suma, resta, multiplicación o división. Según la operación ingresada, el programa
deberá calcular y mostrar el resultado. Si el usuario ingresa una operación inválida, el
programa debe mostrar un mensaje de error. Usa switch para resolverlo.
 */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario que ingrese un número cualquiera
let numero1 = parseFloat(prompt("Ingrese un número: "));

//Solicito al usuario que ingrese un segundo número
let numero2 = parseFloat(prompt("Ingrese otro número: "));

//Solicito al usuario que ingrese el tipo de operación a realizar
let operando = prompt(
  "¿Qué tipo de operación quiere realizar: suma (S), resta (R), multiplicación (M) o división (D)? "
);

//Calculamos el resultado teniemdo en cuenta la operación y los números ingresados. Generamos variable calculo que guardará la operación a realizar
let resultado;
let calculo;

switch (operando) {
  case "S":
    resultado = numero1 + numero2;
    calculo = numero1 + " + " + numero2;
    console.log(`El resultado de ${calculo} es : ${resultado}`);
    break;
  case "R":
    resultado = numero1 - numero2;
    calculo = numero1 + " - " + numero2;
    console.log(`El resultado de ${calculo} es : ${resultado}`);
    break;
  case "M":
    resultado = numero1 * numero2;
    calculo = numero1 + " x " + numero2;
    console.log(`El resultado de ${calculo} es : ${resultado}`);
    break;
  case "D":
    resultado = numero1 / numero2;
    calculo = numero1 + " / " + numero2;
    console.log(`El resultado de ${calculo} es : ${resultado}`);
    break;
  default:
    console.log("Operador incorrecto");

    break;
}
