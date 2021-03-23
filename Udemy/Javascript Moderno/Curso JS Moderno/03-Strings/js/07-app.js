const producto = 'Monitor 20 Pulgadas';


// Convertir a mayúsculas una cadena de texto
console.log(producto.toUpperCase());


// Convertir a minúsculas una cadena de texto;
console.log(producto.toLowerCase());


// Ejemplo
// A veces la gente introduce mayúsuclas en el campo de mail y puede crear conflictos en la base de datos
// así que lo mejor es siempre convertir en minúsculas los correos.
const email = "CORREO@CORREO.COM";
const email2 = "Juan@correo.com";

console.log(email.toLowerCase());
console.log(email2.toLowerCase());


// Convertir un número a string
const precio = 300;
console.log(precio.toString());
