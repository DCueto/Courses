
// Orden de operaciones
// Es el mismo que en las matemáticas de toda la vida

let resultado;

resultado = 20 + 30 * 2; // Se multiplica primero 2 * 30 y luego se suma a los 20.
resultado = (20 + 30) * 2; // Se suma primero 20 + 30 y, luego se multiplica por 2.

// 20% de descuento en tu carrito de compras
resultado = (20 + 30 + 40 + 50 + 60) * .2;

// Impuesto
resultado = (20 + 30) * 1.21; // Con el impuesto añadido al total

let carrito = (20 + 30 + 30);
let impuesto = carrito * .21 // Solo el impuesto valor del impuesto;
let total = carrito + impuesto;

console.log(`Tu carrito de compra sin impuestos es de ${carrito}€ 
\nEl impuesto añadido es de ${impuesto}€ 
\nEl valor total con impuestos añadidos es de ${total}`);

console.log(resultado);
