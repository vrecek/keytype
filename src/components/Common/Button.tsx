import ButtonOptions from "@/interfaces/Common/ButtonTypes"


const Button = ({ children, clickFn }: ButtonOptions) => {
    return (
        <button onClick={ clickFn }>

            <p>{ children }</p>

        </button>
    )
}


export default Button