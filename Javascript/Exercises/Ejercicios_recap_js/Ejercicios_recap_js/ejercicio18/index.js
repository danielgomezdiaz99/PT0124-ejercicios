/* 18.	A	partir	de	este	array	de	números,	ordena	la	secuencia	en	forma	
creciente	y	luego	filtra	números	menor	de	10.	  */

let	num	=	[100,	2,	20,	35,	4,	44];

let numOrdenados = num.sort(function(a, b){return a - b});
let numOrdenadorMenorDiez = numOrdenados.filter((numero)=>numero<10)

console.log(numOrdenadorMenorDiez);