
// Parámetros por defecto

// Si asignamos un valor a los parámetros. La función utilizará esos valores en vez de aplicar "undefined"
// si no se le pasa nada como argumento.

function saludar(nombre = "Desconocido", apellido = ""){
  console.log(`Hola ${nombre} ${apellido}`);
}

saludar("Daniel", "Cueto");
saludar("Daniel");
saludar();
