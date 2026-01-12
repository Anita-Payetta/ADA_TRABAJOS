/* ⦁	Ejercicio 7: Libros
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
⦁	título: una cadena con el título del libro.
⦁	autor: una cadena con el nombre del autor del libro.
⦁	anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro y muestre por consola la información de cada libro en el formato especificado.
 */

let libro1 = {
  titulo: "Cien años de soledad",
  autor: "Gabriel Garcia Márquez",
  anioPublicacion: 1967,
};

let libro2 = {
  titulo: "Las viudas de los jueves",
  autor: "Claudia Piñeiro",
  anioPublicacion: 2005,
};

let arregloLibros = [libro1, libro2];

let mostrarLibro = (arregloLibros) => {
  for (let index = 0; index < arregloLibros.length; index++) {
    console.log(
      `El libro: "${arregloLibros[index].titulo}" es del autor ${arregloLibros[index].autor} y su año de publicación es ${arregloLibros[index].anioPublicacion}`
    );
  }
};

mostrarLibro(arregloLibros);
