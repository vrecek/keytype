import { GameValuesType, GuessedNr } from "@/interfaces/Game/GameTypes"
import ParagraphHeader from "./ParagraphHeader"
import React from "react"
import { GameContext } from "../Game"


const GuessedWords = ({ guessedWords }: GuessedNr) => {
    const {hasFinished} = React.useContext(GameContext)?.gameState as GameValuesType
    const wordsParagraph = React.useRef<HTMLParagraphElement>(null)

    React.useEffect(() => {
        if (hasFinished)
            wordsParagraph.current!.style.color = 'rgb(13, 217, 71)'

    }, [hasFinished])


    return (
        <section className="guessed-words">

            <ParagraphHeader>Words</ParagraphHeader>
            <p ref={ wordsParagraph }>
                { guessedWords }
            </p>            

        </section>
    )
}


export default GuessedWords