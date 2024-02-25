/* 7.	Crea	dos	arrays	y	declara	una	función	que	junte	estos	dos	
arrays	en	uno.	 */

let array1 = ['perro','gato','tigre'];
let array2 = ['rata','delfin','ballena'];

function sumarray(array1,array2){
    let array3=array1.concat(array2)
    return array3
}



console.log(sumarray(array1,array2))
