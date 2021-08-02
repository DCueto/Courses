// Diferencias

// En la function declaration podemos llamar la función antes de declararla, en la function expression NO.
// Javascript se ejecuta en dos vueltas (hoisting). La primera vuelta JS escanea todo el documento y
// registra todas las funciones y variables (etapa de creación). La segunda vuelta, es cuando se ejecuta el código.

// Las function expression no se registran en la etapa de hoisting. Solo se guarda el nombre de la variable,
// no la función asignada a esa variable.
// Ejemplo de registro: "const sumar2;"

// Declaración de Función ( Function Declaration )
sumar();
function sumar(){
  console.log(2 + 2);
}


// Expresión de Función ( Function Expression )

const sumar2 = function(){
  console.log(3 + 3);
}
sumar2();