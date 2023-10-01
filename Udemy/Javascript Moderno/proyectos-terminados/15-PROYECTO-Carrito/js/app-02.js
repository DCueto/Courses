// Ejecutar JS al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {

  // Array del carrito
  let carrito = [];

  /* ----- ELEMENTOS HTML  --------- */
  // Cards
  const cards = document.querySelector('#lista-cursos');

  // Div Carrito
  const carrito_div = document.querySelector('#carrito');
  const contenedorCarrito = document.querySelector('#lista-carrito tbody');

  // Botón Vaciar Carrito
  const btnVaciarCarrito = document.querySelector('#vaciar-carrito');


  // SET EVENTS

function cargarEventListeners(){
  cards.addEventListener('click', agregarCurso);

  carrito_div.addEventListener('click', eliminarCurso);

  btnVaciarCarrito.addEventListener('click', (e)=>{
    e.preventDefault();
    carrito = [];
    limpiarCarritoHTML();
  });
}
cargarEventListeners();



  // FUNCIONES

  function agregarCurso(e){
    e.preventDefault();
    
    if(e.target.classList.contains('agregar-carrito')){

      // Coge los datos del curso seleccionado
      const datosCurso = parseElement(e.target);
      
      // Comprobar si está REPETIDO y añade el curso a nuestro array de carrito
      comprobarCurso(datosCurso);
      
      // Imprimir el carrito HTML
      imprimirCarrito();


      console.log(carrito);

    }
  }

  function eliminarCurso(e){
    
    e.preventDefault();
    
    // Si el elemento e.target contiene la clase borrar-curso se reasigna el array de carrito con los resultados que no
    // coincidan con el id del elemento que tiene asignado el elemento a eliminar. Seguidamente se vuelve a renderizar el HTML del carrito.
  
    if(e.target.classList.contains('borrar-curso')){
      const dataId = e.target.dataset.id;
      
      carrito = carrito.filter(curso => curso.id !== dataId);

      console.log(`Curso "id: ${dataId}" eliminado`);

      imprimirCarrito();
    }
  }

  function limpiarCarritoHTML(){
    // Borra los tr del tbody mientras haya tds
    while(contenedorCarrito.firstChild){
      contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
  }

  function imprimirCarrito(){

    // Limpiar HTML
    limpiarCarritoHTML();


    // Recorrer array para crear y añadir los elementos a la tabla
    carrito.forEach(curso => {

      const {nombre, precio, imagen, id, cantidad} = curso;
      let row = document.createElement('tr');
      row.innerHTML = `
        <td>
          <img src="${imagen}" width="100px"></img>
        </td>
        <td>${nombre}</td>
        <td>${precio}€</td>
        <td>${cantidad}</td>
        <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
      `;
      
      contenedorCarrito.appendChild(row);
    });
  }

  function comprobarCurso(curso){

    let cursoRepetido;
    carrito.forEach(item => {
      if(item.id === curso.id){
        item.cantidad++;
        cursoRepetido = true;
      }
    });

    if(cursoRepetido){
      console.log("Curso Repetido");
    } else{
      carrito = [...carrito, curso];
      console.log("Se ha añadido el curso al carrito");
    }
  }


  function parseElement(el){

    const nombre_el = el.parentElement.querySelector('h4').textContent;
    const precio_el = el.parentElement.querySelector('.precio span').textContent;
    const precio = parseFloat(precio_el.slice(1));
    const img_el = el.parentElement.parentElement.querySelector('img.imagen-curso').src;
    const id_el = el.dataset.id;

    const elemento = {
      nombre: nombre_el,
      precio: precio,
      imagen: img_el,
      id: id_el,
      cantidad: 1,
    }

    return elemento;
  }

});