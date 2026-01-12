/* ⦁	Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito el ingreso de 5 calificaciones al usuario

let promedio = () => {
  let calificaciones = [];
  let sumaCalificaciones = 0;
  for (let index = 0; index < 5; index++) {
    let calificacion = parseFloat(prompt("Ingrese calificación: "));
    calificaciones.push(calificacion);
    sumaCalificaciones += calificacion;
  }
  return [calificaciones, sumaCalificaciones / 5];
};
let resultadoPromedio = promedio();
console.log(
  `Para las calificaciones ingresadas ${resultadoPromedio[0]} el promedio es: ${resultadoPromedio[1]}`
);
