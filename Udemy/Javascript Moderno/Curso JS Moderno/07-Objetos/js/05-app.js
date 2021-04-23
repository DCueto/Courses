// Objetos dentro de Objetos
// AKA Objetos Anidados

const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
  impuesto: 21,
  get precioConIVA(){
    return +((this.precio / this.impuesto) + this.precio).toFixed(2);
  },
  // Objeto dentro de un objeto
  informacion: {
    // Objeto dentro de un objeto dentro de otro objeto
    medidas: {
      peso: '1kg',
      longitud: '1m',
    },
    // Objeto dentro de un objeto dentro de otro objeto
    fabricacion: {
      pais_origen: 'China',
    }
  },

}

// Acceder a los datos de objetos con notación de puntos

console.log(producto);

console.log(producto.informacion);
console.log(producto.informacion.medidas.peso);
console.log(producto.informacion.fabricacion);
console.log(producto.informacion.fabricacion.pais_origen);