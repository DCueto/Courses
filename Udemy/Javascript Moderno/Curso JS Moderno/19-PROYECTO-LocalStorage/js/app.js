

// VARIABLES

let tweets = [];

  // Selectores DOM
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

  console.log('Agregando Tweet...');
  
  // console.log(e.target.parentElement.children[1].value);
  console.log(tweet.value);
}