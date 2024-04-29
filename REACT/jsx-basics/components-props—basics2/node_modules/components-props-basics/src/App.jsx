import './App.css'
import gato from '/gato.jpg'
import { Header, Title, Subtitle, Main, Footer,Paragraph,Image } from './components';
function App() {

  return (
    <>
   <Header>
      <Title title = 'Este es mi titulo'/>
      <Subtitle subtitle ='Este es mi subtitulo'/>
   </Header>
    <Main>
    <Image src={gato} alt='gato' height='250px' width='250px' />
    <Paragraph paragraph='Este es mi parrafo'/>
    </Main>
    <Footer>
      <Paragraph paragraph="© 2024 Todos los derechos reservados."/>
    </Footer>
    </>
  )
}

export default App
