/* Ejercicio 6: Autos y más autos…
Escribe una función "gestionarAutos" que realice las siguientes tareas con una lista predefinida
de marcas de autos:
let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";
1. Quite los espacios en blanco alrededor de cada marca.
2. Verifique si existe la marca "Tesla".
3. Reemplace todas las marcas "Ford" por "BMW".
4. Encuentre el índice de la marca "Chevrolet".
5. Devuelva una cadena de marcas en orden alfabético separadas por puntos. Utilizar “.sort()” */

let autos = "Toyota, Honda, Ford, Chevrolet, Nissan";

let gestionarAutos = (autos) => {
  //Quite los espacios en blanco alrededor de cada marca.

  //Transformo a array
  let arrayAutos = autos.split(",");
  let listaAutos = arrayAutos.map((auto) => auto.trim());
  console.log(listaAutos);

  //Verifique si existe la marca "Tesla".
  console.log(listaAutos.includes("Tesla"));

  //Reemplace todas las marcas "Ford" por "BMW".
  listaAutos = listaAutos.map((auto) => auto.replace(/Ford/g, "BMW"));
  console.log(listaAutos);

  //Encuentre el índice de la marca "Chevrolet".
  console.log(listaAutos.indexOf("Chevrolet"));

  //Devuelva una cadena de autos en orden alfabético separados por puntos
  console.log(listaAutos.sort().join("."));
};

gestionarAutos(autos);
