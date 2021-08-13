// Evento submit a un formulario

const formulario = document.querySelector('#formulario');

// submit
// ejecuta cuando se presiona el botón submit del formulario
formulario.addEventListener('submit', validarFormulario);


function validarFormulario(e){
  // preventDefault nos permite evitar que se realice la acción del submit
  // la acción por default de nuestro form es que se envien los datos por POST en la url de action
  // con preventDefault evitamos que se ejecute la acción por defecto del elemento
  e.preventDefault();
  console.log('Buscando...');
  // Nos interesa utilizar .preventDefault() para poder: 
  // enviar los datos de forma asíncrona y no recargar nuestra página
  // consultar una api

  // Podemos acceder a los datos y todos sus atributos en el parámetro de evento
  console.log(e);
  console.log(e.target.action);
  console.log(e.target.method);
}