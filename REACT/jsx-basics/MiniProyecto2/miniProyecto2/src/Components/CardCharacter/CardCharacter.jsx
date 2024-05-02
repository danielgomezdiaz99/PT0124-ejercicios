import "./CardCharacter.css"

export const CardCharacter = ({image, name , origin, status}) => {
  return (
    <figure>
        <img src={image} alt= {name}/>
        <h3>Name: {name}</h3>
        <h3>Origin: {origin}</h3>
        <h3>Status: {status}</h3>
    </figure>
  )
}
