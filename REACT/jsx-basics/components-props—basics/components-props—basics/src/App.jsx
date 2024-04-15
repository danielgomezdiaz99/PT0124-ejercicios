import './App.css'
import gato from '/gato.jpg'
import { Image,Paragraph,Subtitle,Title } from './components'
function App() {
  const title = "Los mejores gatos";
  const subtitle1 = "¡Aquí puedes descubrir todo sobre tu amigo peludo";
  const subtitle2 = "Regalos para gatos";
  const src = gato
  const alt="image"
  const height = "250px"
  const width = "250px"
  const paragraph = "Estas son fechas señaladas en las que los regalos tienen un papel muy especial. Los que tenemos gatos y los queremos como a un miembro más de la familia, solemos pensar cuáles son los mejores regalos para gatos. ¡En este post te doy las mejores opciones de regalos!"

  return (
    <>
     <div>
        <Title title={title}/>
        <Subtitle subtitle = {subtitle1} />
        <Image src={src} alt={alt} height={height} width ={width} paragraph={paragraph}/>
        <Subtitle subtitle = {subtitle2} />
        <Paragraph paragraph = {paragraph} />
     </div>
    </>
  )
}

export default App
