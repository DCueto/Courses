// getElementsByClassName
// Seleccionar elementos HTML por su clase

// Devuelve un array con los elementos

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// Clase repetida en diferentes elementos
// Devuelve un array con todos los elementos HTML con esa clase
const elementos = document.getElementsByClassName('info');
console.log(elementos);


// Si una clase no existe
// Devuelve un array sin elementos
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);

