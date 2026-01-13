/* Ejercicio 4: Transformación y Análisis de Cadenas
Pide al usuario que ingrese una lista de nombres separados por comas. Los nombres a
ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”, “Pablo” y “Pedro”.
Luego, escribe la función “transformarYAnalizarNombres”que realice las siguientes tareas:
1. Quite los espacios en blanco alrededor de cada nombre.
2. Verifique si existe el nombre "Juan".
3. Reemplace todos los nombres "María" por "Ana".
4. Encuentre el índice del nombre "Pedro".
5. Devuelva una cadena de nombres en orden alfabético separados por puntos.
Investigar el método “.sort()”
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
/Array/sort
 */

const prompt = require("prompt-sync")({ sigint: true });

//	Solicita al usuario que ingrese el nombre de tres flores favoritas.

let nombres = prompt("Ingresa una lista de nombres separados por coma: ");

let transformarYAnalizarNombres = (nombres) => {
  //Quite los espacios en blanco alrededor de cada nombre.

  //Transformo a array
  let arrayNombres = nombres.split(",");
  let listaNombres = arrayNombres.map((nombre) => nombre.trim());
  console.log(listaNombres);

  //Verifique si existe el nombre "Juan"
  console.log(listaNombres.includes("Juan"));

  //Reemplace todos los nombres "Maria" por "Ana"
  listaNombres = listaNombres.map((nombre) => nombre.replace(/Maria/g, "Ana"));
  console.log(listaNombres);

  //Encuentre el índice del nombre "Pedro"
  console.log(listaNombres.indexOf("Pedro"));

  //Devuelva una cadena de nombres en orden alfabético separados por puntos
  return listaNombres.sort().join(".");
};

console.log(transformarYAnalizarNombres(nombres));
