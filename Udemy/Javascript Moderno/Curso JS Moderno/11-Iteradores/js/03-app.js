// El reto del Fizz Buzz

// Múltiples de 3 deben imprimir en consola la palabra FIZZ
// Múltiples de 5 deben imprimir en consola la palabra BUZZ

for(let i=1; i<=100; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log(`${i} FIZZ BUZZ`);
    continue;
  } else if (i % 3 === 0){
    console.log(`${i} FIZZ`);
  } else if (i % 5 === 0){
    console.log(`${i} BUZZ`);
  }
}