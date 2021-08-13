// ¿Qué es el Event Bubbling?

// El Event Bubbling es cuando un evento se propaga como si fuera una burbuja.
// Event Bubblig es cuando se ejecuta un evento y se propaga por otros lugares dando resultados inesperados

const card = document.querySelector('.card');
const info = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

// El Event Bubbling es por ejemplo cuando presionas sobre un elemento y se ejecutan los otros eventos
// de otros elementos

// en el siguiente ejemplo, si pulsamos en el elemento titulo, se ejecutarán los eventos de card e info,
// ya que titulo se encuentra dentro de esos dos elementos. (Event Bubbling)

// Evitar el Event Bubbling es sencillo de solucionar con .stopPropagation()

card.addEventListener('click', e => {
  e.stopPropagation();
  console.log('click en card');
});

info.addEventListener('click', e => {
  e.stopPropagation();
  console.log('click en info');
});

titulo.addEventListener('click', e => {
  e.stopPropagation();
  console.log('click en titulo');
});
