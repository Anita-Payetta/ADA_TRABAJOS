/* ⦁	Ejercicio 9: Última aparición de un modelo de auto
En este ejercicio, trabajaremos con una lista de modelos de autos. Implementa una función llamada ultimaAparicionModeloAuto(modelo) que encuentre y muestre la última posición en la lista donde aparece el modelo específico de auto dado por modelo.
Datos Iniciales:
⦁	Utiliza un array llamado modelosAutos que contiene varios modelos de autos, algunos repetidos para demostrar la funcionalidad.
Funcionalidad:
⦁	Implementa la función ultimaAparicionModeloAuto(modelo), que toma modelo como parámetro (un string).
⦁	Debes recorrer el array de manera manual para encontrar la última aparición del modelo.
⦁	Si el modelo se encuentra en el array, la función debe imprimir por consola la posición (índice + 1) en la que aparece (considerando que la numeración es de 1 a N).
⦁	Si el modelo no está en el array, debe imprimir un mensaje indicando que el modelo no está presente.
 */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito el ingreso del nombre del modelo
let modelo = prompt("Ingrese el nombre del modelo que desea buscar: ");

let modelosAutos = [
  "Polo",
  "Tera",
  "Nivus",
  "Amarok",
  "Virtus",
  "Polo",
  "Tiguan",
  "Vento",
  "Tera",
  "Saveiro",
  "Saveiro",
];

let ultimaAparicionModeloAuto = (modelo) => {
  let estaEnLIsta = "No está en la lista";
  for (let index = modelosAutos.length; index > 0; index--) {
    if (modelo === modelosAutos[index]) {
      estaEnLIsta = `Está en la lista en la posición ${index + 1}`;
    }
  }
  console.log(estaEnLIsta);
};

ultimaAparicionModeloAuto(modelo);
