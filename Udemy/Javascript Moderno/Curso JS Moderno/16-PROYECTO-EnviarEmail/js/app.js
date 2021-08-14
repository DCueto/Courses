

// VARIABLES

const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

// Variables campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


// EVENTOS

eventListeners();
function eventListeners(){

  // Cuando la app arranca
  document.addEventListener('DOMContentLoaded', iniciarApp);

  // Campos de formulario
  email.addEventListener('blur', validarFormulario);
  asunto.addEventListener('blur', validarFormulario);
  mensaje.addEventListener('blur', validarFormulario);

}



// FUNCIONES


function iniciarApp(){
  btnEnviar.disabled = true;
  // CSS Tailwind - Estilos para el boton enviar bloqueado
  btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}


function validarFormulario(e){

  // Campos vacios o completados
  if(e.target.value.length > 0){
    // Hay contenido
    console.log(e.target.value);
    e.target.classList.remove('border', 'border-red-500');
  } else{
    // No hay ningún contenido
    e.target.classList.add('border', 'border-red-500');
    formError('Todos los campos son obligatorios', 3);
  }

  // Validación campo email
  if(e.target.type == 'email'){
    const arroba = e.target.value.indexOf('@');
    if (arroba == -1){
      formError('Email no valido', 1);
      console.log('Introduce un email');
    } else{
      console.log('Email introducido');
    }
  }
}


function formError(mensaje, position){
  console.log('Error');
  // Creamos el campo de error
  const mensajeError = document.createElement('p');
  mensajeError.textContent = mensaje;
  // mensajeError.style.marginBottom = '1rem';
  mensajeError.classList.add('error', 'border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mb-5', 'text-center');


  // Si no hay un elemento p con la clase error, añadelo
  if(!formulario.querySelector('p.error')){
    formulario.insertBefore(mensajeError, formulario.children[position]);
  } else{
      console.log('Ya hay un <p> de error');
  }
}