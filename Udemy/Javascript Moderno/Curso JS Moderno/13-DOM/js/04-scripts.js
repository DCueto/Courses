// querySelector
// nuevo método en JS para seleccionar un elemento HTML
// Es mejor y más práctico que getElementById
// tiene más herramientas que getElementById, como por ejemplo seleccionar por clases.
// querySelector es más parecido a lo que son los selectores de CSS

// querySelector te va a seleccionar el primero que encuentre.
// la sintaxis del parámetro a pasar en querySelector es como la de selectores de CSS
const card = document.querySelector('.card');
console.log(card);

// Podemos tener selectores específicos como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de la sección hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// En definitiva, querySelector te permite utilizar todas las herramientas de los selectores de CSS en
// Javascript.

// Seleccionar el elemento form con id formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);


// Seleccionar elementos por su etiqueta HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);


// con .querySelectorAll puedes seleccionar todos los elementos con un mismo selector