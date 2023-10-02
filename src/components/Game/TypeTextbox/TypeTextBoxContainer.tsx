import React from "react"
import { GameContext } from "../Game"
import GuessedWords from "../SideGameItems/GuessedWords"
import Timer from "../SideGameItems/Timer"
import TextBox from "./TextBox"
import WriteToBox from "./WriteToBox"
import '@/css/GameBox.css'
import { GameContextType } from "@/interfaces/Game/GameTypes"


const TypeTextBoxContainer = () => {
    const { gameState } = React.useContext(GameContext) as GameContextType
    

    return (
        <section className="type-text-box-container">

            { !gameState.hasStarted && <h1>Start typing to start</h1> }
            { gameState.hasFinished && <h1>Game finished</h1> }

            <GuessedWords guessedWords={ gameState.guessedWords } />

            <div className="main-game-wrap">

                <WriteToBox />
                <TextBox text={ gameState.text } />

            </div>

            <Timer />

        </section>
    )
}


export default TypeTextBoxContainer