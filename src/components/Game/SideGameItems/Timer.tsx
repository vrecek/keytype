import React from "react"
import ParagraphHeader from "./ParagraphHeader"
import { GameContext } from "../Game"
import { GameContextType } from "@/interfaces/Game/GameTypes"
import { getGameTime, incrementGameTime, initGameTime } from "@/functions/gameTime"
import secondsToStringTime from "@/functions/secondsToStringTime"


const Timer = () => {
    const { gameState } = React.useContext(GameContext) as GameContextType
    const [timeInterval, setTimeInterval] = React.useState<any | null>(null)
    const timerRef = React.useRef<HTMLParagraphElement>(null)

    React.useEffect(() => {
        const timeParagraph = timerRef.current! as HTMLParagraphElement

        // If the game just started... (user started typing)
        if (gameState.hasStarted && !gameState.hasFinished) {

            // Starts the game's timer
            initGameTime()

            // Set the interval as a state, just to stop it easily after the game ends
            setTimeInterval(setInterval(() => {
                incrementGameTime()

                // Calculate the current time & Display actual time on the paragraph
                timeParagraph.textContent = secondsToStringTime(getGameTime())
            }, 1000))
        }

        // If the game just ended...
        else if (gameState.hasFinished) {
            
            // Stop the timer
            clearInterval(timeInterval)

            // Mark the final time
            timeParagraph.style.color = 'rgb(13, 217, 71)'
        }

    }, [gameState.hasStarted, gameState.hasFinished])

    
    return (
        <section className="timer">

            <ParagraphHeader>Timer</ParagraphHeader>
            <p ref={ timerRef }>00:00</p>

        </section>
    )
}


export default Timer