/* Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. 
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
Retorna el array resultante. */

['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function swap(array,indice1,indice2){
    let aux;
    aux =array[indice1]
    array[indice1] = array[indice2]
    array[indice2] = aux
    return array;

}

console.log(swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'],1,3))