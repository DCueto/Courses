// Métodos .map y .foreach utilizando Arrow Functions

const carrito = [
  { nombre: 'Monitor 20 Pulgadas', precio: 500},
  { nombre: 'Televisión 50 Pulgadas', precio: 700},
  { nombre: 'Tablet ', precio: 300},
  { nombre: 'Audifonos', precio: 200},
  { nombre: 'Teclado', precio: 50},
  { nombre: 'Celular', precio: 500},
]

// SIN Arrow Function
// const nuevoArray = carrito.map( function(producto) {
//   return  `Articulo: ${ producto.nombre } Precio: $ ${producto.precio} `;
//  });

// SIN Arrow Function
// carrito.forEach( function(producto) {
//   console.log(`Articulo: ${ producto.nombre } Precio: $ ${producto.precio} `);
// });

// CON Arrow Function
const nuevoArray = carrito.map( producto => `Artículo: ${ producto.nombre } Precio: $ ${producto.precio} `);
// CON Arrow Function
carrito.forEach( producto => console.log(`Articulo: ${ producto.nombre } Precio: $ ${producto.precio}`));


console.table(nuevoArray);


