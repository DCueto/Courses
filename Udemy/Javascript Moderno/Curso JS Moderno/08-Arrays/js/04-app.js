
// Agregar nuevos elementos a un array

// Los array con const si se pueden modificar. BECAUSE JAVASCRIPT XD
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Esto sobrescribe el primer elemento del array
meses[0] = 'Nuevo Mes';

// Si añadimos un index que no existe, nos lo va a crear como un nuevo elemento del array
// con el index indicado y el valor asignado a ese index.
meses[6] = 'Último Mes';
console.log(meses);

meses[10] = 'Test Mes';
console.table(meses);

// Nos devuelve undefined a pesar de que en el arreglo se ha creado 11 elementos
// a partir del meses[10]
console.table(meses[8]);


