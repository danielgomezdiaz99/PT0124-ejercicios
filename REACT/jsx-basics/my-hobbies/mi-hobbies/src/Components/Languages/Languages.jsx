import "./Languages.css"

export const Languages = ({languages}) => {
  return (
    <>
    <h3>Lenguajes: </h3>
    <p>Lenguaje: {languages.language}</p>
    <p>Nivel Escrito: {languages.wrlevel}</p>
    <p>Nivel Hablado: {languages.splevel}</p>
    </>
  )
}
