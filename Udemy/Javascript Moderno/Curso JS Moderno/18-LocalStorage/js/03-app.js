// Eliminar elementos de LocalStorage con .removeItem()

console.log(localStorage);
localStorage.removeItem('nombre');
console.log(localStorage);

// Las aplicaciones web deben de listar, agregar, eliminar y actualizar elementos.
// CRUD -> Crear, leer, actualizar, eliminar (Create, Read, Update, Delete)

// En el caso de localStorage, no hay un update.

// para actualizar un registro:

// obtenemos el registro
const newElement = 'Nuevo Elemento';
let mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);

// Verificamos que no se repita el mismo elemento en localstorage al actualizar
if(localStorage.getItem('meses').includes(newElement)){
  console.log(`${newElement}: Elemento ya existente`);
} else{
  // modificamos el elemento
  mesesArray = [...mesesArray, newElement];
  // reemplazamos el registro
  localStorage.setItem('meses', JSON.stringify(mesesArray));
  console.log(localStorage.getItem('meses'));
}


// Para limpiar todo el LocalStorage, solo tenemos que usar el método:
// localstorage.clear()