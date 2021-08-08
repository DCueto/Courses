// Array Method: .findIndex
// Si quieres saber el índice de un valor en un array podemos usar .findIndex

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Forma con forEach
meses.forEach((mes, index) => {
  if (mes === 'Abril'){
    console.log(`${mes} se encuentra en el índice ${index}`);
  }
});

// Forma con .findIndex
// Se le pasa como argumento una función que retorna un valor
const indice = meses.findIndex( mes => mes === 'Enero');
console.log(indice);

// si .findIndex no encuentra ningún valor, entonces devolverá -1
const indice2 = meses.findIndex(mes => mes === 'Diciembre');
console.log(indice2);

// Para comprobar si un elemento existe en el arreglo, podemos comprobar que el índice obtenido sea
// mayor a -1. Si es mayor, indicará que ese elemento existe en el arreglo.
if (indice >= 0) {
  console.log('EXISTE');
}


// Encontrar un índice en un array de objetos
// Si tenemos dos indices con el mismo valor, solo va a coger el primer índice. 
// Estos array methods funcionan como iteradores y recorren ese array en orden.
const indice3 = carrito.findIndex( producto => producto.precio === 100);
console.log(indice3);