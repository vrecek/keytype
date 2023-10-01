import React from "react"
import ParagraphHeader from "./ParagraphHeader"
import { GameContext } from "../Game"
import { GameContextType } from "@/interfaces/Game/GameTypes"
import { getGameTime, incrementGameTime, initGameTime } from "@/functions/gameTime"


const Timer = () => {
    const { gameState, switchGameState } = React.useContext(GameContext) as GameContextType
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

                const currentTime: number = getGameTime()

                // Calculate the current time
                const m: number = Math.floor(currentTime / 60),
                      s: number = currentTime % 60


                // Display actual time on the paragraph
                timeParagraph.textContent = `0${m}`.slice(-2) + ":" +`0${s}`.slice(-2)
            }, 1000))
        }

        // If the game just ended...
        else if (gameState.hasFinished) {
            
            // Stop the timer
            clearInterval(timeInterval)

            // Mark the final results
            timeParagraph.style.color = 'rgb(21, 160, 67)'
        }

    }, [gameState.hasStarted, gameState.hasFinished])

    
    return (
        <section className="timer">

            <ParagraphHeader>Timer</ParagraphHeader>
            <p onClick={() => switchGameState(curr => { curr.hasFinished = true;return {...curr}})} ref={ timerRef }>00:00</p>

        </section>
    )
}


export default Timer