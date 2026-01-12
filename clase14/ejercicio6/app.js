/* ⦁	Ejercicio 6: El deportista
Para este ejercicio deberán definir un objeto literal “deportista”, con los siguientes atributos: nombre, energía, experiencia.
Ademas queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser realizar una función “entrenarHoras.”
La función entrenarHoras tiene las siguientes tres características: */ //Resta a su energía (this.energia) la cantidad de horas x 5.
//Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
//Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.

const prompt = require("prompt-sync")({ sigint: true });

//Recibe por parámetro la cantidad de horas.

let horas = parseInt(prompt("Ingrese la cantidad de horas: "));

let deportista = {
  nombre: "Juan Curuchet",
  energia: 100,
  experiencia: 1,
  entrenarHoras: function (horas) {
    this.energia = this.energia - horas * 5;
    this.experiencia = this.experiencia + horas * 2;
    return `Después de ${horas} horas trabajadas la enegía de ${this.nombre} es ${this.energia} y la experiencia es ${this.experiencia}`;
  },
};

console.log(deportista.entrenarHoras(horas));
