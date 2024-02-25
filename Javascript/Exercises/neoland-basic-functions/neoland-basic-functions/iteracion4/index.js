/* Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numbers) {
    let total = 0;
numbers.forEach(number => {
    

    total += number;

});
return total/numbers.length;

}

console.log(`El promedio de nuestros números es ${average(numbers)}`);
