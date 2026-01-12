/* ⦁	Ejercicio 10: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Realiza las siguientes acciones:
⦁	Inicializa un array vacío para almacenar las flores favoritas.
⦁	Pregunta al usuario por sus tres flores favoritas utilizando prompt y agrega cada una al array manualmente (sin usar métodos como push).
⦁	Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente).
 */

let floresFavoritas = [];

const prompt = require("prompt-sync")({ sigint: true });

//	Solicita al usuario que ingrese el nombre de tres flores favoritas.

let florFavorita1 = prompt("Ingresa el nombre de tu flor favorita: ");

let florFavorita2 = prompt("Ingresa el nombre otra flor favorita: ");

let florFavorita3 = prompt("Ingresa el nombre tu última flor favorita: ");

floresFavoritas = [florFavorita1, florFavorita2, florFavorita3];

//Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.

let flor = prompt("Ingresa el nombre de una flor: ");

let buscarFlor = (flor) => {
  let contador = 0;
  let estaEnLIsta = "no es una de tus flores favoritas";
  for (let index = 0; index < floresFavoritas.length; index++) {
    if (flor === floresFavoritas[index]) {
      contador += 1;
      estaEnLIsta = "es una de tus flores favoritas";
    }
  }

  console.log(
    `La flor ${flor} ${estaEnLIsta} y aparece ${contador} veces en la lista.`
  );
};

buscarFlor(flor);
