// Destructuring de Arrays


// DESTRUCTURING DE OBJECTOS
const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
  impuesto: 21,
  get precioConIVA(){
    // el método toFixed te permite redondear en decimales pero convierte el dato a string
    // añades el + antes del número para parsear de string a número otra vez
    return +((this.precio / this.impuesto) + this.precio).toFixed(2);
  },
}

// puedes hacer lo mismo pero haciendo destructuring de varias propiedades al mismo tiempo
// aquí extraes las propiedades: precio, precioConIVA y nombre del objeto producto
// y las asignas en una variable para cada propiedad respectivamente
const {precio, precioConIVA, nombre} = producto;

console.log(nombre, `\nPrecio: ${precio}€\n`, `Precio con IVA: ${precioConIVA}€`);



// DESTRUCTURING DE ARREGLOS

// el destructuring de arreglos no funciona como el de objetos. Los arreglos funcionan por posición
// así que el nombre que indiques referenciará a la posición del arreglo en cuestión
const numeros = [10,20,30,40,50];

// si añadimos una coma, nos permitirá omitir esa posición sin tener que asignarla a una variable
// De esta forma podemos escoger los items del arreglo que queramos.

const [ , , tres, , cinco] = numeros;

// También podemos hacer el método declarativo para recorrer el array desde cierta posición.
// Esto nos permite crear otro array desde la posición que queramos.
const [primero, segundo, ...tercero] = numeros;

console.log(tres, cinco);
console.table(tercero);
