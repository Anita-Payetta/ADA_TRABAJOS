/* Ejercicio 9: Desafío extra! Orden, lugar y números
Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso, aplicamos lo
aprendido en semanas anteriores. Quiero que hagan lo mismo del ejercicio anterior (buscar
la posición de un número en un array), pero partiendo de esta lista:
Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor,
utilizando bubble sort. Luego, respondan las siguientes preguntas:
o ¿Cuál es la posición del número 12?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 22?
o ¿Cuál es la posición del número 100? */

let list = [12, 3, 5, 7, 1, 22, 47, 100];
let orederedList = list.sort((a, b) => a - b);
console.log(`Lista ordenada para hacer la búsqueda: ${orederedList}`);

function binarySearch(list, number) {
  let init = 0;
  let end = orederedList.length - 1;

  while (init <= end) {
    // Calcular el punto middle (evita desbordamiento con Math.floor)
    let middle = Math.floor((init + end) / 2);
    let middleValue = orederedList[middle];

    if (middleValue === number) {
      return middle; // ¡Elemento encontrado!
    } else if (middleValue < number) {
      // Si el number es mayor, buscar en la mitad derecha
      init = middle + 1;
    } else {
      // Si el number es menor, buscar en la mitad izquierda
      end = middle - 1;
    }
  }
  return -1; // Elemento no encontrado
}

console.log(binarySearch(list, 12));
console.log(binarySearch(list, 5));
console.log(binarySearch(list, 22));
console.log(binarySearch(list, 100));
