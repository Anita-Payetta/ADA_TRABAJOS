/* Ejercicio 4:
Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si
el nombre ingresado es igual a tu nombre.
 */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario que ingrese un valor booleano T o F
let nombre = prompt("Ingrese su nombre: ");

//Verifico si el nombre ingresado es igual al mio.
let miNombre = "Anabella";

if (nombre === miNombre) {
  console.log("Tocaya!!! Nuestros nombres son iguales <3");
} else {
  console.log(
    "No tenemos el mismo nombre, zafamos de usar nuestros apellidos para nombrarnos!!!"
  );
}
