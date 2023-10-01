import '@/css/GameStyles.css'
import TypeTextBoxContainer from './TypeTextbox/TypeTextBoxContainer'
import React from 'react'
import { GameContextType, GameValuesType } from '@/interfaces/Game/GameTypes'
import GameSummary from './GameSummary/GameSummary'
import Scroll from 'react-scroll'


const GameContext = React.createContext<GameContextType | null>(null)

const Game = () => {
    const [gameState, setGameState] = React.useState<GameValuesType>({ hasFinished: false, hasStarted: false })

    React.useEffect(() => {

        // If the game has been finished, scroll to the results
        if (gameState.hasFinished) {
            Scroll.scroller.scrollTo('game-summary', {
                smooth: true,
                offset: -20,
                duration: 500
            })
        }
            
    }, [gameState.hasFinished])


    return (
        <main className="game-page">

            <GameContext.Provider value={{ gameState, switchGameState: setGameState }}>

                <TypeTextBoxContainer />

                {
                    gameState.hasFinished
                        && <GameSummary />
                }

            </GameContext.Provider>

        </main>
    )
}


export { GameContext }
export default Game