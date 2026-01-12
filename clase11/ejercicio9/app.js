/* Ejercicio 9: Cuenta regresiva para el despegue
Consigna:
Crea un programa que simule la cuenta regresiva para el lanzamiento de un cohete. El
programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al final. Usa un ciclo for
para realizar la cuenta regresiva. */

for (let index = 10; index >= 0; index--) {
  if (index !== 0) {
    console.log(index);
  } else {
    console.log(index);
    console.log("!Despegue!");
  }
}
