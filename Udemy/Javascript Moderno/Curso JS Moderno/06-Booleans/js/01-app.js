const boolean1 = true;
const boolean2 = false;
const boolean3 = "true"; //No es un booleano, es un string.

console.log(boolean1);
console.log(boolean2);

console.log(typeof boolean1);

console.log(boolean3);
console.log(typeof boolean3); //Devuelve string

const boolean4 = new Boolean(true); //Nos crea un objeto de tipo boolean
console.log(boolean4);
console.log(typeof boolean4); //Nos devuelve tipo objeto, no tipo boolean.

console.log("Comparando booleanos - string/boolean");
// Comparamos si boolean3 (string) es igual a boolean1 (boolean) con comparador
// normal y estricto
console.log(boolean3 == boolean1);
console.log(boolean3 === boolean1);
// Los dos retornan false.

console.log("Comparando booleanos - constructor_new/boolean");
// Comparamos si boolean4 (con constructor de objeto) es igual a
// boolean1 (boolean) con comparador normal y estricto
console.log(boolean4 == boolean1); //Nos devuelve true
console.log(boolean4 === boolean1); 
//Con el estricto nos devuelve false ya que object es diferente a boolean.
