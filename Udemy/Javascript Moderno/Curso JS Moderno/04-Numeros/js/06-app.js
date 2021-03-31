// CONVERTIR STRINGS A NÚMEROS Y COMPROBAR

const numero1 = "20"; //String //Integer
const numero2 = "20.2"; //String //Float
const numero3 = "Uno"; //String
const numero4 = 20; //Number //Integer
const numero5 = 20.2 //Number //Float

//Comprobar el tipo de dato
console.log(typeof numero1); //string
console.log(typeof numero4); //number

console.log(numero1); // Imprime el string.

// CONVERSIÓN DE STRING A NUMBER

// Imprime la conversión de string a número entero,
// pero no reasigna la variable numero1 a un tipo número
console.log(Number.parseInt(numero1));

// Si intento utilizar el método parseInt a un string con un número
// decimal (float), nos lo va a convertir en un entero.
console.log(`Esta era la variable numero2 con un string de 20.2: ${Number.parseInt(numero2)}`);

// Para convertir un string a número decimal tendríamos que usar el método
// parseFloat.
console.log(Number.parseFloat(numero2));

// Si intentamos convertir la variable numero3 con el string "Uno", nos devolverá
// un NaN (Not a Number), por motivos obvios.
console.log(Number.parseInt(numero3));


// REVISAR SI UN NÚMERO ES ENTERO O NO
// el método .isInteger devuelve true o false
console.log(Number.isInteger(numero4));

// si utilizamos el método .isInteger en un float, nos va a devolver false
console.log(Number.isInteger(numero5));

// al igual que si lo hacemos con un string
console.log(Number.isInteger(numero3));