// Eventos sobre los inputs (teclado)

let busqueda = document.querySelector('.busqueda');
const btnFlotante = document.querySelector('.btn-flotante');
const h1 = document.querySelector('.contenido-hero h1');


// DESCOMENTAR PARA EJECUTAR TODOS ESTOS EVENTOS
/*

// keydown
// se ejecuta cuando presionamos una tecla
busqueda.addEventListener('keydown', ()=>{
  console.log('Presionando una tecla...');
});

// keyup
// se ejecuta cuando soltamos una tecla
busqueda.addEventListener('keyup', ()=>{
  console.log('Soltando la tecla...');
});

// blur
// se ejecuta cuando no tenemos activo el cursor en un elemento campo
// muy práctico para realizar validaciones
busqueda.addEventListener('blur', ()=>{
  console.log('Fuera del input');
});

// copy
// se ejecuta cuando copiamos un texto
// sirve tanto en formularios como en cualquier elemento con texto
busqueda.addEventListener('copy', ()=>{
  console.log('Texto copiado');
});

h1.addEventListener('copy', ()=>{
  console.log('Texto copiado');
});

// paste
// se ejecuta cuando pegamos un texto
busqueda.addEventListener('paste', ()=>{
  console.log('Texto pegado');
});

// cut
// se ejecuta cuando cortamos un texto
busqueda.addEventListener('cut', ()=>{
  console.log('Texto cortado');
});

// input
// se ejecuta cuando interactuamos de cualquier forma con un input (salvo el blur)
busqueda.addEventListener('input', ()=>{
  console.log('Acción sobre el input');
});


// RESETEAR TODOS LOS EVENTOS
// basicamente reemplazamos el mismo elemento para resetear desde 0
btnFlotante.addEventListener('click', ()=> busqueda.outerHTML = busqueda.outerHTML);

*/

// el argumento que le pasamos a la función referencia al evento mismo
let string = '';
busqueda.addEventListener('input', (e)=>{
  console.log(e);
  //console.log(e.data);
  // Si el elemento retorna algo que no sea null, entonces añadimos la data del evento al string
  // Si es null, significa que le hemos dado a delete en el input. Eliminamos el último carácter.
  /*
  if(e.data !== null){
    string += e.data;
  } else{
    string = string.slice(0, -1);
  }*/

  // otra forma de realizar esta comprobación sería revisando el inputType del evento
  /*
  if(e.inputType == 'insertText'){
    string += e.data;
  } else if(e.inputType == 'deleteContentBackward'){
    string = string.slice(0, -1);
  }

  console.log(string);
  */

  // Ahora bien, el evento ya realiza este trabajo por ti con: evento.target.value
  // Ideal para ir realizando una busqueda en base a lo que va escribiendo el usuario
  // console.log(e.target.value);

  // también es una forma ideal para validar que un input tenga algo de información
  if(e.target.value === ''){
    console.log('Dato vacío');
  } else{
    console.log(e.target.value);
  }
});