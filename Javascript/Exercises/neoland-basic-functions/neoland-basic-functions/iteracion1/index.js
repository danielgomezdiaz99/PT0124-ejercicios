//Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
    if(numberOne>numberTwo)
        return numberOne
    else if (numberOne<numberTwo)
        return numberTwo
    else 
    return "Los número son iguales"
  }

  console.log(sum(10938,1876))
  console.log(sum(8,25))
  console.log(sum(1,1))