/* ⦁	Ejercicio 7: Verificar si una lista contiene un elemento
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si "Sushi" está en la lista y muestra un mensaje que confirme si está o no.
 */

let comidas = ["Pizza", "Hamburguesa", "Tacos"];

let estaEnElMenu = (comida) => {
  comidas.includes(comida)
    ? console.log(`${comida} está incluído en el menú`)
    : console.log(`${comida} no está incluído en el menú`);
};

estaEnElMenu("Sushi");
