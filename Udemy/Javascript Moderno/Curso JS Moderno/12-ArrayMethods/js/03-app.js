// Array Method: .reduce
// .reduce es una función reductora
// .reduce recoge una gran cantidad de datos y lo une para dar un resultado

//const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con un forEach

let total = 0;
carrito.forEach( producto => total += producto.precio);
console.log(total);

// con un .reduce

// se le pasa dos argumentos; una función con dos argumentos: el primero es el valor de la anterior iteración y, el segundo
// es el item actual 
// el segundo argumento es el valor inicial de esa acumulación.
// no hace falta hacer un total += total + producto.precio, porque el valor que retorna la función es esa suma
// y la almacena en total hasta finalizar todas las iteraciones.

let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);

// con .reduce hay que escribir algo más de código que con el forEach, pero tiene sus ventajas.
// principalmente que no requiere declarar nuevas variables.

