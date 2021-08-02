
// Comunicación entre funciones
initApp();

function initApp(){
  console.log("Iniciando app...");
  segundaFuncion();
}

function segundaFuncion(){
  console.log('Desde la segunda función');
  usuarioAutenticado("Daniel");
}

function usuarioAutenticado(usuario){
  console.log(`Autenticando usuario... Espere por favor.`);
  console.log(`Usuario autenticado exitosamente: ${usuario}`);
}