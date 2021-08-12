// Detectar cuando el HTML está listo

// Con .addEventListener('DOMContentLoaded') ejecutaremos el código una vez todo el contenido en el
// DOM esté cargado.
// Esto es muy importante para prevenir errores a la hora de cargar el JS cuando no hay ciertos elementos o datos
// que requerimos en nuestro código

console.log(1);
document.addEventListener('DOMContentLoaded', ()=>{
  console.log(2);
  console.log('Documento Listo');
});
console.log(3); 
// se ejecuta antes el 3 antes que el 2 porque el evento espera a que todos los recursos
// se carguen para ejecutar el código dentro del evento

