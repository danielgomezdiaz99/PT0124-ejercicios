
export const Image = (props) =>{
    return (
        <div>
            <img src={props.src} alt={props.alt} className={props.className}></img>
        </div>
    )

}