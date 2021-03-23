// AÑADIR ELEMENTOS DE FORMA DECLARATIVA (nuevo en ecmascript 6), 
// AÑADIMOS ELEMENTOS SIN MODIFICAR EL ARREGLO ORIGINAL


// VAMOS A HACER UN CARRITO DE COMPRAS

// El carrito está vacío.
// Esta variable no se va a modificar.
const carrito = [];

// Definimos los productos
const producto = {
  nombre: "Monitor 32 pulgadas",
  precio: 400,
}

const producto2 = {
  nombre: "Smartphone",
  precio: 800,
}

const producto3 = {
  nombre: "Teclado",
  precio: 50,
}



let resultado;

// Esto termina haciendo lo mismo que el método .push pero 
//sin modificar el array original (carrito)

// Esto añade el nuevo elemento al final del array
resultado = [carrito, producto];

resultado = [...resultado, producto2];


// Esto añade el nuevo elemento al inicio del array
resultado = [producto3, ...resultado];

// Ahora, ¿que hacen los tres puntitos que le ponemos al principio del arreglo?
// Facil, si no pusieramos los puntitos añadiriamos un elemento de tipo array dentro de otro array
// En cambio, si le ponemos los puntitos, va a recorrer ese array y lo va a introducir en el otro array
console.table(resultado);
