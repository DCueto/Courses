// UNIENDO CADENAS DE TEXTO


const producto = 'Monitor 20 Pulgadas ';
const precio = '30 USD ';

// Método concat
console.log(producto.concat(precio));
console.log(producto.concat('En descuento'));

// Sumando strings
console.log(producto + 'con un precio de: ' + precio);

console.log('El producto ' + producto + 'tiene un precio de ' + precio);
console.log('El producto ' , producto , 'tiene un precio de ' , precio);

// Template Strings -> ECMAScript6
// Esta sintaxis es más legible y potente que la de suma de strings.
console.log(`El producto ${producto} tiene un precio de $ ${precio}`);