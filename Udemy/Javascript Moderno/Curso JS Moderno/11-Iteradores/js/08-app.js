// Bucle for ...in
// Bucle for parecido a for ...of. En sintaxis se ven parecidos pero fundamentalmmente son diferentes.
// for ...of itera sobre ARREGLOS y, for ...in itera sobre OBJETOS.

const toDo = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const automovil = {
  marca: 'Porche',
  modelo: '911',
  fecha: 1990,
  motor: '8.0',
}

// En vez de devolvernos el item del array iterado, nos devuelve el índex
for( let item in toDo ) {
  console.log(item);
}

// Itera sobre el objeto y nos devuelve el nombre de la propiedad de cada iteración.
for( let propiedad in automovil){
  // Si queremos imprimir el valor sería: objeto[llave] -> automovil[propiedad]
  console.log(`${propiedad} : ${automovil[propiedad]}`);
}


// Iterador para objetos más sencillo que for ...in
// .entries nos saca las llaves y valores del objeto

for( let [llave, valor] of Object.entries(automovil)){
  console.log(llave);
  console.log(valor);
}