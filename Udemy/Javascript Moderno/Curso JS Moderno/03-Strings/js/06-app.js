const producto = 'Monitor 20 Pulgadas';

// .repeat te va a permitir repetir una cadena de texto
const texto = ' en Promoción';

// Si a .repeat le pasas un número que no sea entero, se redondea.
console.log(texto.repeat(2.4));

console.log(`${producto} ${texto.repeat(3)} !!!`);


// Split --- dividir un string

const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

// Listar una cadena de texto
const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
let listHobbies = hobbies.split(",");
console.log(listHobbies);

// Extraer el hashtag de un tweet con .split
const tweet = "Aprendiendo Javascript Moderno #JSModernoConJuan";
console.log(tweet.split("#"));