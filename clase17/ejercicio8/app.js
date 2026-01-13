/* Ejercicio 8: Lugar y números
Para practicar la implementación del algoritmo de búsqueda binaria, vamos a empezar con
un ejemplo simple. Quiero que se familiaricen con la sintaxis del mismo, por lo que no hare
énfasis en los datos, sino en la solución.
Dada la siguiente lista:
Utilizar el algoritmo de búsqueda binaria para responder los siguientes ítems:
o ¿Cuál es la posición del número 1?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 6?
o ¿Cuál es la posición del número 9?
o ¿Cuál es la posición del número 11?
Sabemos que responder estas preguntas es extremadamente fácil, ya que podemos leer el
array, y determinar con un cálculo visual la posición de cada elemento, pero, la propuesta
que les hago es que codeen un algoritmo de búsqueda binaria, que “busque” ese número,
por ejemplo, el 6, y nos indique por consola la posición del mismo.
El number de este ejercicio es que puedan practicar la sintaxis sin añadir complejidad extra. */

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function binarySearch(list, number) {
  let init = 0;
  let end = list.length - 1;

  while (init <= end) {
    // Calcular el punto middle (evita desbordamiento con Math.floor)
    let middle = Math.floor((init + end) / 2);
    let middleValue = list[middle];

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

console.log(binarySearch(list, 1));
console.log(binarySearch(list, 5));
console.log(binarySearch(list, 6));
console.log(binarySearch(list, 9));
console.log(binarySearch(list, 11));
