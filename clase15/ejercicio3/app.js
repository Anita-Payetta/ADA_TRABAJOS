/* ⦁	Ejercicio 3: Agregar y eliminar a la fila de mascotas
Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", "Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el "Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la fila y muéstrala. Finalmente, muestra la lista actualizada.
 */

let listaEspera = ["Perro", "Gato", "Conejo"];

console.log(listaEspera);

listaEspera.unshift("Hamster");

console.log(listaEspera);
console.log(listaEspera.shift());
console.log(listaEspera);
