/* Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén por
encima o sean iguales a 10, pero menores que 1000.
 */

let matriz = [
  [10, 3, 2, 1, 4, 7],
  [5, 5, 10, 100, 4],
  [5, 125, 10, 1020, 4],
  [5, 5, 5097, 100, 4],
];

let suma = 0;

for (let index = 0; index < matriz.length; index++) {
  for (let subIndex = 0; subIndex < matriz[0].length; subIndex++) {
    if (matriz[index][subIndex] >= 10 && matriz[index][subIndex] < 1000) {
      suma = suma + matriz[index][subIndex];
    }
  }
}

console.log(
  `La suma de los valores mayores o iguales a 10 y menores que 1000 dentro de la matriz es: ${suma}`
);
