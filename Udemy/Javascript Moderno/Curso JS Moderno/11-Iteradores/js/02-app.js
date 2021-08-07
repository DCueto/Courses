// For Loop
// break | continue

// Con la palabra clave "break" podemos detener un for loop en el punto que necesitemos
console.log('Loop con break');
for (let i = 0; i <= 10; i++){
  if(i === 5){
    console.log('Este es el número 5');
    break;
  }
  console.log(`Número: ${i}`);
}

// Con la palabra clave "continue", podemos obviar el código siguiente a continue en esa iteración
// en la que se ejecuta el continue, pero el for loop sigue ejecutándose con normalidad.
console.log('Loop con continue');
for (let i = 0; i <= 10; i++){
  if(i === 5){
    console.log('CINCO');
    continue;
  }
  console.log(`Número: ${i}`);
}

// RECORRER UN ARRAY CON UN CONTINUE

const carrito = [
  { nombre: 'Monitor 20 Pulgadas', precio: 500},
  { nombre: 'Televisión 50 Pulgadas', precio: 700},
  { nombre: 'Tablet', precio: 300, descuento: true},
  { nombre: 'Audifonos', precio: 200},
  { nombre: 'Teclado', precio: 50},
  { nombre: 'Celular', precio: 500},
]

for(let i=0; i< carrito.length; i++){
  if (carrito[i].descuento){
    console.log(`El producto ${carrito[i].nombre.toUpperCase()} tiene un descuento aplicado`);
    continue;
  }
  console.log(carrito[i].nombre);
}

