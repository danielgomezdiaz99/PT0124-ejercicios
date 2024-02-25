/* 20.	A	partir	de	2	arrays,	compararlos	y	devolver	un	array	sin	duplicados	
a	través	de	una	función.	Ejemplo	a=[1,2,3,4],	b=[1,2]	Resultado	=	[3,	4]; */	


function removeDuplicate(array1,array2){
let arraySinDuplicados=[]
for (let i = 0;i<array1.length;i++){
    if(array2.includes(array1[i])==false)
        arraySinDuplicados.push(array1[i])
}
for (let i = 0;i<array2.length;i++){
    if(array1.includes(array2[i])==false)
        arraySinDuplicados.push(array2[i])
}
return(arraySinDuplicados)

}

console.log(removeDuplicate([1,2,3,4],[1,2]));

