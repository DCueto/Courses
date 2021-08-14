

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
    
    // elimina errores
    const errorEl = formulario.querySelector('.error');
    if(errorEl){
      errorEl.remove();
    }

    if(e.target.type !== 'email'){
      e.target.classList.remove('border', 'border-red-500');
      e.target.classList.add('border', 'border-green-500');
    }
  } else{
    // No hay ningún contenido
    e.target.classList.add('border', 'border-red-500');
    e.target.classList.remove('border-green-500');
    formError('Todos los campos son obligatorios', 3);
  }

  // forma compleja con una expresión regular
  // (QUEDA PENDIENTE APRENDER EXPRESIONES REGULARES)
  const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Validación campo email
  if(e.target.type == 'email'){

    if (er.test(e.target.value)){
      // estilos borde input
      e.target.classList.remove('border', 'border-red-500');
      e.target.classList.add('border', 'border-green-500');
      console.log('Formato de email correcto');

      // borrar error
      const errorEl = formulario.querySelector('.error');
      if(errorEl){
        formulario.removeChild(errorEl);
      }
    } else{
      formError('Email no valido', 1);

      e.target.classList.add('border', 'border-red-500');
      e.target.classList.remove('border-green-500');
    }
  }

  // Todo correcto
  if(email.value !== '' && er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
    console.log('TODO OK');
    btnEnviar.disabled = false;
    btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
  }
}


function formError(mensaje, position){
  console.log('Error');
  // Creamos el campo de error
  const mensajeError = document.createElement('p');
  mensajeError.textContent = mensaje;
  // mensajeError.style.marginBottom = '1rem';
  mensajeError.classList.add('error', 'border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mb-5', 'text-center');


  // Si no hay un elemento p con la clase error, añadelo. Si existe, actualiza el mensaje.
  if(!formulario.querySelector('p.error')){
    formulario.insertBefore(mensajeError, formulario.children[position]);
  } else{
    // borrar error
    const errorEl = formulario.querySelector('.error');
    errorEl ? formulario.removeChild(errorEl) : null;
    // cambiar mensaje
    formulario.insertBefore(mensajeError, formulario.children[position]);
    //formulario.querySelector('.error').textContent = mensaje;
  }
}