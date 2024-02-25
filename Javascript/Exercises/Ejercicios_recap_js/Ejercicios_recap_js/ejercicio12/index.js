/* 12.	Calcular	la	serie	de	fibonacci	que	devuelve	hasta	-n-	números	en	un	
array.	 */

function fibonacci(num){
 let numFibonacci = [];
for(let i = 0; i<num ;i++){
    if(i>1)
        numFibonacci.push((numFibonacci[i-1])+(numFibonacci[i-2]))
    else

    numFibonacci.push(i)
}
return numFibonacci;
}

console.log(fibonacci(19))