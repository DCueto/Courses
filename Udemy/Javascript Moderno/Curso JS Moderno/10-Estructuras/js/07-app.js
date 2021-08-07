// Operador || (or / o) 

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

// Importante considerar el orden de los else if para que se ejecuten primero las sentencias con más
// condiciones.
// Si añadimos un condicional simple al prinicipio, puedes validar incorrectamente la sentencia if.

if (efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){
  console.log(`Se puede realizar el pago`);
} else{
  console.log(`Fondos insuficientes`);
}