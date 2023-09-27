import IconOptions from "@/interfaces/Common/IconTypes"


const Icon = ({ src, clickFn, cname }: IconOptions) => {
    return (
        <span onClick={ clickFn } className={ cname }>

            { src }

        </span>
    )
}


export default Icon