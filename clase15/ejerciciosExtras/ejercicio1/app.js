/* ⦁	Gestión de inventario de una tienda
Eres encargado de una tienda y tienes un inventario inicial de productos. La lista de productos es:
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
Debes realizar las siguientes acciones:
⦁	Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
⦁	Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
⦁	Eliminar el primer producto del inventario.
⦁	Mostrar la lista actualizada de productos en una sola cadena, separados por comas.
 */

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];

//Agregar un nuevo producto "Impresora" al inventario
inventario.push("Impresora");

//Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado
let estaEnInventario = (articulo) => {
  inventario.includes(articulo)
    ? console.log(`${articulo} está incluído en el inventario`)
    : console.log(`${articulo} no está incluído en el inventario`);
};

estaEnInventario("Tablet");

//Eliminar el primer producto del inventario
inventario.shift();

//Mostrar la lista actualizada de productos en una sola cadena, separados por comas.
console.log(inventario.join());
