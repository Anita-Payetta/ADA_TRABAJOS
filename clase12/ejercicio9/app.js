/* Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos. Cada
día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro
semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y
cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0,
día 1, columna 1, día 2, etcétera.*/

let gastosMes = [
  [1135, 2500, 900, 1600, 2800, 650, 1100],
  [1750, 1890, 1900, 1300, 898, 1750, 2800],
  [1700, 1150, 1690, 1900, 1770, 500, 2560],
  [800, 1250, 1430, 2100, 1980, 1270, 950],
];

const prompt = require("prompt-sync")({ sigint: true });

/* a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos
que cada fila representa una semana, es decir, si nos indican semana 2
tenemos que sumar la fila 1 de la matriz. Recordar que las matrices
comienzan siempre en posición 0. */

let semana =
  parseInt(
    prompt("Ingrese un número del 1 al 4 para saber los gastos de esa semana ")
  ) - 1;

let dia =
  parseInt(
    prompt("Ingrese un número del 1 al 7 para saber los gastos de ese dia ")
  ) - 1;

console.log(
  `El gasto realizado en la semana ${semana + 1} es de: $${gastoSemanal(
    gastosMes,
    semana
  )}`
);
console.log(
  `Los gastos del dia ${dia + 1} ascienden a: $${gastoDiaMes(gastosMes, dia)}`
);
console.log(
  `El total de gastos realizados en el mes es de: $${gastoMensual(gastosMes)}`
);
console.log(
  `La semana ${
    maxGastoSemana(gastosMes)[0]
  } fue la semana con más gastos. El total de los gastos fue de: $${
    maxGastoSemana(gastosMes)[1]
  }`
);
console.log(
  `El día ${maxGastoDiario(gastosMes)[0]} de la semana ${
    maxGastoDiario(gastosMes)[1]
  } fue el día con más gastos. El total de los gastos fue de: $${
    maxGastoDiario(gastosMes)[2]
  }`
);

function gastoSemanal(matriz, semana) {
  let sumaSemanal = 0;
  for (let index = 0; index < matriz[semana].length; index++) {
    sumaSemanal = sumaSemanal + matriz[semana][index];
  }
  return sumaSemanal;
}

/* b) La aplicación también tendrá una parte de estadísticas, para esto nos
solicitan dar el total de un día en particular, por ejemplo del día 3, acá
también tengamos en cuenta lo que ocurre con las filas, ya que las columnas
también comienzan en 0. */

function gastoDiaMes(matriz, dia) {
  let sumaDiaMes = 0;
  for (let index = 0; index < matriz.length; index++) {
    sumaDiaMes = sumaDiaMes + matriz[index][dia];
  }
  return sumaDiaMes;
}
/* c) Por último, es necesario tener el total de gastos realizados en el mes.
✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para
resolver este último punto? */
function gastoMensual(matriz) {
  let sumaMensual = 0;
  for (let index = 0; index < matriz.length; index++) {
    for (let subIndex = 0; subIndex < matriz[index].length; subIndex++) {
      sumaMensual = sumaMensual + matriz[index][subIndex];
    }
  }
  return sumaMensual;
}

/* d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día
que más gastos se realizaron.*/

function maxGastoSemana(matriz) {
  let maxSumaSemanal = gastoSemanal(matriz, 0);
  let maxSemanaGasto = 0;
  for (let index = 1; index < matriz.length; index++) {
    if (gastoSemanal(matriz, index) > maxSumaSemanal) {
      maxSumaSemanal = gastoSemanal(matriz, index);
      maxSemanaGasto = index + 1;
    }
  }
  return [maxSemanaGasto, maxSumaSemanal];
}

function maxGastoDiario(matriz) {
  let maxGastoDiario = 0;
  let maxDiaGasto = 0;
  let maxSemanaDiaGasto = 0;
  for (let index = 0; index < matriz.length; index++) {
    for (let subIndex = 0; subIndex < matriz[index].length; subIndex++) {
      if (maxGastoDiario < matriz[index][subIndex]) {
        maxGastoDiario = matriz[index][subIndex];
        maxDiaGasto = subIndex + 1;
        maxSemanaDiaGasto = index + 1;
      }
    }
  }
  return [maxDiaGasto, maxSemanaDiaGasto, maxGastoDiario];
}
