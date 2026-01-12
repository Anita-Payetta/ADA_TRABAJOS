/* ⦁	Ejercicio 3: Mensaje global y local
Declara una variable global llamada saludoGlobal con el valor "Hola desde el scope global". Luego, crea una función llamada mostrarMensaje que declare una variable local llamada saludoLocal con el valor "Hola desde el scope local" y que imprima ambos mensajes.
 */

//Declaración de varable global

let saludoGlobal = "Hola desde el scope global. ";

function mostrarMensaje(saludoGlobal) {
  let saludoLocal = "Hola desde el scope local";
  return saludoGlobal + saludoLocal;
}

console.log(mostrarMensaje(saludoGlobal));
