// Array Method: .filter
// .filter crea un nuevo arreglo basado en el parámetro que es evaluado
// con un .findIndex no podías coger más de 1 elemento con el mismo valor. Con .filter sí.

// con .filter se suelen realizar los buscadores y filtros de los sitios web

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 100 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

// Queremos traer todos los productos con un precio superior a 400

console.log('Con forEach');
// con un forEach
let mayores = [];
let mayores_declarativa = [];

carrito.forEach( producto => {
  if (producto.precio > 400){
    // podemos añadir esos productos con un .push, .unshift
    mayores.push(producto);
    // o con la forma declarativa
    mayores_declarativa = [...mayores_declarativa, producto];
  }
});
console.log(mayores);
console.log(mayores_declarativa);

// la forma simplificada de forEach
let mayores_simple = [];
carrito.forEach( producto => producto.precio > 400 ? mayores_simple.push(producto) : null);
console.log(mayores_simple);


// .FILTER()

console.log('Con .filter()');
// con un .filter
// le pasamos una función como argumento y en base a esa condición filtará los elementos del array
// y, nos devolverá un nuevo array con esa condición.
let resultado;
resultado = carrito.filter( producto => producto.precio > 400);
console.log(resultado);

// es mucho más sencillo que con un forEach

// Queremos todos los productos con un precio menor a 600
let resultado2;
resultado2 = carrito.filter( producto => producto.precio < 600);
console.log(resultado2);


// Coger todos los elementos menos los que tengan como nombre "Audifonos"
let resultado3;
resultado3 = carrito.filter( producto => producto.nombre !== 'Audifonos');
console.log(resultado3);

// Coger todos los elementos con nombre "Audifonos"
resultado3 = carrito.filter( producto => producto.nombre == 'Audifonos');
console.log(resultado3);