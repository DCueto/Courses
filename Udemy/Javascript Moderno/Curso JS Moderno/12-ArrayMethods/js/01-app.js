// Array Methods
// Hacen todo el trabajo pesado por ti. Evitan tener que utilizar iteradores y automatizan procesos.
// Es importante conocer como hacer todo con un iterador para entender correctamente el funcionamiento
// de los array methods.



const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// Comprobar si un arreglo contiene un valor en un item en concreto

// Forma "manual"
meses.forEach( mes => {
  if(mes === 'Enero') {
    console.log('Enero existe');
  }
});

// Con .includes
// .includes comprueba si existe un valor en un array y devuelve true o false.
// Includes solo sirve para arrays con solo un valor basado en el índice
// Como argumento se le pasa un valor
const resultado = meses.includes('Enero');
console.log(resultado);

// Con .some
// Para revisar si un valor existe en un array de objetos tenemos que usar otro array method.
// Como argumento se le pasa una función
// La función tiene que devolver un valor con un return.
const existe = carrito.some( producto => producto.nombre === 'Celular');
console.log(existe);

// Ejemplo de .some para revisar si un producto cuesta más de 600€
const alerta_precio = carrito.some( producto => {
  return producto.precio > 600;
});

console.log(alerta_precio ? 'Hay un producto en tu carrito con un valor superior a 600€' : 'Todo OK');


// Iterar un arreglo de índices con .some
// Para este caso concreto es más sencillo usar el .includes
const existe2 = meses.some(mes => mes === 'Febrero');
console.log(existe2);