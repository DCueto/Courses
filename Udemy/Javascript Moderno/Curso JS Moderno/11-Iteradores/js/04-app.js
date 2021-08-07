// Bucle While
// Mientras una condición sea verdadera se seguirá ejecutando el While Loop

let n = 0; // Inicializar el While

while (n < 10) { // Condición
  
  console.log(`Número ${n}`);

  n++; // Incremento
}

// FIZZ BUZZ en bucle While

let i = 1;
while (i<=100){
  if (i % 3 === 0 && i % 5 === 0){
    console.log(`${i} FIZZ BUZZ`);
  } else if (i % 3 === 0){
    console.log(`${i} FIZZ`);
  } else if (i % 5 === 0){
    console.log(`${i} BUZZ`);
  }
  i++;
}

// Ejercicio: Detectar pares e impares con while

let a = 1;

while(a<=20){
  if (a%2===0){
    console.log(`${a} es PAR`);
  } else if (a%3===0){
    console.log(`${a} es IMPAR`);
  }
  a++;
}