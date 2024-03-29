/* Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma 
longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(palabras) {
  let palabraMaslarga = "";
  let palabraAnterior = "";
  for (const palabra of palabras) {
    if (palabra.length > palabraMaslarga.length) {
      palabraMaslarga = palabra;
    }
    palabraAnterior = palabra;
  }
  return palabraMaslarga;
}

console.log(findLongestWord(avengers));
