
// Parámetros en Arrow Functions

const aprendiendo = function(tec, tec2){
  console.log(`Aprendiendo ${tec} y ${tec2}`);
}
aprendiendo("Javascript", "Node.js");

// ARROW FUNCTION
const aprendiendo2 = (tec, tec2) => `Aprendiendo ${tec} y ${tec2}`;
console.log(aprendiendo2("JS", "Node.js"));

// Si le pasas solamente un parámetro a tu arrow function, los parántesis son opcionales.
const aprendiendo3 = tec => `Aprendiendo ${tec}`;
console.log(aprendiendo3('NodeJS'));