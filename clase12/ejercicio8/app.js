/* Ejercicio 8: Rojo y Verde
Para este ejercicio vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único. Rojo: 505
Verde 505
IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el método
“push” en los Arrays. ¡Este método lo veremos en las próximas clases, pero si
desean pueden investigarlo para resolver este desafío! */

let matriz = [];
let array = [];
let contador = 1;

for (let index = 0; index < 10; index++) {
  for (let subIndex = 0; subIndex < 10; subIndex++) {
    array.push(contador);
    contador = contador + 1;
  }

  matriz.push(array);
  array = [];
}

function diagonalRoja(matrizInterna) {
  let sumaRoja = 0;
  for (let index = 0; index < matrizInterna.length; index++) {
    for (let subIndex = 0; subIndex < matrizInterna[index].length; subIndex++) {
      if (index === subIndex) {
        sumaRoja = sumaRoja + matrizInterna[index][subIndex];
      }
    }
  }
  return sumaRoja;
}

function diagonalVerde(matrizInterna) {
  let sumaVerde = 0;
  for (let index = 0; index < matrizInterna.length; index++) {
    for (let subIndex = 0; subIndex < matrizInterna[index].length; subIndex++) {
      let sumaIndices = index + subIndex;
      if (sumaIndices === matrizInterna.length - 1) {
        sumaVerde = sumaVerde + matrizInterna[index][subIndex];
      }
    }
  }
  return sumaVerde;
}

console.log(matriz);
console.log(
  `El resultado de la suma de la diagonal principal (Roja) es: ${diagonalRoja(
    matriz
  )} y el de la diagonal secundaria (Verde) es: ${diagonalVerde(matriz)}`
);
