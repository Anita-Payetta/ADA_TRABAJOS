/* ⦁	Ejercicio 5: Verificar origen del auto
Solicita al usuario ingresar la marca de un auto y utiliza una función flecha para verificar y mostrar si el auto es de origen nacional o importado. Considera que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen nacional. */

const prompt = require("prompt-sync")({ sigint: true });

//	Solicita al usuario que ingrese la marca de un auto.

let marcaAuto = prompt("Ingrese la marca de auto: ");

//	Utiliza una función flecha para determinar si la marca ingresada corresponde a un auto de origen nacional o importado.

let origenAuto = (marcaAuto) => {
  let origen;
  switch (marcaAuto) {
    case "Chevrolet":
      origen = "nacional";

      break;
    case "Ford":
      origen = "nacional";
      break;
    case "Fiat":
      origen = "nacional";
      break;
    default:
      origen = "importado";
      break;
  }
  return origen;
};

console.log(
  `El auto de marca ${marcaAuto} es de origen ${origenAuto(marcaAuto)}`
);

//	Muestra un mensaje indicando si el auto es de origen nacional o importado, basado en la marca ingresada por el usuario.
