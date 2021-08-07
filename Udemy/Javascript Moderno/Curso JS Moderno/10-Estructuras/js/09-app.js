// Operador Ternario IF -> IF Simplificado

// La sintaxis es la siguiente:
// condicion ? ejecuta_codigo_if : ejecuta_codigo_else
// El interrogante (?) representa el IF
// Los dos puntos (:) representan el ELSE

const autenticado = false;
const autenticado2 = true;
const puedePagar = true;

console.log(autenticado ? `Usuario autenticado` : `Usuario no autenticado. Por favor, haz log in` );


// Validar dos condiciones en un ternario

// AND &&
console.log(autenticado && puedePagar ? `Se puede realizar el pago` : `Error: No se ha podido efectuar el pago` );

// OR ||
console.log(autenticado || puedePagar ? `Se puede realizar el pago` : `Error: No se ha podido efectuar el pago` );



// Validar un if dentro de otro if (IF ANIDADO)
const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){

  if (efectivo > totalPagar){
    console.log(`Pagaste con efectivo`);
  } else{
    console.log(`Se realizó el pago con otra forma de pago`);
  }
} else{
  console.log(`Fondos insuficientes`);
}

// IF ANIDADO CON UN IF TERNARIO

console.log(autenticado2 ? puedePagar ? `Sí está autenticado y puede pagar` : `Usuario autenticado pero no puede realizar el pago`
 : `No está autenticado`);