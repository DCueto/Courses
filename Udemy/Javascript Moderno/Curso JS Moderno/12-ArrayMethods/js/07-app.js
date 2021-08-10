// .concat y Spread Operator para concatenar varios arrays en uno

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// .concat
// en el array method .concat, le puedes pasar como argumentos tantos arrays como quieras
// también le puedes pasar un nuevo valor para que lo introduzca en el array
// El orden a la hora de pasar los arrays es importante.
const resultado = meses.concat(meses2, meses3, 'Otro Mes');
console.log(resultado);


// spread operator
const resultado2 = [...meses, ...meses2, ...meses3, 'Otro Mes'];
console.log(resultado2);