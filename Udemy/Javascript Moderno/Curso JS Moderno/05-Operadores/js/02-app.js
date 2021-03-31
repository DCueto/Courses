// Comparar 2 valores

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si 2 números son iguales ==

console.log(numero1 == numero3); // Devuelve false: 20 y 30 no son iguales
console.log(numero1 == numero2); // Devuelve true: "20" y 20 son iguales pero no son
// el mismo tipo de dato. Si queremos saber si son iguales en valor 
// y tipo hay que usar otro operador

// Comparador estricto
// === para comparar si el valor y el tipo de dato es el mismo

console.log(numero1 === numero2); // Devuelve false: ya que uno es un string y el otro es un number
console.log(numero1 === parseInt(numero2)); // Nos devuelve true

console.log(typeof numero1);
console.log(typeof numero2);

// Comparar si es DIFERENTE !=

const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); // True: password1 es diferente a password2
console.log(numero1 != numero2); //False: numero1 NO es diferente a numero2
// Comparador estricto diferente
console.log(numero1 !== numero2); //True: numero1 SI es diferente a numero2

