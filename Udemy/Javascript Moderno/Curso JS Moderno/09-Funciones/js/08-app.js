// Funciones que retornan valores

function sumar(a, b){
  return a + b;
}

const resultado = sumar(2, 3);

console.log(resultado);


// Ejemplo

let total = 0;

function agregarCarrito(precio){
  return total += precio;
}

function calcularImpuesto(total){
  return total * 1.21;
}

agregarCarrito(300);
agregarCarrito(100);
agregarCarrito(800);

console.log(total);

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de ${totalPagar}€`);
