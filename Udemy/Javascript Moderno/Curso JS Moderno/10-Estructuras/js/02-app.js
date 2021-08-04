// Comparador estricto y comparador diferente

// IF STATEMENT

const puntaje = 1000;
const puntaje2 = "1000";

console.log(`La variable puntaje con valor ${puntaje} es de tipo ${typeof puntaje}`);
console.log(`La variable puntaje2 con valor ${puntaje2} es de tipo ${typeof puntaje2}`);


// COMPARADOR DIFERENTE
if(puntaje != 1000){ // != diferente
  console.log(`Sí, es diferente.`)
} else{
  console.log(`No, es igual`);
}

// COMPARADOR ESTRICTO
// El comparador estricto no solo compara el valor, sino el tipo de dato.
if(puntaje === "1000"){ // === igual a (estricto)
  console.log(`Sí, el valor y tipo de dato es igual ${puntaje}`);
} else{
   console.log(`El valor o tipo de dato NO es igual a ${puntaje}`);
}

// COMPARADOR ESTRICTO DIFERENTE
if(puntaje2 !== "1000"){ // !== diferente (estricto)
  console.log(`El valor y tipo de dato es diferente a ${puntaje2}`);
} else{
  console.log(`El valor y tipo de dato NO es diferente a ${puntaje2}`);
}


// ==     Operador NO estricto
// ===    Operador ESTRICTO
// !=     Operador diferente NO estricto
// !==    Operador diferente ESTRICTO