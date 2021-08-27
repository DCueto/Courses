

// VARIABLES

let tweets = [];

  // Selectores DOM
  const form = document.querySelector('#formulario');
  const tweetInput = document.querySelector('#formulario #tweet');
  const agregarBtn = document.querySelector('#formulario input[type="submit"]');
  const contenedorTweets = document.querySelector('#lista-tweets');


// EVENTOS

document.addEventListener('DOMContentLoaded', initApp);

function eventListeners(){
  agregarBtn.addEventListener('click', agregarTweet);
}


// FUNCIONES

function initApp(){
  console.log('DOM cargado correctamente');
  eventListeners();

  if(localStorage.getItem('tweets')){
    tweets = JSON.parse(localStorage.getItem('tweets'));
    console.log(tweets);

    renderHTML();
  }
}

function agregarTweet(e){
  e.preventDefault();
  
  // Validar el textarea
  if(tweetInput.value){
    if(form.querySelector('.error')){
      form.querySelector('.error').remove();
    }
  } else{
    mostrarError('Un mensaje no puede ir vacío');
    return; // Evita que se ejecute más líneas de código
  }

  // Añadir tweet
  console.log('Agregando Tweet...');

  const tweet = {
    id: Date.now(),
    tweet: tweetInput.value,
  }

  // Añadir al arreglo de tweets
  tweets = [...tweets, tweet];
  console.log(tweets);

  // Imprimir el arreglo de tweets en HTML
  renderHTML();

  // Reiniciar el textarea
  form.reset();

}

// Mostrar un error
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

// Mostrar tweets en el contenedor HTML
function renderHTML(){
  if (tweets.length > 0){
    limpiarHTML();
    tweets.forEach( tweet => {
      // Crear HTML
      const li = document.createElement('li');
      li.classList.add('tweet');
      li.textContent = tweet.tweet;

      // Insertar
      contenedorTweets.appendChild(li);
    });
  }

  sincronizarStorage();
}

// Limpiar el contenedor HTML de tweets
function limpiarHTML(){
  while(contenedorTweets.firstChild){
    contenedorTweets.removeChild(contenedorTweets.firstChild);
  }
}


// Agrega los tweets actuales a local storage
function sincronizarStorage(){
  localStorage.setItem('tweets', JSON.stringify(tweets));
}