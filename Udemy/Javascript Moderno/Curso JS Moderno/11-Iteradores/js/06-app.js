// forEach
// Método para recorrer todos los items de un array. Más simple y cómodo que realizar un for loop.


const toDo = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// A forEach le pasamos una función con lo que ejecutar en cada iteración. Usamos arrow function para simplificar.
// Le pasamos a la función como argumento el item del array de cada iteración
toDo.forEach( (item, indice)=>{
  console.log(`${indice} : ${item}`);
});


const carrito = [
  { nombre: 'Monitor 20 Pulgadas', precio: 500},
  { nombre: 'Televisión 50 Pulgadas', precio: 700},
  { nombre: 'Tablet', precio: 300},
  { nombre: 'Audifonos', precio: 200},
  { nombre: 'Teclado', precio: 50},
  { nombre: 'Celular', precio: 500},
]
// forEach con arrow function en una sola linea
carrito.forEach( producto => console.log(producto.nombre));

// map
// Método para recorrer un array
// La diferencia es que .map() crea un arreglo nuevo y, forEach no. Por ende, podemos alojar ese nuevo arreglo
// en una variable para usarlo cuando queramos.
// La idea de .map es crear un nuevo array en base al array anterior sin tener que modificar el array original.
// En cambio, la idea de forEach, es simplemente recorrer el array y realizar las acciones que necesitemos.

const nuevo_carrito = carrito.map(producto => producto.nombre);
console.log(nuevo_carrito);



// Ejemplo práctico de .map() y .forEach();
// Tenemos un array original con el carrito de compra y queremos crear un nuevo array con los nombres
// de los items en mayúsculas y, añadir IVA a cada producto. Finalmente crear una variable con la suma
// total de todo el carrito.

const carrito_mayus = carrito.map(producto => {
  const iva = 21;
  const precio_iva = producto.precio * (iva / 100) + producto.precio;
  const item_carrito = {
    nombre: producto.nombre.toUpperCase(),
    precio: producto.precio,
    iva: iva,
    // Usamos el .toFixed() para indicar el num de decimales.
    // Cuidado que .toFixed() retorna un string, no un number.
    precio_final: precio_iva.toFixed(2),
  };
  return item_carrito;
});

console.table(carrito_mayus);

let total_carrito = 0;
carrito_mayus.forEach((item) => {
  // Convertimos el string precio final a número y lo sumamos a total_carrito
  const precio_final = parseFloat(item.precio_final);
  total_carrito += precio_final;
});

console.log(`El total del carrito es de: ${total_carrito.toFixed(2)}€`);