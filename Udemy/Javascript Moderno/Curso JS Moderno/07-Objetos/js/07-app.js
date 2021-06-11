
const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
}

console.log(producto);

// Generalmente no podemos modificar un const. Si reasignamos una variable const nos saltará
// un error en consola
// const nombreProducto = "Monitor";
// nombreProducto = "tablet";


// El problema de los objetos es que si que puedes reasignar valores de un const
// tal que así:

producto.disponible = false;
console.log(`Se ha modificador el valor de dispnibilidad: ${producto.disponible}`);

// o también se puede eliminar datos de un objeto declarado con const
delete producto.precio;

console.log(producto);