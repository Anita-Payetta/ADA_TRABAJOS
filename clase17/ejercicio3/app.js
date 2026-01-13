/* Ejercicio 3: Gestión Compleja de Arrays
A partir del siguiente array de productos, escriba la función ‘gestionarProductos’ que
realice las siguientes tareas:
1. Añada un nuevo producto al array.
2. Elimine el último producto del array.
3. Encuentre el índice de un producto específico. En este punto pueden usar forEach o
investigar el método “findIndex()”
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
/Array/findIndex
4. Verifique si existe un producto con precio mayor a 50. Para esto investigar el
método “.some()”
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Arr
ay/some
5. Devuelva una cadena de nombres de productos separados por comas
 */

const productos = [
  { nombre: "Laptop", precio: 1000 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 200 },
  { nombre: "Audífonos", precio: 75 },
];

function gestionarProductos(productos) {
  //Añada un nuevo producto al array.
  productos.push({ nombre: "cargador", precio: 80 });

  //Elimine el último producto del array.
  productos.pop();

  //Encuentre el índice de un producto específico.
  let nombresProductos = productos.map((producto) => producto.nombre);
  nombresProductos.findIndex((nombre) => nombre === "Mouse");

  //Verifique si existe un producto con precio mayor a 50.
  productos.some((producto) => producto.precio > 50);

  //Devuelva una cadena de nombres de productos separados por comas
  let separadosPorComa = nombresProductos.join();
  console.log(separadosPorComa);
}

gestionarProductos(productos);
