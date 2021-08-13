// VARIABLES

const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
let cursosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
  // Cuando agregas un curso presionando "Agregar al carrito"
  listaCursos.addEventListener('click', agregarCurso);
}


// FUNCIONES

function agregarCurso(e){

  // Para evitar que al pulsar al enlace nos suba hacia el inicio de la página
  e.preventDefault();

  // Si pulso al botón "agregar-carrito" -> ejecutar
  if(e.target.classList.contains('agregar-carrito')){
    // selecciona el elemento .card
    const cursoSeleccionado = e.target.parentElement.parentElement;

    // almacena los datos en un objeto y los envía al carrito
    const datosCurso = leerDatosCurso(cursoSeleccionado);
    enviarACarrito(datosCurso);
  }

}

// Lee el contenido del HTML al que le dimos click y extrae información del curso
function leerDatosCurso(curso){
  // curso referencia al elemento .card seleccionado en el evento
  // Crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    autor: curso.querySelector('p').textContent,
    precio: curso.querySelector('p.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  }

  return infoCurso;
}

// Enviar datos del curso al carrito HTML
function enviarACarrito(curso){

  // Envía los datos del curso a un array con los cursos del carrito
  cursosCarrito = [...cursosCarrito, curso];

  // Crea un elemento tr con el curso para el carrito
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>
      ${curso.titulo}
    </td>
  `;

  // Agrega el html del tr al tbody
  contenedorCarrito.appendChild(row);
}