

// VARIABLES

const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');

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

  if(e.target.value.length > 0){
    // Hay contenido
    console.log(e.target.value);
    e.target.classList.remove('border', 'border-red-500');
  } else{
    // No hay ningún contenido
    e.target.classList.add('border', 'border-red-500');
  }
}