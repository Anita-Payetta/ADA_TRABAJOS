/* Declaración de Variables:
1. Declara una variable llamada verdadero y asígnale un dato de tipo
booleano (true o false).
2. Declara una variable llamada texto y asígnale un string de tu
elección (puedes usar cualquier mensaje que prefieras).
3. Declara una variable llamada numero y asígnale un dato numérico
(puedes usar cualquier número entero o decimal).
4. Declara una variable llamada nada y asígnale un valor que
represente la ausencia de valor en JavaScript.
Operaciones y Validaciones:
1. Realiza una operación matemática usando la variable número, por
ejemplo, suma o resta con otro número de tu elección.
2. Concatena el “string” de la variable texto con otro mensaje adicional.
3. Verifica si la variable “verdadero” es true o false y muestra un
mensaje diferente según el resultado.
4. Implementa una condición para verificar si la variable nada es null y
muestra un mensaje si es así. */

//Declaro variable verdadero y le asigno valor true

let verdadero = true;

//Declaro variable texto y le asigno un string

let texto = "Hola";

//Declaro variable número y le asigno dato numérico

let numero = 128;

// Declaro variable llamada nada y le asigno un valor de ausencia de valor

let nada = null;

//Operaciones

//Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu elección.

let suma = 1 + numero;
console.log(suma);

//Concatena el “string” de la variable texto con otro mensaje adicional.

let concatenar = texto + " mundo!";
console.log(concatenar);

//Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado.

if (verdadero) {
  console.log("Tu variable es valor TRUE");
} else {
  console.log("Tu variable es FALSE");
}

//Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así.

if (nada === null) {
  console.log("Tu variable es null");
} else {
  console.log("Tu variable no es null");
}
