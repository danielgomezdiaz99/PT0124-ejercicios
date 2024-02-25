/* Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  
Puedes usar este array para probar tu función: */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(array) {

        //const resultado = array.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
        const resultado = {};
for (let i = 0; i < array.length; i++) {
   
    const cur = array[i];
    
    if (resultado[cur]) {
        resultado[cur] = resultado[cur] + 1;
    } else {
        resultado[cur] = 1;
    }
}
 
        return resultado;
  
  }

  console.log(repeatCounter(counterWords));