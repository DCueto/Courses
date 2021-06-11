"use strict";

//Congelar un objeto para que no se pueda modificar

const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
}
console.table(producto);

// Se modifica el objeto
producto.disponible = false;
producto.imagen = "imagen.jpg";

console.table(producto);

// Para congelar objetos tendremos que habilitar primero el modo estricto de JS ("use strict")

// con el modo estricto no podremos escribir código que se considere como "malas prácticas"
// y nos saltará un error en consola
// ej - declarar una variable sin definir de que tipo es:
// x = 20;

// Una vez habilitado el "use strict", tendremos acceso a ciertos object methods

// Con este método podremos congelar el objeto y no nos permitirá modificarlo
Object.freeze(producto);

// Para saber si un objeto está congelado:
console.log("¿El objeto está congelado?: " + Object.isFrozen(producto));

// Si intentamos modificar el objeto nos salta un error en consola
producto.disponible = true;
producto.imagen2 = "imagen2.jpg";
delete producto.imagen;

// No se puede agregar, modificar ni eliminar datos al objeto producto.