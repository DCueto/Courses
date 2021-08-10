// DOM - Document Object Model

let elemento;

elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain; // Nos devuelve el dominio del sitio
elemento = document.forms; // Nos devuelve un arreglo con los distintos formularios en el sitio
elemento = document.forms[0]; // Devuelve el primer item del formulario
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList; // Nos devuelve una lista de las clases del elemento
elemento = document.forms[0].action;
elemento = document.links; // Nos devuelve todos los enlaces del documento
elemento = document.links[4];
elemento = document.links[4].classList; // Array con las clases del elemento
elemento = document.links[4].className; // String con las clases del elemento
elemento = document.images; // Devuelve todas las imagenes del documento
elemento = document.scripts; // Devuelve todos los scripts del documento

console.log(elemento);
