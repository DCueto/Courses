// Operador && (and / y) 

const usuario = false;
const puedePagar = false;

// Importante considerar el orden de los else if para que se ejecuten primero las sentencias con más
// condiciones.
// Si añadimos un condicional simple al prinicipio, puedes validar incorrectamente la sentencia if.

if (usuario && puedePagar){
  console.log(`Sí, puedes comprar`);
} else if(!puedePagar && !usuario){
  console.log(`No, no puedes comprar`);
} else if(!usuario){
  console.log(`Inicia sesión para realizar la compra`);
} else if(!puedePagar){
  console.log(`Fondos insuficientes`);
}


