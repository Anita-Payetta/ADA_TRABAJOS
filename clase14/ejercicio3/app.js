/* ⦁	Ejercicio 3: Clasificación de edades
Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor */

const prompt = require("prompt-sync")({ sigint: true });

//Solicito el ingreso de un la edad
let edad = parseInt(prompt("Ingrese un número: "));

let clasificacionEdad = (edad) => {
  if (edad < 0 || isNaN(edad)) {
    console.log("Edad mal ingresada");
  } else {
    if (edad >= 0 && edad < 12) {
      console.log("Eres un/a niño/a");
    } else {
      if (edad >= 12 && edad < 26) {
        console.log("Eres adolescente");
      } else {
        if (edad >= 26 && edad < 66) {
          console.log("Eres adulto/a");
        } else {
          console.log("Eres adulto/a mayor");
        }
      }
    }
  }
};

clasificacionEdad(edad);
