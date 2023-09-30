import GuessedWords from "../SideGameItems/GuessedWords"
import Timer from "../SideGameItems/Timer"
import TextBox from "./TextBox"
import WriteToBox from "./WriteToBox"
import '@/css/GameBox.css'


const TypeTextBoxContainer = () => {
    return (
        <section className="type-text-box-container">

            <h1>Start typing to start</h1>

            <GuessedWords />

            <div className="main-game-wrap">

                <WriteToBox />
                <TextBox />

            </div>

            <Timer />

        </section>
    )
}


export default TypeTextBoxContainer