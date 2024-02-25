/* Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string 
y lo sume. Puedes usar este array para probar tu función: */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let total=0;
param.forEach(element => {
    if(typeof element == "string"){

        total += element.length;
    }
    else if(typeof element == "number"){
        total +=element;
    }
});

return total;

}

console.log(`La suma de los número y la longitud de las cadenas del array es ${averageWord(mixedElements)}`);