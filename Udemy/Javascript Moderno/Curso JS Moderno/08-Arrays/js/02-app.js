
const numeros = [10,20,30,40,50, [1,2,3]];
console.log(numeros);

let array = [1, 2, 3,[1, 2, 3]];
console.log(array[3][0]);
// Con console.table() podemos imprimir datos en forma de tabla en consola
console.table(numeros);

// Acceder al arreglo
// Accedemos a los elementos del array con corchetes indicando el index
console.log(numeros[2]);

// Index 0 == al primer item del arreglo
console.log(numeros[0]);

// Si intentas acceder a una posición del arreglo que no existe,
// nos va a devolver un undefined
console.log(numeros[20]);

// Para acceder a un elemento de un arreglo dentro de otro arreglo basicamente
// accedemos al arreglo y luego accedemos al elemento del arreglo de dentro

// Esto nos permite acceder al arreglo
console.log(numeros[5]);

// Esto nos permite acceder a los items del arreglo de dentro
console.log(numeros[5][0]);
