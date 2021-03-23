
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

const producto4 = {
  nombre: "iPhone 12",
  precio: 850,
}

// Con el push añadimos estos objetos al array (carrito de compra)
carrito.push(producto);
carrito.push(producto2);

console.table(carrito);

// Si queremos añadir un producto al principio del array, podemos usar el método
// .unshift(). Esto nos pondrá el producto3 como el primer item del carrito
carrito.unshift(producto3);

console.table(carrito);


// ELIMINAR ÚLTIMO ELEMENTO DE UN ARRAY con .pop()
carrito.pop();
console.table(carrito);


// ELIMINAR DEL INICIO DEL ARRAY .shift()
carrito.shift();
console.table(carrito);


// VAMOS A VOLVER A AÑADIR LOS ELEMENTOS AL ARRAY
// para dejarlo tal y como estaba antes
carrito.push(producto2);
carrito.unshift(producto3);
carrito.push(producto4);

console.table(carrito);

// Vamos a eliminar un elemento de una posición concreta con .splice()
// con el método .splice() vamos a poder eliminar una cantidad de elementos
// que nosotros queramos

// Si añadimos (1, 1), solo eliminará el item con index 1
carrito.splice(1, 1);

console.table(carrito);


// Si añadimos (1, 2), eliminará el item con index 1 y el item con index 2
// También si le asignamos el splice a otra variable podremos guardar esos dos elementos
let items_cortados;
items_cortados = carrito.splice(1, 2);

console.table(carrito);


console.table(items_cortados);

