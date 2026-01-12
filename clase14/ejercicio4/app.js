/* ⦁	Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario. Usa una función flecha para calcular el total con descuento según la cantidad.
 */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito el ingreso de un la cantidad de productos comprados
let precioUnitario = parseFloat(prompt("Ingrese el precio unitario:  "));
let cantidad = parseInt(prompt("Cantidad de productos?: "));

let precioTotal = (precioUnitario, cantidad) => {
  let descuento = 0;
  switch (true) {
    case cantidad === 1:
      descuento = 0;
      break;
    case cantidad === 2:
      descuento = 10;
      break;
    case cantidad === 3:
      descuento = 15;
      break;
    case cantidad >= 4:
      descuento = 20;
      break;
    default:
      console.log("Cantidad mal ingresada");
      cantidad = 0;

      break;
  }

  return console.log(
    `Precio Total: $${precioUnitario * cantidad * (1 - descuento / 100)}`
  );
};

precioTotal(precioUnitario, cantidad);
