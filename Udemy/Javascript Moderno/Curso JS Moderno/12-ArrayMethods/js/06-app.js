// Array Method: .every
// .every requiere que todos los elementos de un arreglo deben cumplir esa condición para devolver un
// true.
// Con que solo haya un elemento que no cumpla con la condición, every nos retornará un false.

const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 100 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]

// con un forEach
let resultado3;
let counter = 0;
carrito.forEach( producto => {
  if(producto.precio < 1000){
    ++counter;
  }
});
if(counter === carrito.length){ 
  resultado3 = true;
  console.log(`Todos son iguales`); 
} else{
  resultado3 = false;
  console.log(`Todos no son iguales`)
}


// con .every

const resultado = carrito.every( producto => producto.precio < 1000);
console.log(resultado);

// claramente es mucho menos código con .every

// Si lo que quieres es que solo uno cumpla la condición tienes el .some
const resultado2 = carrito.some( producto => producto.precio < 200);
console.log(resultado2);