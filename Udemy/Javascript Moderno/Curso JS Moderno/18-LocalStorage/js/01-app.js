// Añadir elementos a localstorage

const persona = {
  nombre: 'Daniel',
  apellidos: 'Cueto Serrano',
  pais: 'España',
}

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

// Los datos alojados a localstorage se mantienen al cerrar el navegador o reiniciar el ordenador
// Los datos de session storage desaparacen una vez cerramos el navegador
// Fundamentalmente es la diferencia entre localstorage y sessionstorage

// Añadir datos a localstorage con localstorage.setItem()
// el primer argumento es el nombre de la llave y, el segundo argumento el valor de la llave

// localstorage solo almacena strings. Por lo tanto si almacenamos un número, lo convertirá y almacenará
// como un string
localStorage.setItem('nombre', 'Juan');
localStorage.setItem('numero', 1);
// no podemos guardar arreglos ni objetos.
localStorage.setItem('objeto', persona);
localStorage.setItem('array', meses);

// object to string
// lo que si podemos hacer es convertir un objeto en un string con JSON.stringify
const personaString = JSON.stringify(persona);
localStorage.setItem('persona', personaString);
// JSON nos permite alojar datos con un formato de objeto pero manteniendo todos los datos como un string
console.log(personaString);
console.log(typeof persona);
console.log(typeof personaString);

// array to string
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);
console.log(meses);