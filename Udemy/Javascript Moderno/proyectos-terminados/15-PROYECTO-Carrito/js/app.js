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

  // Elimina cursos del carrito
  carrito.addEventListener('click', eliminarCurso);

  // Vaciar el carrito
  btnVaciarCarrito.addEventListener('click', ()=>{
    cursosCarrito = []; // Reset de arreglo
    limpiarHTML(); // Eliminamos HTML del carrito
  });
}


// FUNCIONES

function agregarCurso(e){

  // Para evitar que al pulsar al enlace nos suba hacia el inicio de la página
  e.preventDefault();

  // Si pulso al botón "agregar-carrito" -> ejecutar
  if(e.target.classList.contains('agregar-carrito')){
    // curso actual
    const cursoSeleccionado = e.target.parentElement.parentElement;
    // datos de curso parseados
    const datosCurso = leerDatosCurso(cursoSeleccionado);
    // enviamos los datos al carrito
    enviarACarrito(datosCurso);
  }

}

// Elimina un curso del carrito
function eliminarCurso(e){
  if(e.target.classList.contains('borrar-curso')){
    // id del curso a borrar
    const idCurso = e.target.dataset.id;
    
    // Eliminar curso del arreglo cursosCarrito
    // recorre todo el arreglo y reasigna todos los objetos con un id diferente al que hemos seleccionado
    // para eliminar. De esta forma eliminamos el curso de nuestro arreglo.
    cursosCarrito = cursosCarrito.filter( curso => curso.id !== idCurso);
    
    console.log(cursosCarrito);

    actualizarHTML();
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

// Enviar datos del array de cursosCarrito al contenedor HTML de carrito
// De esta forma borramos y enviamos todos los datos del array al contenedor HTML
function enviarACarrito(datosCurso){

  // Envía los datos del curso a un array con los cursos del carrito
  compruebaCurso(datosCurso);

  // Actualiza e imprime el HTML en base al array de cursosCarrito
  actualizarHTML();

}

// Elimina los cursos del tbody
function limpiarHTML(){

  // Forma lenta de limpiar
  // contenedorCarrito.innerHTML = '';

  // Forma optima
  // Mientras el tbody tenga un elemento dentro, elimina ese elemento
  while(contenedorCarrito.firstChild){
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

// Actualiza e imprime los datos al HTML del carrito
function actualizarHTML(){

  // Limpiar el HTML
  limpiarHTML();

  // Recorre el carrito y genera el HTML
  cursosCarrito.forEach( curso => {

    // Crea un elemento tr con el curso para el carrito
    const {imagen, titulo, precio, cantidad, id} = curso;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <img src="${imagen}" width="100"/>
      </td>
      <td> ${titulo} </td>
      <td> ${precio} </td>
      <td> ${cantidad} </td>
      <td> <a href="#" class="borrar-curso" data-id="${id}">X<a/> </td> 
    `;

    // Agrega el html del tr al tbody
    contenedorCarrito.appendChild(row);
  });
}


// Comprueba si el curso está repetido en el carrito
function compruebaCurso(datosCurso){
  // Recorre el array carrito y comprueba si el id del curso actual y alguno del carrito tienen el mismo
  // id. En caso afirmativo, se le añade 1 a cantidad de ese curso y se asigna ese curso a una variable.
  let cursoRepetido;
  cursosCarrito.forEach(curso => {
    if(datosCurso.id == curso.id){
      curso.cantidad += 1;
      cursoRepetido = curso;
    }
  });
  // Se verifica si ese curso está repetido. Si está repetido no se agrega al array. En caso de no estar
  // repetido entonces se agrega ese curso al carrito.
  if(cursoRepetido){
    console.log('Curso Repetido: se suma 1 a cantidad');
  } else{
    cursosCarrito = [...cursosCarrito, datosCurso];
  }
  console.log(cursosCarrito);
}