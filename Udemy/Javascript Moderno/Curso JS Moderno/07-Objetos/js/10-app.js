// Copiar / Unir dos objetos

const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
}

const medidas = {
  peso: '1kg',
  medida: '1m',
}

console.table(producto);
console.table(medidas);

// Forma más arcáica de unir 2 objetos
const resultado = Object.assign(producto, medidas);

// Spread Operator o Rest Operator --> 
// Copia exactamente igual al Object.assign los dos objetos
// Esta es la forma más usada
const resultado2 = {...producto, ...medidas};

console.table(resultado);
console.table(resultado2);