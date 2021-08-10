// Modificar textos o imagenes en JS

const encabezado = document.querySelector('.hero h1');
console.log(encabezado);

console.log(encabezado.innerText); // Texto (Si CSS -> visibility: hidden; no lo va a encontrar)
console.log(encabezado.textContent); // Texto (Si lo va a encontrar)
console.log(encabezado.innerHTML); // Retorna el HTML

// Modificar el texto
encabezado.textContent = 'Nuevo Encabezado';

// Modificar una imagen
const imagen = document.querySelector('.contenedor-cards .card:nth-child(1) img');
console.log(imagen);
console.log(imagen.src);
imagen.src = 'img/hacer2.jpg'; // Cambiamos ruta de la imagen
console.log(imagen.src);