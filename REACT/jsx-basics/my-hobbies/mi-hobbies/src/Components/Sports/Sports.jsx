import './Sports.css'

export const Sports = (name,indoor,team) => {
  return (
    <>
        <h3>Deportes</h3>
        <p>Nombre{name}</p>
        {indoor ? (
            <p>Este deporte se juega en interiores</p>
          ) : (
            <p>Este deporte se juega al aire libre</p>
          )
        }
        
        <p>Equipo Favorito {team}</p>
    </>
  )
}
