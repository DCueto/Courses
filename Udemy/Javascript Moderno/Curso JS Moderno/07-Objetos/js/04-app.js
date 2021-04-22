// DESTRUCTURING DE OBJETOS

const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
  "impuesto añadido": 21,
  impuesto: 21,
  get precioConIVA(){
    // el método toFixed te permite redondear en decimales pero convierte el dato a string
    // añades el + antes del número para parsear de string a número otra vez
    return +((this.precio / this.impuesto) + this.precio).toFixed(2);
  },
  numero1: 1,
  test_nombre: "test",
  numero2: 342424,

}

// Esta era la metodología anterior para asignar el valor de una propiedad de un objeto
// a una variable
const nombre = producto.nombre;
console.log(nombre);


// DESTRUCTURING

// Con ECMAScript tenemos una nueva forma conocida como object destructuring
// es decir, extraer del objecto y asignar en una variable en un mismo paso.

const { disponible } = producto;
console.log(disponible);

// puedes hacer lo mismo pero haciendo destructuring de varias propiedades al mismo tiempo
// aquí extraes las propiedades: precio, precioConIVA y nombre del objeto producto
// y las asignas en una variable para cada propiedad respectivamente
const { numero1, numero2, test_nombre} = producto;

console.log(numero1, numero2);
console.log(test_nombre);

// también puedes hacer destructuring asignando otro nombre de variable
// aka usando un alias

const {precio: price, nombre: name, precioConIVA: taxed_price} = producto;

console.log(`El producto ${name} con un precio sin iva de ${price}€, cuesta un total de:
\nPrecio Total: ${taxed_price}€`);

