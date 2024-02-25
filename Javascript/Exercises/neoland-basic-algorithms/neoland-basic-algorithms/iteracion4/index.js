//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

let hulk = avengers[0];

console.log (`${hulk}`);

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

avengers1[0]= "IRONMANS"

console.log(console.log (`${avengers1}`));

//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

console.log(`${avengers2.length}`)

//1.4 Añade 2 elementos al array: "Morty" y "Summer". 
//Muestra en consola el último personaje del array

const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry"];

console.log(`${rickAndMortyCharacters1[rickAndMortyCharacters1.length-1]}`)

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters2.pop();
//Elimino el útimo elemento con array pop y muestro por consola el primer elemento y el último
console.log(console.log (`${rickAndMortyCharacters2[0]}`));
console.log(console.log (`${rickAndMortyCharacters2[rickAndMortyCharacters2.length-1]}`));

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"]

rickAndMortyCharacters3.splice(1,1)

console.log(`${rickAndMortyCharacters3}`);
