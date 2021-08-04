// ELSE IF
// Se pueden añadir tantos else if como queramos.

const dinero = 300;
const pago1 = 300;
const pago2 = 870;
const pago3 = 500;
const tarjeta_credito = true;
const tarjeta_credito2 = false;


// SE IMPRIME EL PRIMER IF
if(dinero >= pago1){ // mayor que
  console.log(`Tienes suficiente dinero en tu CC para realizar el pago de ${pago1}€`);
} else if(tarjeta_credito){
  console.log(`Se puede realizar el pago de ${pago1}€ con la tarjeta de crédito disponible.
  \nEl crédito total pendiente será de ${pago1 - dinero}€`);
}else{
  console.log(`Fondos insuficientes para realizar el pago de ${pago1}€. 
  \nEn tu CC tienes ${dinero}€. Faltan ${pago1 - dinero}€ para realizar el pago de ${pago1}€`);
}

// SE IMPRIME EL ELSE IF
if(dinero >= pago3){ // mayor que
  console.log(`Tienes suficiente dinero en tu CC para realizar el pago de ${pago3}€`);
} else if(tarjeta_credito){
  console.log(`Se puede realizar el pago de ${pago3}€ con la tarjeta de crédito disponible.
  \nEl crédito total pendiente será de ${pago3 - dinero}€`);
}else{
  console.log(`Fondos insuficientes para realizar el pago de ${pago3}€. 
  \nEn tu CC tienes ${dinero}€. Faltan ${pago3 - dinero}€ para realizar el pago de ${pago3}€`);
}

// SE IMPRIME EL ELSE
if(dinero >= pago3){ // mayor que
  console.log(`Tienes suficiente dinero en tu CC para realizar el pago de ${pago3}€`);
} else if(tarjeta_credito2){
  console.log(`Se puede realizar el pago de ${pago3}€ con la tarjeta de crédito disponible.
  \nEl crédito total pendiente será de ${pago3 - dinero}€`);
}else{
  console.log(`Fondos insuficientes para realizar el pago de ${pago3}€. 
  \nEn tu CC tienes ${dinero}€. Faltan ${pago3 - dinero}€ para realizar el pago de ${pago3}€`);
}