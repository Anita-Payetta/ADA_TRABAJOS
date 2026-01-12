//Consigna
//Crea un programa que simule un sistema de calificacion basado en la nota de un estudiante
//(un valor numero entre del 0 al 100). El programa debe determinar si el estudiante ha aprobado o no
//O ha obtenido una calificacion sobresaliente, segun las siguientes reglas:
//Si la nota es manor a 60, el estudiante a reprobado
//Si la nota es entre 60 y 89 (inclusive), el estudiante ha aprobado
//Si la nota es 90 o mayor, el estudiante ha obtenido una calificacion sobresaliente
// Usar el condicional if-else if-else para implementar la logica del programa

let nota;

nota = 100;

if (nota < 60) {
  console.log("Estudiante reprobado");
} else if (nota >= 60 && nota <= 89) {
  console.log("Estudiante aprobado");
} else {
  console.log("Calificación excelente!");
}
