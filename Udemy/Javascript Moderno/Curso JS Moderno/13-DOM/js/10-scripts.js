// Generar HTML con Javascript

// .createElement() nos permite crear nuevos elementos HTML
const enlace = document.createElement('a');
// agregar texto al enlace
enlace.textContent = 'Nuevo Enlace';
// agregar link del enlace
enlace.href = '#';
// agregar un target
enlace.target = '_blank';

//agregar un nuevo atributo personalizado con .setAttribute()
enlace.setAttribute('data-enlace', 'nuevo-enlace');

//agregar una clase
enlace.classList.add('alguna-clase');

//añadir un evento onclick (al clicar) al elemento
let evento = () => alert('Le diste click');
enlace.onclick = evento;

console.log(enlace);


// Seleccionamos navegación -> Elemento Padre
const nav = document.querySelector('.navegacion');

// .appendChild() nos permite insertar un nuevo elemento hijo a un nodo padre
// .appendChild() nos insertará el elemento al final de todos los hijos del padre
// Insertamos nuestro enlace HTML al nav con .appendChild()
nav.appendChild(enlace);

// Si queremos colocar el elemento en una posición concreta usaremos .insertBefore()
// .insertBefore() nos pide dos argumentos: el elemento a agregar y, el elemento hijo
// del que queremos insertar antes.
// .insertBefore() nos va a proporcionar más control a la hora de decidir donde colocar un elemento.
nav.insertBefore(enlace, nav.children[1])


// Crear un contenido html un poco más complejo como un .card del html

// Creamos parrafos
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$400 por persona';
parrafo3.classList.add('precio');

// Crear div .info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.classList.add('img-fluid');
imagen.alt = 'Texto alternativo';

// Crear div .card
const card = document.createElement('div');
card.classList.add('.card');
card.appendChild(imagen);
card.appendChild(info);

console.log(card);

// Insertar el card al contenedor html existente
const contenedor = document.querySelector('section.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);