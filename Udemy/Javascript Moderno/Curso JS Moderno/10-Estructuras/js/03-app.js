// Operador Mayor que / Menor que

const dinero = 500;
const pago1 = 300;
const pago2 = 870;
const pago3 = 500;


if(dinero > pago1){ // mayor que
  console.log(`Tienes suficiente dinero en tu CC para realizar el pago de ${pago1}€`);
}else{
  console.log(`Fondos insuficientes para realizar el pago de ${pago1}€. 
  \nEn tu CC tienes ${dinero}€. Faltan ${pago1 - dinero}€ para realizar el pago de ${pago1}€`);
}


if(dinero < pago2){ // menor que
  console.log(`Fondos insuficientes para realizar el pago de ${pago2}€. 
  \nEn tu CC tienes ${dinero}€. Faltan ${pago2 - dinero}€ para realizar el pago de ${pago2}€`);
}else{
  console.log(`Tienes suficiente dinero en tu CC para realizar el pago de ${pago2}€`);
}

// Si dejamos esta comparación con "mayor que", a pesar de que tengamos el dinero suficiente, nos indicará
// como que no hay suficientes fondos.
// Para eso utilizamos el operador "mayor o igual que" para que valide que los fondos son suficientes.
if(dinero > pago3){ // mayor que
  console.log(`Tienes suficiente dinero en tu CC para realizar el pago de ${pago3}€`);
}else{
  console.log(`Fondos insuficientes para realizar el pago de ${pago3}€. 
  \nEn tu CC tienes ${dinero}€. Faltan ${pago3 - dinero}€ para realizar el pago de ${pago3}€`);
}

// CON OPERADOR MAYOR O IGUAL QUE
if(dinero >= pago3){ // mayor que
  console.log(`Tienes suficiente dinero en tu CC para realizar el pago de ${pago3}€`);
}else{
  console.log(`Fondos insuficientes para realizar el pago de ${pago3}€. 
  \nEn tu CC tienes ${dinero}€. Faltan ${pago3 - dinero}€ para realizar el pago de ${pago3}€`);
}


// >    Operador Mayor que
// >    Operador Menor que
// >=   Operador Mayor o Igual que
// <=   Operador Menor o Igual que
