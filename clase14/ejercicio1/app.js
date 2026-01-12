/* ⦁	Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.
 */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito el ingreso del precio sin IVA de un producto
let precioSinIva = parseFloat(
  prompt("Ingrese el precio sin IVA del producto: ")
);

//Solicito el porcentaje de IVA a aplicar
let iva = parseFloat(
  prompt("Ingrese el porcentaje de IVA a aplicar en el producto: ")
);

//Función arrow para cálculo de precio con IVA
let precioConIva = (precioSinIva, iva) =>
  precioSinIva + (precioSinIva * iva) / 100;

console.log(`Precio final del producto: $${precioConIva(precioSinIva, iva)}`);
