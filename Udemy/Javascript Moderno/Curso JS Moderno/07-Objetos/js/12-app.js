// Constructor de Objetos

const nombre = "NombreT";
const precio = 20;

// Object Literal
const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function(){
    console.log(`El Producto ${this.nombre} tiene un precio de: ${this.precio}€`);
  },
}

console.table(producto);

// Object Constructor
// Es más dinamico que el object literal
// Es la forma de programación orientada a objetos de JS de hace años,
// ahora hay clases para realizar el mismo trabajo de una mejor forma.

function Producto(nombre, precio){
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
  this.mostrarInfo = function(){
    console.log(`El Producto ${this.nombre} tiene un precio de: ${this.precio}€`);
  }
}

const producto2 = new Producto('Monitor de 24 Pulgadas', 500);
console.table(producto2);
producto2.mostrarInfo();

const producto3 = new Producto('Televisión', 900);
producto3.mostrarInfo();