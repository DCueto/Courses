"use strict";

// Sellar un objeto

const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
}
console.table(producto);

// Con el object method de seal, podremos sellar un objeto para que no se pueda eliminar ni agregar datos
// pero, a diferencia de freeze, seal SÍ nos permite modificar el objeto
Object.seal(producto);

// Para saber si un objeto está sellado usaremos el método isSealed:
console.log("¿El objeto está sellado?: " + Object.isSealed(producto));

// Podemos modificar datos

producto.disponible = false;

console.table(producto);

// pero, si intentamos agregar o eliminar datos del objeto nos salta un error en consola
producto.imagen2 = "imagen2.jpg";
delete producto.imagen;
