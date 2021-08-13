// Variables

const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');

cargarEventListeners();
function cargarEventListeners(){
  // Cuando agregas un curso presionando "Agregar al carrito"
  listaCursos.addEventListener('click', agregarCurso);
}


// Funciones

function agregarCurso(e){

  // Para evitar que al pulsar al enlace nos suba hacia el inicio de la página
  e.preventDefault();

  // Si pulso al botón "agregar-carrito" -> ejecutar
  if(e.target.classList.contains('agregar-carrito')){
    const cursoSeleccionado = e.target.parentElement.parentElement;
    console.log(e);

    leerDatosCurso(cursoSeleccionado);
  }

}

// Lee el contenido del HTML al que le dimos click y extrae información del curso
function leerDatosCurso(curso){
  // curso referencia al elemento .card seleccionado en el evento
  console.log(curso);

  // Crear un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    autor: curso.querySelector('p').textContent,
    precio: curso.querySelector('p.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  }

  console.log(infoCurso);
}