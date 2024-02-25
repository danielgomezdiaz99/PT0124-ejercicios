/* 19.	A	partir	de	un	array	de	números,	devolver	la	suma	de	los	números	
presentes	en	el	array	inicial. */

let	num	=	[100,2,20,	35,	4,	44];

let sumNUm = num.reduce((acumulador,numero) => acumulador+numero)

console.log(sumNUm)