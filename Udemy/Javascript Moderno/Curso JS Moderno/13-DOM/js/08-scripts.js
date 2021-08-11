// Traversing the DOM (Recorrer el DOM)

// DATOS DE INTERÉS
const navegacion = document.querySelector('nav.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); // Los espacios en blanco son considerados elementos.
// childNodes nos trae los espacios en blanco en HTML (tabulación o espacio) y los considera como
// elementos. De ahí que haya items en el array como: #text " ". Tendriamos que eliminar toda la
// tabulación del HTML para que no apareciera ningún #text, pero ensuciaríamos nuestro código HTML.

// Alternativa más limpia (sin espacios y cosas raras en el array)
console.log(navegacion.children); // Nos devuelve solo los elementos HTML dentro de nuestro elemento

console.log(navegacion.children[1].nodeName);
console.log(navegacion.children[1].nodeType);


// TRAVERSING THE DOM

// Vamos recorriendo elementos para seleccionar el que nos interesa
const card = document.querySelector('.card');
console.log(card.children[1].children);

// Queremos el elemento título del card
console.log(card.children[1].children[1].textContent);

// Cambiar el texto de título
card.children[1].children[1].textContent = 'Nuevo Heading desde Traversing the DOM';
console.log(card.children[1].children[1].textContent);

// Cambiar una imagen con TRAVERSING
console.log(card.children[0]);
console.log(card.children[0].src);
card.children[0].src = 'img/hacer3.jpg'; // Cambiar la imagen
console.log(card.children[0].src);

// Traversing de Hijo al Padre
console.log(card.parentElement.parentElement.parentElement);


// Para recorrer los elementos hijos utilizamos .children
// Para recorrer los elementos padres utilizamos .parentElement


// Traversing de hermanos de un elemento

// Siguiente elemento hermano con .nextElementSibling
console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

// Anterior elemento hermano con .previousElementSibling
const ultimoCard = document.querySelector('.card:nth-child(4)');

console.log('// Último card');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);


// Para recorrer al siguiente elemento hermano utilizamos .nextElementSibling
// Para recorrer al anterior elemento hermano utilizamos .previousElementSibling


// Traversing del primer y último elemento hijo
// Primer elemento -> .firstElementChild
// Último elemento -> .lastElementChild
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);