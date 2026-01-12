/* ⦁	Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista)
Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: la base y la altura de un triángulo. La función debe devolver el área del triángulo.
 */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito el ingreso de los valores de la base y la altura de un triángulo

let base = parseFloat(
  prompt("Ingrese el valor correspondiente a la base del triángulo: ")
);

let altura = parseFloat(
  prompt("Ingrese el valor correspondiente a la altura del triángulo: ")
);

function calcularAreaTriangulo(base, altura) {
  let areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}

console.log(
  `El área del triángulo de base ${base} y altura ${altura} es: ${calcularAreaTriangulo(
    base,
    altura
  )}`
);
