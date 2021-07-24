// Object Methods
// .keys .values .entries

const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function(){
    console.log(`El Producto ${this.nombre} tiene un precio de: ${this.precio}€`);
  },
  medidas: {
    pulgadas: 20, //pulgadas
    ancho: 150, //cm
    alto: 100, //cm
    peso: 3, //kg
  },
}

// Object.keys() nos devuelve un array con los nombres de llaves de nuestro objeto
console.log(Object.keys(producto));

// Object.values() nos devuelve un array con los valores de un objeto
console.log(Object.values(producto));

// Object.entries() nos devuelve un array con la llave:valor de cada propiedad del objeto
// Cada propiedad del objeto se devuelve en un array dentro del array devuelto por object.entries()
console.log(Object.entries(producto));