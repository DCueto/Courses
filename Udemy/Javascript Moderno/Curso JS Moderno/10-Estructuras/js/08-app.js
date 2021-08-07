// Buenas prácticas con sentencias IF

const autenticado = true;

// NO NECESARIO
// if (autenticado === true){
//   console.log('OK');
// }

// BUENA PRÁCTICA
if (autenticado){
  console.log('OK');
}


const puntaje = 500;

// SI REALIZAMOS ASÍ EL IF, SOLO SE VALIDARÁ LA PRIMERA CONDICIÓN A PESAR DE TENER UN MAYOR PUNTAJE
// DE 400. EL IF SOLO CUMPLE UNA CONDICIÓN Y SIEMPRE EJECUTARÁ DE ARRIBA HACIA A ABAJO. 
if (puntaje > 300){
  console.log(`Buen puntaje. ¡Sigue así!`);
} else if (puntaje > 400){
  console.log('¡Excelente!');
}

// BUENA PRÁCTICA
if (puntaje > 400){
  console.log('¡Excelente!');
} else if (puntaje > 300){
  console.log(`Buen puntaje. ¡Sigue así!`);
}


// OTRA BUENA PRÁCTICA
// Si cumples un if con un return, se detendrá el código en esa linea. Solo dentro de una función.
revisarPuntaje();
function revisarPuntaje(){
  if (puntaje > 400){
    console.log(`¡Excelente!`);
    return; // El return finaliza el código de la función en esta línea
  }

  if (puntaje > 300){
    console.log(`Buen puntaje. ¡Felicidades!`);
    return;
  }
}