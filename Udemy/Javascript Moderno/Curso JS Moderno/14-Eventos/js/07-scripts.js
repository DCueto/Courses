// Prevenir el Event Bubbling con Delegation

// Delegation -> con un solo evento a un elemento utilizamos e.target para identificar cada elemento
// clickado (aplicado el evento) y ejecutar concretamente un código u otro.

// Tanto Delegation como .stopPropagation() son validos para evitar el Event Bubbling
// Quizás Delegation sea un código más limpio, pero el resultado es el mismo

const card = document.querySelector('.card');


card.addEventListener('click', e => {
  // con e.target podemos identificar a que le estamos dando click exactamente
  console.log(e.target);

  // para ejecutar distinto código según el target que cliquemos
  if(e.target.classList.contains('titulo')){
    console.log('Diste click en titulo');
  }
  if(e.target.classList.contains('info')){
    console.log('Diste click en info');
  }
  if(e.target.classList.contains('precio')){
    console.log('Diste click en precio');
  }
  if(e.target.classList.contains('categoria')){
    console.log('Diste click en categoría');
  }
});