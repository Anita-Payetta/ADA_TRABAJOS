/* Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays
Crea un objeto literal que represente un estudiante. El mismo debe tener las siguientes
propiedades: nombre, edad y un array de notas (con 5 notas).
Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las
siguientes tareas:
1. Agregar una nueva nota al array de notas.
2. Eliminar la primera nota del array.
3. Calcular el promedio de las notas restantes.
4. Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el
método “toUpperCase()”
https://www.w3schools.com/jsref/jsref_touppercase.asp
5. Devuelver un objeto con el nombre en mayúsculas y el promedio de las notas */

let estudiante = {
  nombre: "Anabella",
  edad: 43,
  notas: [9, 10, 8, 4, 10],
};

let procesarEstudiante = (estudiante) => {
  estudiante.notas.push(8);
  estudiante.notas.shift();

  let promedio =
    estudiante.notas.reduce(function (acum, nota) {
      return acum + nota;
    }, 0) / estudiante.notas.length;

  let nombreEnMayusculas = estudiante.nombre.toUpperCase();

  let estudianteProcesado = {
    nombre: nombreEnMayusculas,
    promedio: promedio,
  };

  return estudianteProcesado;
};

console.log(procesarEstudiante(estudiante));
