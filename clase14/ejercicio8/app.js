/* ⦁	Ejercicio 8: Funcion backEnd()
Creá la función backEnd() que recibirá 2 números como parámetros. La función deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los siguientes criterios:
⦁	Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá mostrar el string “Back” en lugar del número.
⦁	Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá mostrar el string “End” en su lugar del número.
⦁	Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string “Back End” en lugar del número.
 */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito el ingreso de dos numeros menos o iguales a 100
let numero1 = parseInt(
  prompt("Ingrese un número menor o igual a 100 y mayor que 0: ")
);
let numero2 = parseInt(
  prompt("Ingrese otro número menor o igual a 100 y mayor que 0: ")
);

let backEnd = (numero1, numero2) => {
  let contador = 0;
  for (let index = 1; index <= 100; index++) {
    if (index % numero1 === 0 && index % numero2 === 0) {
      contador = "Back End";
    } else {
      if (index % numero1 === 0) {
        contador = "Back";
      } else {
        if (index % numero2 === 0) {
          contador = "End";
        } else {
          contador = index;
        }
      }
    }
    console.log(contador);
  }
};

backEnd(numero1, numero2);
