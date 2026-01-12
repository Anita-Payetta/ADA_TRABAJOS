/* Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y
luego intercambiá sus valores. Muestra los valores antes y después del
intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una variable
temporal, aritmética o asignación simultánea), eres libre de elegir el que desees,
eso si, investiga sobre el que usarás.
 */

//Declaro dos variables con valores numéricos
let numero1 = 8;
let numero2 = 10;

let original1 = numero1;
let original2 = numero2;

numero1 = original2;
numero2 = original1;

console.log(
  `Los valor originales son: ${original1} y ${original2}. Luego del cambio los valores son: ${numero1} y ${numero2} `
);
