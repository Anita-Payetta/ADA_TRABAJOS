/* Ejercicio 10:
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana
correspondiente. Si el número no está dentro de ese rango, muestra un mensaje
de error. */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario que ingrese un número del 1 al 7
let numeroDia = parseFloat(prompt("Ingrese un número del 1 al 7: "));

//Realizo manejo de errores para numeros que no sean del 1 al 7 y luego analizo el día con switch
switch (numeroDia) {
  case 1:
    console.log("El día de la semana es domingo");
    break;
  case 2:
    console.log("El día de la semana es lunes");
    break;
  case 3:
    console.log("El día de la semana es martes");
    break;
  case 4:
    console.log("El día de la semana es miércoles");
    break;
  case 5:
    console.log("El día de la semana es jueves");
    break;
  case 6:
    console.log("El día de la semana es viernes");
    break;
  case 7:
    console.log("El día de la semana es sábado");
    break;
  default:
    console.log(
      "El dato ingresado no es un número o está fuera del rango solicitado"
    );
    break;
}
