// STRING METHODS

const producto = 'Monitor 20 Pulgadas';
console.log(producto);

// REPLACE --- Sustituye un texto dentro de un string por otro texto
console.log(producto.replace('Pulgadas','"'));
console.log(producto.replace('Monitor','Monitor Curvo'));


// SLICE -- Corta un texto dentro de un string
// Corta un texto de la posición 0 a la 10
console.log(producto.slice(0, 10));

// Corta un texto de la posición 8 hasta el final del string
console.log(producto.slice(8));

// Si cortamos de un mayor a menor posición, el método no va a hacer nada.
console.log(producto.slice(2, 1));


// ALTERNATIVA A SLICE
console.log(producto.substring(0, 10));

// Con substring si que puedes cortar carácteres al revés
console.log(producto.substring(2, 1));


const usuario = "Dani";

// Conseguir la primera inicial de un nombre de usuario
console.log(usuario.substring(0, 1));

// Método espécifico para seleccionar solo un carácter de la cadena de texto
console.log(usuario.charAt(0));