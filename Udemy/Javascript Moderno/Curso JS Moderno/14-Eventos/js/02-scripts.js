// Eventos con el ratón (mouse)

const nav = document.querySelector('.navegacion');

// Registrar un evento

// click
nav.addEventListener('click', ()=>{
  console.log('Click en Nav');
});

// mouseenter
// entra el cursor en el elemento
nav.addEventListener('mouseenter', ()=>{
  console.log('Entrando en el nav .navegacion');
  nav.style.backgroundColor = 'white';
});

// mouseout
// sale el cursor del evento
nav.addEventListener('mouseout', ()=>{
  console.log('Saliendo del nav');
  nav.style.backgroundColor = 'transparent';
});

// mousedown
// Parecido al click. Se ejecuta cuando se presiona el click. 
// click se ejecuta con el proceso íntegro del click, a la hora de presionar y de soltar
nav.addEventListener('mousedown', ()=>{
  console.log('Presionando el click');
});

// mouseup
// se ejecuta cuando se suelta el click
nav.addEventListener('mouseup', ()=>{
  console.log('Soltando el click');
});

// dblclick
// doble click
nav.addEventListener('dblclick', ()=>{
  console.log('Doble Click');
});