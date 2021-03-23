
// Incrementos y Decrementos numéricos

// INCREMENTOS
let puntaje = 5;

// Tipo incremento posterior

console.log(puntaje++); // Devuelve puntaje (5) y seguidamente lo incrementa +1
console.log(puntaje); // Devuelve puntaje (6)

// Tipo incremento anterior
console.log(++puntaje); // Incrementa +1 a puntaje y seguidamente lo devuelve/imprime puntaje (7).


// DECREMENTOS

// Tipo decremento posterior

let puntaje2 = 5;

console.log(puntaje2--); // Devuelve/Imprime 5 y luego resta
console.log(puntaje2);

// Tipo decremento anterior

console.log(--puntaje2); // Resta y luego devuelve/imprime puntaje2 (3)


// Incrementar/Decrementar un número con otras cifras

puntaje += 3; //Esto es lo mismo que poner:
// puntaje = puntaje + 3;

console.log(`Puntaje +3 = ${puntaje}`);

// Lo mismo con decremento
puntaje -= 3;
console.log(`Puntaje -3 = ${puntaje}`);