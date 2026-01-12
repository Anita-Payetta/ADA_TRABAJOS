///Escribe un programa que calcule el precio final de un producto después de aplicar un descuento.
// Pide al usuario que ingrese el precio original del producto y el porcentaje de descuento, y muestra el precio final.

//Llamo a la biblioteca prompt
//Esta línea de código en JavaScript utiliza la librería prompt-sync para permitir la entrada de texto por consola de manera síncrona, deteniendo la ejecución del programa hasta que el usuario escriba algo y presione "Enter". La variable prompt ahora es una función que muestra un mensaje al usuario y devuelve lo que éste escriba.
//const prompt = ...: Declara una constante llamada prompt que almacenará la función para solicitar entrada.
//require("prompt-sync"): Esto importa y carga el módulo prompt-sync, que proporciona la funcionalidad de "prompt". Es una forma común en Node.js de usar librerías externas.
//({ sigint: true }): Se pasan opciones al módulo. En este caso, sigint: true permite que la ejecución del programa se pueda detener presionando Ctrl+C (la señal SIGINT) y no interrumpa el programa al leer la entrada del usuario.

const prompt = require("prompt-sync")({ sigint: true });

//Pido al usuario que ingrese el precio original y lo guardo en una variable.
//Utilizo parseFloat para convertir los datos ingresados por el ususario en datos de tipo flotante.
let precioOriginal = parseFloat(
  prompt("Ingrese el precio original del producto: $")
);

//Pido al usuario que ingrese el porcentaje de descuento y lo guardo en una variable.
let porcentajeDescuento = parseFloat(
  prompt("Ingrese el porcentaje de descuento: ")
);

//Calculo el descuento y lo guardo en otra variable.
let descuento = (precioOriginal * porcentajeDescuento) / 100;

//Calculo el precio final y lo guardo en una variable.
let precioFinal = precioOriginal - descuento;

//Muestro al usuario el precio final.
console.log(`El precio final del producto es: $${precioFinal}`);
