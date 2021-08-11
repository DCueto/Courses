// Eliminar elementos del DOM

const primerEnlace = document.querySelector('a');
console.log(primerEnlace);

// Eliminar un elemento por si mismo con .remove()
primerEnlace.remove();

// Eliminar un elemento desde la referencia del padre del elemento
const nav = document.querySelector('.navegacion');
console.log(nav.children);
// eliminamos el elemento con la función removeChild() desde el elemento padre y,
// le pasamos como argumento el elemento (nodo) hijo que queremos eliminar
nav.removeChild(nav.children[1]);