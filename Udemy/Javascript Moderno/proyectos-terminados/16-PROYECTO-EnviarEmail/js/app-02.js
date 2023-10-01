document.addEventListener('DOMContentLoaded', initApp);

function initApp(){

// VARIABLES

const email = {
  email: '',
  asunto: '',
  mensaje: '',
}

// ---- DOM ELEMENTS

const formulario = document.querySelector("#enviar-mail");

const inputEmail = formulario.querySelector('input#email');
const inputAsunto = formulario.querySelector('input#asunto');
const inputMensaje = formulario.querySelector('textarea#mensaje');

const btnEnviar = formulario.querySelector('button#enviar');
const btnReset = formulario.querySelector('button#resetBtn');


// EVENTS

function cargarEventListeners(){

  // INPUTS
  inputEmail.addEventListener('blur', validarInput);

  inputAsunto.addEventListener('blur', validarInput);

  inputMensaje.addEventListener('blur', validarInput);


  // BUTTONS

  btnEnviar.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('Enviar Formulario');
  });

  btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Resetear Formulario');
  });

}

cargarEventListeners();

function validarInput(e){
  if(!e.target.value || e.target.value.trim() == ''){
    mostrarError(`El campo ${e.target.id} está vacío`, e);
    email[e.target.name] = '';
    comprobarForm();
    return;
  }

  if(e.target.id == 'email'){
    if(!validarEmail(e.target.value)){
      mostrarError('El email no es válido', e);
      email[e.target.name] = '';
      comprobarForm();
      return;
    }
  }
  
  limpiarAlerta(e);

  // Asignar valores
  email[e.target.id] = e.target.value.trim().toLowerCase();
  
  // Comprobar form
  comprobarForm();
  
}

function validarEmail(email){
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const resultado = regex.test(email);
  return resultado;
}

function limpiarAlerta(e){
  const alerta = e.target.parentElement.querySelector('.input_alert');
  if(alerta){
    alerta.remove();
  }
}

function comprobarForm(){

  if(!Object.values(email).includes('')){
    btnEnviar.classList.remove('opacity-50');
    btnEnviar.removeAttribute('disabled');
  } else{
    if(!btnEnviar.classList.contains('opacity-50') && !btnEnviar.hasAttribute('disabled')){
      btnEnviar.classList.add('opacity-50');
      btnEnviar.setAttribute('disabled');
    }
  }
}

function mostrarError(err, e){

  // Comprobar si existe alerta
  limpiarAlerta(e);


  // Generar mensaje HTML

  const errorLabel = document.createElement('P');
  
  // p styles
  errorLabel.textContent = err;
  errorLabel.style.backgroundColor = 'red';
  errorLabel.style.color = 'white';
  errorLabel.style.padding = '0.5em 1em';
  errorLabel.style.textAlign = 'center';
  errorLabel.classList.add('input_alert');


  e.target.parentElement.appendChild(errorLabel);

}

}