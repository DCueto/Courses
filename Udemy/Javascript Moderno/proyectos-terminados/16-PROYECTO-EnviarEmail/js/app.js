

// VARIABLES

const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

// (QUEDA PENDIENTE APRENDER EXPRESIONES REGULARES)
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

  // Enviar email
  formulario.addEventListener('submit', enviarEmail);

  // Resetear campos
  btnReset.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    resetearFormulario();
  });
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
      cambiarBorde(e, 'red', 'green');
    }
  } else{
    // No hay ningún contenido
    cambiarBorde(e, 'green', 'red');
    formError('Todos los campos son obligatorios', 3);
  }

  // Validación campo email
  if(e.target.type == 'email'){

    // validación con expresión regular
    if (er.test(e.target.value)){
      cambiarBorde(e, 'red', 'green');
      console.log('Formato de email correcto');

      // borrar error
      const errorEl = formulario.querySelector('.error');
      if(errorEl){
        formulario.removeChild(errorEl);
      }
    } else{
      formError('Email no valido', 1);
      cambiarBorde(e, 'green', 'red');
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
  // Creamos el campo de error
  const mensajeError = document.createElement('p');
  mensajeError.textContent = mensaje;
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


// Envia el email
function enviarEmail(e){
  e.preventDefault();

  // Mostrar el spinner
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'flex';

  console.log('Enviando...');

  // Después de 3 segundos, ocultar el spinner y mostrar el mensaje
  setTimeout(() =>{
    spinner.style.display = 'none';
    // formError('¡MENSAJE ENVIADO CORRECTAMENTE!', 4);

    // Mensaje de email enviado
    const parrafo = document.createElement('p');
    parrafo.textContent = 'El mensaje se envió correctamente.';
    parrafo.classList.add('enviado', 'border', 'border-blue-500', 'text-blue-500', 'p-3', 'mb-5', 'text-center')
    formulario.insertBefore(parrafo, spinner);

    // Eliminar mensaje después de 5 segundos
    setTimeout(()=>{
      parrafo.remove();
      resetearFormulario();
    }, 5000);
  }, 3000);

}


// Resetea el formulario
function resetearFormulario(){

  // Método para resetear elementos de tipo form
  formulario.reset();
  iniciarApp();

}

// Cambiar color borde
function cambiarBorde(e, remove, add){
  e.target.classList.remove('border', `border-${remove}-500`);
  e.target.classList.add('border', `border-${add}-500`);
}
