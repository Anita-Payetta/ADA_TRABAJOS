/* Ejercicio 10 - Cálculo de Descuento: Escribe un programa que calcule el precio
final de un producto después de aplicar un descuento. Pide al usuario que ingrese
el precio original y el porcentaje de descuento, y muestra el precio final. */

//Pide al usuario que ingrese el precio original y el porcentaje de descuento

const prompt = require("prompt-sync")({ sigint: true });

let precioOriginal = parseFloat(prompt("Ingrese el valor del producto: "));
let porcentajeDescuento = parseFloat(
  prompt("Ingrese el porcentaje de descuento a aplicar: ")
);

//Calculo el monto de descuento y el precio final

let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
let precioFinal = precioOriginal - montoDescuento;

//muestro el precio final en pantalla

console.log(`El precio final es: ${precioFinal}`);
