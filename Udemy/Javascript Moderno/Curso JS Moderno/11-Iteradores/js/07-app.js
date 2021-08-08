// Bucle for ...of
// Bucle for simplificado para iterar arrays. Parecido a forEach.

const toDo = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
  { nombre: 'Monitor 20 Pulgadas', precio: 500},
  { nombre: 'Televisión 50 Pulgadas', precio: 700},
  { nombre: 'Tablet', precio: 300},
  { nombre: 'Audifonos', precio: 200},
  { nombre: 'Teclado', precio: 50},
  { nombre: 'Celular', precio: 500},
]


for( let item of toDo ) {
  console.log(item);
}

for( let item of carrito){
  console.log(`${item.nombre} : ${item.precio}€`);
}