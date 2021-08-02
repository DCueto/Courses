
// Parámetros y Argumentos de una función

// Los parámetros son variables sin valor asignadas a la función. Luego les podremos dar valores a esos
// parámetros con los argumentos.
// Los argumentos son el valor que les pasamos a las funciones, asignándolas a las variables declaradas.

function sumar(n1, n2){ // n1 y n2 són parámetros
  console.log(n1 + n2);
}

sumar(4, 5); // 4 y 5 son argumentos

sumar(340, 198);



function saludar(nombre, apellido){
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Daniel", "Cueto");
saludar("Daniel"); // Imprimirá undefined en el parámetro apellido -> Hola Daniel undefined
