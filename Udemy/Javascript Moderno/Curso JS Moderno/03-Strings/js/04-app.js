const producto = '       Monitor 20 Pulgadas       ';

console.log(producto);
console.log(producto.length);


// Eliminar espacios del inicio de la cadena de texto
console.log(producto.trimStart());

// Eliminar espacios del final de la cadena de texto
console.log(producto.trimEnd());

// Eliminar espacios al inicio y final de la cadena de texto
// concatenando métodos
console.log(producto.trimStart().trimEnd());

// Eliminar espacios al inicio y al final con un solo método
console.log(producto.trim());