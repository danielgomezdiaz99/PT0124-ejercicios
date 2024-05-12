import "./Read.css"

export const Read = ({read}) => {
  return (
    <>
    <h3>Libros:</h3>
    <p>Título: {read.title}</p>
    <p>Autor: {read.authorName}</p>
    <p>Apellido: {read.authorSurname}</p>
    <p>Género: {read.genre}</p>
    <p>Día de publicación: {read.dateOfPublication}</p>
    <p>Día de nacimiento del Autor: {read.authorBirthDate}</p>
    <p>Imagen del libro: {read.bookImage}</p>
    <h4>Otros Libros</h4>
    {read.otherBooks.map((el, index)=>{
      return  <p key={index}>{el.info}</p>
    })}
    </>
  )
}
  