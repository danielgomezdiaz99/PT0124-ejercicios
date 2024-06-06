import "./Notice.css"

export const Notice = ({author, title , url, urlToImage}) => {
  return (
    <figure className="notice">
      <div className="cabezera-noticia">
         <h3>{title}</h3>
      </div>
         <a href={url}>
        <img src={urlToImage} alt= {title }/>
        </a>
      <div className="pie-noticia">
        <p> {author}</p>
        </div>
    </figure>
  )
}
