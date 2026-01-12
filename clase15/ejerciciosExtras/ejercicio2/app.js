/* ⦁	Clasificación de palabras según su longitud
Tienes una lista de palabras en una oración. Debes:
⦁	Dividir la oración en palabras individuales.
⦁	Clasificar las palabras en dos categorías:
⦁	Cortas (menos de 5 letras)
⦁	Largas (5 letras o más)
⦁	Mostrar ambas listas de palabras clasificadas.
⦁	La oración es: "JavaScript es un lenguaje poderoso y versátil". */

let oracion = "JavaScript es un lenguaje poderoso y versátil";

let palabras = oracion.split(" ");

/* Clasificar las palabras en dos categorías:
⦁	Cortas (menos de 5 letras)
⦁	Largas (5 letras o más)
⦁	Mostrar ambas listas de palabras clasificadas. */

let clasificarPalabras = (palabras) => {
  let palabrasCortas = [];
  let palabrasLargas = [];

  for (let index = 0; index < palabras.length; index++) {
    palabras[index].length < 5
      ? palabrasCortas.push(palabras[index])
      : palabrasLargas.push(palabras[index]);
  }
  console.log(`Palabras Cortas = ${palabrasCortas}`);
  console.log(`Palabras Largas = ${palabrasLargas}`);
};

clasificarPalabras(palabras);
