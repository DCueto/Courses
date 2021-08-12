// Ejemplo de manipulación del DOM en JS
// añadir un evento y manipular el html

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// Añadir un evento al botón flotante
// para añadir eventos utilizamos la función .addEventListener()
// a .addEventListener le pasamos dos argumentos, el evento y, una función a ejecutar con el evento.
btnFlotante.addEventListener('click', mostrarOcultarFooter);

// creamos la función que verifica y añade la clase .active a footer y a btnFlotante
function mostrarOcultarFooter() {
  console.log('le diste click al botón');
  // con classList.contains(), podemos verificar si un elemento contiene o no una clase
  if(footer.classList.contains('activo')){
    footer.classList.remove('activo');
    // cuando estamos en un evento, this hace referencia al elemento que llamó a esa función
    this.classList.remove('activo');
    this.textContent = 'Idioma y Moneda';
  } else{
    footer.classList.add('activo');
    this.classList.add('activo');
    this.textContent = 'X Cerrar';
  }
}