// Dos formas de declarar un array

// Con corchetes
const numeros = [10, 20, 30];

// Con new
const meses = new Array('Enero', 'Febrero', 'Marzo');

// Los arreglos usan una cosa que se llaman índices
// es decir, la posición de ese elemento en el arreglo
// Los arreglos inician en 0
console.log(numeros);
console.log(meses);

// Arreglo que contiene datos de todo tipo
const deTodo = ["Hola", 10, true, "si", null, {nombre: 'Dani', trabajo: 'Frontend Dev'}, [1,2,3]];
console.log(deTodo);

// Podemos acceder al objeto dentro del array e imprimir la propiedad trabajo
console.log(deTodo[5].trabajo);

let persona = {
  nombre: "Andrea",
  edad: 24,
  soltera: true,
  cosasTech: ["Ordenador", "Movil", "Tablet"],
  coche: {
    marca: "Toyota",
    modelo: "XD",
    precio: 50000,
    tipo: "eléctrico",
  }
}

console.log(persona.coche);
console.log(persona.cosasTech[2]);

console.table(persona.cosasTech);
console.table(persona);