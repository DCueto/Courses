// Obtener datos de LocalStorage con localstorage.getItem()

const nombre = localStorage.getItem('nombre');
console.log(nombre);

// si intentamos obtener un dato inexistente, nos devolverá "null"
console.log(localStorage.getItem('nombre2'));


// JSON A OBJETO
const personaJSON = localStorage.getItem('persona');
console.log(personaJSON);

// Con JSON.parse() podemos obtener un string JSON al formato de un Objeto de JS
const persona = JSON.parse(personaJSON);
console.log(persona);
console.log(persona.pais);


// STRING A ARRAY
const stringMeses = localStorage.getItem('meses');
console.log(stringMeses);

// También podemos usar JSON.parse() para convertir un string a un arreglo
const meses = JSON.parse(stringMeses);
console.log(meses);



// TESTEO CON STRING METHODS
let meses2 = stringMeses;
meses2 = meses2.replace("[", "").replace("]", "");
console.log(meses2);

while(meses2.includes('"')){
  meses2 = meses2.replace('"','');
}

const arrayMeses = meses2.split(',');
console.log(arrayMeses);