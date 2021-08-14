

// VARIABLES

const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');




// EVENTOS

eventListeners();
function eventListeners(){
  document.addEventListener('DOMContentLoaded', iniciarApp);
}





// FUNCIONES


function iniciarApp(){
  console.log('iniciando...');
  btnEnviar.disabled = true;
  btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}