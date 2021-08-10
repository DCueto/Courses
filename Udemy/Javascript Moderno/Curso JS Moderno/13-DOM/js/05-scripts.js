// querySelectorAll
// Funciona igual que .querySelector, con la diferencia que este nos devuelve una lista de elementos
// con el selector que compartan
// Sería como un getElementsByClassName pero infinitamente superior.

// querySelectorAll nos retorna un array con todos los elementos que cumplan el selector

const cards = document.querySelectorAll('.card');
console.log(cards);

// Si un elemento no existe
// retorna un array vacío
const noExiste = document.querySelectorAll('.no-existe');
console.log(noExiste);