/* 16.	Crea	una	función	que	nos	compruebe	si	una	frase	dada	es	un	
palíndromo.	
	*	Pistas:			
		-	pasar	la	frase	a	minúscula		
		-	convertir	en	array	para	recorrer	cada	elemento		
		-	eliminar	espacios	en	blanco	con	un	bucle		
		-	reverse()		
		-	comprobar	que	el	array	primero	y	su	reverse	son	iguales	y	sus	condiciones	
Mostrar	los	resultados	en	un	modal	para:	una	frase	palíndrom	y	otra	que	
no	lo	sea	 */


function comprobarPalindromo(frase){

frase=frase.toLowerCase();
let arrayFrase=frase.split("")

for(let i = 0;i<arrayFrase.length;i++){
    if(arrayFrase[i]==" ")
        arrayFrase.splice(arrayFrase.indexOf(arrayFrase[i]),1)
}
arrayInvertido = arrayFrase.reverse()
if(arrayFrase == arrayInvertido)
    alert("Es un palíndromo")
else{
    alert("No es un palíndromo")
}

}

comprobarPalindromo("Dábale arroz a la zorra el abad")