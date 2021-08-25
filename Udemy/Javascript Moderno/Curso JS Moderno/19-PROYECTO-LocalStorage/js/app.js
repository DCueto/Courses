

// VARIABLES

let tweets = [];

  // Selectores DOM
  const form = document.querySelector('#formulario');
  const tweet = document.querySelector('#formulario #tweet');
  const agregarBtn = document.querySelector('#formulario input[type="submit"]');
  const contenedorTweets = document.querySelector('#lista-tweets');


// EVENTOS

document.addEventListener('DOMContentLoaded', initApp);

function eventListeners(){
  agregarBtn.addEventListener('click', agregarTweet);
}


// FUNCIONES

function initApp(){
  console.log('Iniciando App...');
  eventListeners();
}

function agregarTweet(e){
  e.preventDefault();
  
  // Validar el textarea
  if(tweet.value){
    if(form.querySelector('.error')){
      form.querySelector('.error').remove();
    }
    console.log('Agregando Tweet...');
  } else{
    mostrarError('Un mensaje no puede ir vacío');
    return; // Evita que se ejecute más líneas de código
  }

  console.log('Agregando Tweet...');
}


function mostrarError(mensaje){

  const errorHTML = document.createElement('p');
  errorHTML.textContent = mensaje;
  errorHTML.classList.add('error');

  if(form.querySelector('.error')){
    form.querySelector('.error').remove();
  }

  form.appendChild(errorHTML);
  setTimeout(()=>{
    errorHTML.remove();
  }, 3000);
}