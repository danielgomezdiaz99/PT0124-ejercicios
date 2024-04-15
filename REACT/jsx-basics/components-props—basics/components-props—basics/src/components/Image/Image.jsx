export const Image = (props) =>{
    return (
        <div>
            <img src={props.src} alt={props.alt} height={props.height} width={props.width}></img>
        </div>
    )

}