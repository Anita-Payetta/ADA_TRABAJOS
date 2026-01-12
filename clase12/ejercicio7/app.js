/* Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros números
enteros y positivos. Luego, escribe un algoritmo para sumar todos los números en
la matriz. */

let matriz = [
  [6, 6, 6, 6, 6],
  [5, 5, 5, 5, 5],
  [4, 4, 4, 4, 4],
  [3, 3, 3, 3, 3],
  [2, 2, 2, 2, 2],
];

let suma = 0;

for (let index = 0; index < matriz.length; index++) {
  for (let subIndex = 0; subIndex < matriz[0].length; subIndex++) {
    suma = suma + matriz[index][subIndex];
  }
}

console.log(`La suma de los elementos dentro de la matriz es: ${suma}`);
