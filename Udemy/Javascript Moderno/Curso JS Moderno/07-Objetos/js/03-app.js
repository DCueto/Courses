// AGREGAR / ELIMINAR PROPIEDADES

const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
  // se pueden añadir los nombre de propiedades entre comillas y con espacios
  "prueba propiedad": "prueba",
}

// Agregar nuevas propiedades a un objeto

// con notación de punto
producto.imagen = "imagen.jpg";

// con corchetes y comillas, para añadir una propiedad con un nombre con espacios
producto['impuesto añadido'] = 21;

console.log(producto);


// Eliminar propiedades de un objeto

delete producto.disponible;
delete producto['prueba propiedad'];

console.log(producto);

