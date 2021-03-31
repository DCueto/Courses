// COMPARAR Null y undefined

// Undefined
let numero;
console.log(numero); //Devuelve undefined: La variable está definida pero el valor no.

console.log(typeof numero); //typeof de undefined

// Null
let numero2 = null;
console.log(numero2); //Devuelve null
console.log(typeof numero2); //Devuelve object
// esto pasa porque ecmascript dice que los null son de tipo objeto

console.log(numero == numero2); //Devuelve true a pesar de que uno es undefined y otro null
// Para evitar este tipo de cosas mejor siempre usar el comparador estricto
console.log(numero === numero2); //Devuelve false
