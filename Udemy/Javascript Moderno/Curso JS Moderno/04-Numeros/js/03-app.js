// Objeto Math

// El objeto Math es un objeto con una serie de funciones y de constantes
// muy útiles a la hora de trabajar con números y operaciones

let resultado;

// Número PI
resultado = Math.PI;

// Redondear hacia arriba desde .5
resultado = Math.round(2.8); //Redondea hacia arriba
resultado = Math.round(2.2); //Redonde hacia abajo
resultado = Math.round(2.5); //Redonde hacia arriba

// Redondear siempre hacia arriba
resultado = Math.ceil(2.1);

// Redondear siempre hacia abajo
resultado = Math.floor(2.9);

// Raiz cuadrada
resultado = Math.sqrt(144);

// Valor Absoluto o Módulo
resultado = Math.abs(-500); // Ignora el negativo para extraer el módulo del número

// Potencia
resultado = Math.pow(8, 3); // 8 al cubo = 512
resultado = Math.pow(2, 4); // 2 con potencia de 4 = 16

// Mínimo
// Si tenemos una serie de números y queremos saber cual es el mínimo
resultado = Math.min(3,5,8,15); // Nos devuelve 3
resultado = Math.min(3,5,8,15, -5); // Nos devuelve -5

// Máximo
// Si tenemos una serie de números y queremos saber cual es el máximo
resultado = Math.max(3,5,8,15, -5); // Nos devuelve 15


// Número aleatorio / Random
// Nos devuelve un número aleatorio decimal por debajo de 0
resultado = Math.random();

// Aleatorio dentro de un rango
resultado = Math.floor(Math.random() * 30); // Num random del 0 al 30



console.log(resultado);