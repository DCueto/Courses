// Buenas prácticas de booleans

const autenticado = false;

// #1
// FORMA CUTRE "INCORRECTA"

// EN LA COMPARACIÓN, NO ES NECESARIO UTILIZAR EL ""=== true", ya que ya viene implícito
// Si dejas la variable sola siempre va a verificar si es true 
if(autenticado === true){
  console.log("Si puedes ver Netflix");
} else{
  console.log("No, no puedes ver Netflix");
}

// LA FORMA CORRECTA
// Si el booleano autenticado es false, automáticamente ejecuta el else.
if(autenticado){
  console.log("Si puedes ver Netflix");
} else{
  console.log("No, no puedes ver Netflix");
}

// El resultado es el mismo pero está mal visto hacerlo de la primera forma.


// #2
// Operador ternario
// Shortcut de if
console.log(autenticado ? 'Si está autenticado' : 'No está autenticado');