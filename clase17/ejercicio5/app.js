/* Ejercicio 5: Manipulación de Arrays y Cadenas
A partir del siguiente array de frases, escribe la función “procesarFrases” que realice las
siguientes tareas:
1. Convierta cada frase a minúsculas. Investigar el método “.toLowerCase()” para este
punto.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
/String/toLowerCase
2. Divida cada frase en palabras.
3. Reemplace las palabras "malo" por "bueno".
4. Combine las palabras de cada frase en una nueva cadena separada por espacios.
5. Devuelva un nuevo array con las frases modificadas. */

let frases = [
  "EL clima es MALO hoy",
  "Este libro es muy MALO",
  "El servicio aquí es MALO",
];

let procesarFrases = (frases) => {
  //Convierta cada frase a minúsculas.
  let frasesEnMinusculas = frases.map((frase) => frase.toLowerCase());

  //Divida cada frase en palabras.
  let frasesEnPalabras = frasesEnMinusculas.map((frase) => frase.split(" "));

  //Reemplace las palabras "malo" por "bueno"
  let reemplazoDePalabras = frasesEnPalabras.map((arrayDePalabras) =>
    arrayDePalabras.map((palabra) => palabra.replace(/malo/g, "bueno"))
  );

  //Combine las palabras de cada frase en una nueva cadena separada por espacios.
  let combinarPalabras = reemplazoDePalabras.map((arrayDePalabras) =>
    arrayDePalabras.join(" ")
  );

  //Devuelva un nuevo array con las frases modificadas.
  return combinarPalabras;
};

console.log(procesarFrases(frases));
