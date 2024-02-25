/* 8.	Crea	dos	arrays	y	declara	una	función	que	tome	estos	dos	
arrays,	saque	el	último	elemento	del	primero	y	lo	agregue	al	
segundo. */	

let array1 = ['perro','gato','tigre'];
let array2 = ['rata','delfin','ballena'];

function sumLastWord(array1,array2){
    array2.push(array1.pop());
    console.log(array2);
}

sumLastWord(array1,array2);