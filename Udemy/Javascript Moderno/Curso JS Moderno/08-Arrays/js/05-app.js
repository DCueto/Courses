// // AÑADIR ELEMENTOS DE FORMA IMPERATIVA, MODIFICANDO EL ARRAY MISMO


// const meses = ['Enero', 'Febrero', 'Marzo'];

// // El problema de añadir nuevos elementos a un array de esta forma es que
// // ya tienes que saber cual es la posición del array y agregarla
// // por ende, ya no es tan dinámico y es todo más manual
// meses[3] = 'Abril';

// console.table(meses);

// // Agregar al final del arreglo con el método push()
// // Esto es mucho más dinámico
// meses.push('Mayo');
// meses.push('Junio');

// console.table(meses);


// VAMOS A HACER UN CARRITO DE COMPRAS

// El carrito está vacío.
const carrito = [];

// Definimos los productos
const producto = {
  nombre: "Monitor 32 pulgadas",
  precio: 400,
}

const producto2 = {
  nombre: "Smartphone",
  precio: 800,
}

const producto3 = {
  nombre: "Teclado",
  precio: 50,
}

// Con el push añadimos estos objetos al array (carrito de compra)
carrito.push(producto);
carrito.push(producto2);

console.table(carrito);

// Si queremos añadir un producto al principio del array, podemos usar el método
// .unshift(). Esto nos pondrá el producto3 como el primer item del carrito
carrito.unshift(producto3);

console.table(carrito);