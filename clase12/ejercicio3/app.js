/* Ejercicio 3: Ciclo For
Nuestra tarea es contar la cantidad de números impares que hay desde el
número 0 hasta un número X (inclusive). Para esto, debes seguir los siguientes
pasos: */

const prompt = require("prompt-sync")({ sigint: true });

//1. Solicitar al usuario que ingrese un número X.

let numero = parseInt(prompt("Ingreso un número entero: "));

//2. Inicializar una variable para contar los números impares.

let contadorImpares = 0;

//3. Utilizar un ciclo for para recorrer los números desde 0 hasta X (inclusive).
//4. Dentro del ciclo, verificar si el número es impar.
//5. Si el número es impar, incrementar el contador de números impares.
//6. Al finalizar el ciclo, imprimir en consola la cantidad de números impares encontrados.

if (numero < 0 || isNaN(numero)) {
  console.log(
    "El valor ingresado es menor que cero o no es un número, realice de nuevo la acción"
  );
} else {
  for (let index = 0; index <= numero; index++) {
    let par = index % 2;
    if (par !== 0) {
      contadorImpares++;
    }
  }
  console.log(
    `La cantidad de números impares desde 0 hasta ${numero} (inclusive) es: ${contadorImpares}`
  );
}
