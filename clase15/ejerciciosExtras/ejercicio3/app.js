/* ⦁	Simulador de una cola de atención al cliente
Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno. Tienes una lista inicial de clientes en espera y un bucle que los atiende de a uno. Realiza lo siguiente:
⦁	Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
⦁	Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.
⦁	Al final, muestra cuántos clientes fueron atendidos en total.
Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].
 */

let clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];

let atenderClientes = (clientes) => {
  let contador = 0;
  if (clientes.includes("VIP")) {
    console.log(
      `En la posición ${clientes.indexOf("VIP") + 1} hay un cliente VIP`
    );
  }
  while (clientes.length > 0) {
    console.log(`Fue atendido el cliente ${clientes.shift()}`);

    contador += 1;
  }

  console.log(`Fueron atendidos ${contador} clientes en el local.`);
};

atenderClientes(clientes);
