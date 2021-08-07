// ITERADORES EN JAVASCRIPT
// For Loop

// Bucle que se ejecuta hasta que se cumple la condición
// SINTAXIS: (inicialización; condición; progresión de cada iteración)
for (let i = 0; i <= 10; i++){
  console.log(`Número: ${i}`);
}

// Pregunta de entrevista:
// En un For Loop. ¿Cómo identificas los números pares de los impares?
for(let i = 1; i<=20; i++){
  // Respuesta: Utilizando un if y sacándo el residuo con el módulo entre 2
  if(i % 2 === 0){
    console.log(`${i} es un número PAR`);
  } else{
    console.log(`${i} es un número IMPAR`)
  }
}


// Los for loops son muy prácticos con arrays

const carrito = [
  { nombre: 'Monitor 20 Pulgadas', precio: 500},
  { nombre: 'Televisión 50 Pulgadas', precio: 700},
  { nombre: 'Tablet ', precio: 300},
  { nombre: 'Audifonos', precio: 200},
  { nombre: 'Teclado', precio: 50},
  { nombre: 'Celular', precio: 500},
]


for (let i = 0; i < carrito.length; i++){
  console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}€`);
}


