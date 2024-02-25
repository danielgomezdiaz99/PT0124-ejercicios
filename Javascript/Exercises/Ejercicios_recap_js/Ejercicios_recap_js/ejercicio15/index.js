/* 15.	Crea	una	función	que	nos	compruebe	si	una	frase	que	le	indiquemos	
tiene	todas	sus	letras	mayúsculas,	todas	sus	letras	minúsculas	o	tiene	
letras	mayúsculas	y	minúsculas.	Mostrar	el	resultado	y	la	frase	en	la	
consola. */

function checkMayus(phrase){
    let upptercase = false;
    let lowercase=false;

    for(let i = 0; i<phrase.length;i++){
        if(phrase[i] != " "){
            if(phrase[i] == phrase[i].toUpperCase())
                upptercase=true;
            else
                lowercase = true
            }
    }

    if(upptercase == true && lowercase == true){
        console.log(`La frase ${phrase} contiene tanto mayúculas como minúculas`)
    }
    else if(upptercase==true){
        console.log(`La frase ${phrase} solo contiene mayúculas`)
    }
    else{
        console.log(`La frase ${phrase} solo contiene minúsculas`)
    }
}

checkMayus('PRUEBA DE FRASE')