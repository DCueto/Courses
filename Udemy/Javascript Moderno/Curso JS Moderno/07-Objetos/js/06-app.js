// Destructuring de Objetos Anidados

const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
  impuesto: 21,
  get precioConIVA(){
    return +((this.precio / this.impuesto) + this.precio).toFixed(2);
  },
  informacion: {
    medidas: {
      peso: '1kg',
      longitud: '1m',
    },
    fabricacion: {
      pais_origen: 'China',
    }
  },
}

// Para hacer destructuring de objetos anidados, la sintaxis es tal que
// nombre_clave_objeto: { propiedad }
// los datos de nombre_clave_objeto no serán accesibles si indicamos el dato que queremos
// ya que estará creando la variable de la propiedad entre corchetes pero no la de
// el nombre_clave_objeto que habremos indicado

const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais_origen } } } = producto;

console.log(informacion);
console.log(fabricacion);
console.log(pais_origen);
