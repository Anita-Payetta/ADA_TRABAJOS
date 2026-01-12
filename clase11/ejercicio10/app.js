/* Ejercicio 10: Adivina el número
Consigna:
Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego,
pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera
de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no
acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver
este ejercicio. */

const prompt = require("prompt-sync")({ sigint: true });

let random = 1 + Math.trunc(Math.random() * 10);

for (let index = 0; index < 3; index++) {
  let adivina = parseInt(
    prompt(
      "Ingrese un número entero del 1 al 10 para tratar de adivinar el que estoy pensando: "
    )
  );
  if (random !== adivina && index < 2) {
    console.log("Lo siento! Intenta de nuevo");
  } else if (random === adivina) {
    console.log(`Acertaste! El número era ${random}`);
    break;
  } else {
    console.log(
      `No pudiste adivinar :(. El número era el ${random}. Más suerte la próxima`
    );
  }
}
