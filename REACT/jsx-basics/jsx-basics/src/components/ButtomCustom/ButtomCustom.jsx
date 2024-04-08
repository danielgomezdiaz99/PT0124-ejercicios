import "./ButtomCustom.css"

export const ButtomCustom = ({state, setState ,textButtom}) =>{
    return (
        <button onClick ={()=>setState()}>
            {textButtom}
        </button>
    )
}