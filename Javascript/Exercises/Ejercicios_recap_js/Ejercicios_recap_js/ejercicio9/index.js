/* 9.	Dados	estos	3	arrays	con	subarrays	anidados,	resuelve	a,	b	y	c. */

let array1 = [1, 2, [3, 4]];
let array2 = [1, 2, [3, 4, [5, 6]]];

//a.	convertir	array1	en	un	solo	array

array1.push(array1[2][0],array1[2][1])
array1.splice(2,1)

console.log(array1)

//b.	convertir	array2	en	un	array	con	los	4	primeros	elementos	del	
//array	y	un	subarray	anidado	del	último	[5,6]

let array3 = array2.flat();
console.log(array3)
//c.	convertir	array3	en	un	solo	array

let array4=array3.flat()
console.log(array4)