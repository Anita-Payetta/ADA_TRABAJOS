/* Ejercicio 3: Suma de dos números ingresados por el usuario
Enunciado:
Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores
aritméticos. Escribe un programa que:
1. Pida al usuario que ingrese dos números.
2. Sume ambos números.
3. Muestre el resultado de la suma.
Requisitos:
● Utiliza prompt() para recibir los números.
● Utiliza parseFloat() para convertir las entradas a números.
● Almacena los resultados en variables adecuadas y muestra el resultado. */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito al usuario que ingrese un número cualquiera
let numero1 = parseFloat(prompt("Ingrese un número: "));

//Solicito al usuario que ingrese un segundo número
let numero2 = parseFloat(prompt("Ingrese otro número: "));

//Calculamos la suma de los números ingresados
let suma = numero1 + numero2;

//Mostramos el resultado en la terminal
console.log(`La suma de los números ingresados es : ${suma}`);
