import { CurrentText } from "@/interfaces/Game/GameTypes"


const TextBox = ({ text }: CurrentText) => {
    return (
        <div className="textbox">

            <span></span>

            { text }

        </div>
    )
}


export default TextBox