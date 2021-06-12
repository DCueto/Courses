// This
// Palabra reservada this
// Funciones en objetos

const nombre = "NombreT";
const precio = 20;

const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function(){
    console.log(`El Producto ${this.nombre} tiene un precio de: ${this.precio}€`);
  },
}

const producto2 = {
  nombre: "iPad Air",
  precio: 500,
  disponible: true,
  mostrarInfo: function(){
    console.log(`El Producto ${this.nombre} tiene un precio de: ${this.precio}€`);
  },
}


producto.mostrarInfo();
producto2.mostrarInfo();