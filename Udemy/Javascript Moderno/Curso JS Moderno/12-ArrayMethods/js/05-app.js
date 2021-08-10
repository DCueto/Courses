// Array Method: .find
// .find nos crea un nuevo elemento basado en la condición que estamos revisando.
// .find solo nos va a retornar el primer elemento que cumpla la condición, a diferencia de
// .filter que retorna un arreglo con todos los elementos con esa condición.

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 100 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]



// con un forEach
let resultado;
carrito.forEach( (producto, index) => {
  if(producto.nombre === 'Tablet'){
    resultado = carrito[index];
  }
});

console.log(resultado);


// con un forEach simplificado
let resultado_simple;
carrito.forEach( producto => producto.nombre === 'Teclado' ? resultado_simple = producto : null);
console.log(resultado_simple);


// con un .find
let resultado2 = carrito.find( producto => producto.nombre === 'Tablet' );
console.log(resultado2);