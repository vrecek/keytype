import { GameContextType, GameValuesType } from "@/interfaces/Game/GameTypes"
import React from "react"
import { BiPencil } from "react-icons/bi"
import { GameContext } from "../Game"


const WriteToBox = () => {
    const { gameState, switchGameState } = React.useContext(GameContext) as GameContextType
    const inputRef = React.useRef<HTMLInputElement>(null)


    React.useEffect(() => {

        // Disable and clear the input if the game is finished
        if (gameState.hasFinished) {
            inputRef.current!.disabled = true
            inputRef.current!.value = ''
        }

    }, [gameState.hasFinished])
    

    const keyHandler = (): void => {

        // Start the game if the input is touched for the first time
        if (!gameState.hasStarted)
            switchGameState((state: GameValuesType) => {
                state.hasStarted = true

                return { ...state }
            })
    }


    return (
        <div className="write-to-box">

            <input
                ref={inputRef}
                type='text'
                spellCheck='false'
                onKeyDown={ keyHandler }
            />

            <BiPencil />

        </div>
    )
}


export default WriteToBox