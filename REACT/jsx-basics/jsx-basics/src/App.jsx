import './App.css'
import { dataRender } from './data/infoapp.data'
import { TextCustom } from './components'
import { useState } from 'react'

function renderTextCustomHora (){
  const hora = new Date().getHours();
  if(hora >=6 && hora <=12){
    return dataRender.map((item,index) =>(
      <TextCustom
        key={index} frase = {item.mañana}
      />
    ))
  }
  else if(hora >=13 && hora <=19){
    return dataRender.map((item,index) =>(
      <TextCustom
        key={index} frase = {item.tarde}
      />
    ))
  }
  else {
    return dataRender.map((item,index) =>(
      <TextCustom
        key={index} frase = {item.noche}
      />
    ))
  }
}


function App() {
  const [count, setCount] = useState(false);
  return (
    <>
      <div>
      {renderTextCustomHora()}
      </div>

        <button onClick={() => setCount((count) => setCount(!count))}>
        Pulsa para cambiar el estado del botón
        </button>

        <div>
      {count ? <TextCustom frase={"El estado del boton es true"} />:null }
      </div>
      
    </>
  )
}

export default App
