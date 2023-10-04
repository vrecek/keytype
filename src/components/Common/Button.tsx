import ButtonOptions from "@/interfaces/Common/ButtonTypes"


const Button = ({ children, cname, clickFn }: ButtonOptions) => {
    return (
        <button className={ cname } onClick={ clickFn }>

            <p>{ children }</p>

        </button>
    )
}


export default Button