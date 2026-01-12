/* Ejercicio 4 - Calculadora Simple: 
Escribe un programa que pida al usuario dos números y una operación (suma, resta, multiplicación o división). Luego, realiza la operación indicada y muestra el resultado en la consola.
Pista: En este ejercicio utiliza if, else if y else. Tambien no olvides usar “let” para definir variables.
Pista 2: Investiga que es parseFloat, ya que este ejercicio lo necesitaras. */

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

if (operando == "S") {
  resultado = numero1 + numero2;
  calculo = numero1 + " + " + numero2;
} else if (operando == "R") {
  resultado = numero1 - numero2;
  calculo = numero1 + " - " + numero2;
} else if (operando == "M") {
  resultado = numero1 * numero2;
  calculo = numero1 + " x " + numero2;
} else if (operando == "D") {
  resultado = numero1 / numero2;
  calculo = numero1 + " / " + numero2;
} else {
  calculo = "Operador incorrecto";
}

//Mostramos el resultado en la terminal
console.log(`El resultado de ${calculo} es : ${resultado}`);
