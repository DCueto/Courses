// Bucle DO While
// Mientras una condición sea verdadera se seguirá ejecutando el While Loop

// El Do While se va a ejecutar mínimo una sola vez, aunque la condición nunca sea cierta. Ejecuta y luego comprueba.
// Mientras, el While primero comprueba y luego ejecuta.


let n = 100; // Inicializar el Do While

do{
  console.log(`Número ${n}`);
  n++; // Incremento
} while (n < 10);// Condición



// FIZZ BUZZ en bucle DO While

let i = 1;
do{
  if (i % 3 === 0 && i % 5 === 0){
    console.log(`${i} FIZZ BUZZ`);
  } else if (i % 3 === 0){
    console.log(`${i} FIZZ`);
  } else if (i % 5 === 0){
    console.log(`${i} BUZZ`);
  }
  i++;
}while (i<=100);