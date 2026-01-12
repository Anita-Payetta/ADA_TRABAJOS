/* Desglosando el ejercicio deberás:
1. Crea una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA,
a las cuales les asignarás los valores numéricos 18 y 99 respectivamente.
2. Pide al usuario que ingrese su edad.
3. Usa “parseInt” para convertir la entrada del usuario a un número entero.
4. Valida si la edad ingresada está dentro del rango permitido y muestra un
mensaje adecuado */

const prompt = require("prompt-sync")({ sigint: true });

//Creo las variables EDAD_MINIMA y EDAD_MAXIMA

let EDAD_MINIMA = 18;
let EDAD_MAXIMA = 99;

//Solicito al usuario que ingrese su edad
let edad = parseInt(prompt("Ingrese su edad: "));

//Evalúo si la edad está dentro del rango

if (edad >= 18 && edad <= 99) {
  console.log("Tu edad está dentro del rango permitido");
} else {
  console.log("Eres muy jóven o muy viejo para lo que esperábamos");
}
