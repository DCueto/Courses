
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses);
console.table(meses[1]);

// COMO RECORRER NUESTRO ARREGLO

// Cuanto mide el arreglo
console.log("Longitud del array: " + meses.length);

// Usamos el iterador/función for para recorrer todo el array
// con el i en meses[i] vamos a ejecutar de forma dinámica el arreglo
for(let i = 0; i < meses.length; i++){
  console.log(meses[i]);
}
