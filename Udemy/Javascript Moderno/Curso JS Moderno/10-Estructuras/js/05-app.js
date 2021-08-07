// SENTENCIA SWITCH CASE
// Utilizamos Switch en caso de que tengamos demasiadas condiciones. Con demasiados else if
// el código puede ser confundo y poco optimizado

const metodoPago = "cheque";

// En el paréntesis del Switch, va a revisar la variable que queremos comprobar.
// Los "case" van a revisar la variable a comprobar y comparar con un valor determinado en el case
// Los "case" no son obligatorios de introducir en un Switch.
// Lo que SÍ es obligatorio es el "default" (parecido a un else).

switch(metodoPago){
  case 'efectivo':
    pagar();
    console.log(`Pagaste con ${metodoPago}`);
    break; // Hay que indicar el break una vez terminado la comprobación
  case 'cheque':
    pagar();
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case 'tarjeta':
    pagar();
    console.log(`Pagaste con ${metodoPago}`);
    break;
  default:
    console.log(`Aún no has seleccionado un método de pago o, método de pago no soportado`);
    break;
}

function pagar(){
  console.log('Pagando...');
}