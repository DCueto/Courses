// Cambiando CSS en JS

const encabezado = document.querySelector('.hero h1');
console.log(encabezado.style); // Imprime todas las propiedades CSS disponibles en el elemento

// en JS, las propiedades CSS con dos palabras y un guion (background-color), se escriben con otra sintaxis
// CSS: background-color ; JS: backgroundColor.

// esta sintaxis lo único que consigue es que tu código sea más grande
// los estilos deberían estar siempre definidos en el CSS y no en el JS
encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';


// la forma más recomendable es agregar y quitar clases en los elementos.
const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase'); // Método para añadir clases a un elemento
console.log(card.classList);
card.classList.remove('segunda-clase'); // Método para eliminar clases de un elemento
console.log(card.classList);

