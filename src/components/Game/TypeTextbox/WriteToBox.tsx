import { GameContextType, GameValuesType, WordsHandleType } from "@/interfaces/Game/GameTypes"
import React from "react"
import { BiPencil } from "react-icons/bi"
import { GameContext } from "../Game"
import { getGameTime } from "@/functions/gameTime"


const WriteToBox = () => {
    const { gameState, switchGameState } = React.useContext(GameContext) as GameContextType
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [textObject, setTextObject] = React.useState<WordsHandleType>({
        // actualWords: gameState.text.split(/(\s+)/), // Including spaces
        actualWords: gameState.text.split(' '), // Excluding spaces
        currentIndex: 0
    })


    React.useEffect(() => {

        // Disable and clear the input if the game is finished
        if (gameState.hasFinished) {
            inputRef.current!.disabled = true
            inputRef.current!.value = ''
        }

    }, [gameState.hasFinished])


    const keyHandler = (e: React.ChangeEvent): void => {

        // Start the game if the input is touched for the first time
        if (!gameState.hasStarted) {
            switchGameState((state: GameValuesType) => {
                state.hasStarted = true

                return { ...state }
            })
        }

        const input = e.target! as HTMLInputElement,
              word: string = input.value

              
        // If the word is spelled correctly
        if (word === textObject.actualWords[0]) {
            const newSpan: Element = document.createElement('span'),
                textContainer: HTMLElement = input.parentElement!.parentElement!.children[1] as HTMLElement,
                currentSpan: HTMLElement = textContainer.children[0] as HTMLElement


            // Scroll the box if the text is slowly being not visible
            if (currentSpan.offsetHeight > (textContainer.clientHeight - 100) + textContainer.scrollTop)
                textContainer.scrollTop += 100


            // Get the word's index
            const location = gameState.text.indexOf(word, textObject.currentIndex)

            // Delete the current span by setting the textContent to the "text" but excluding the current guessed word
            textContainer.textContent = gameState.text.slice(location + word.length)

            // Get the current guessed words (in the span)
            // and update it by adding the current guessed word
            newSpan.textContent = `${currentSpan.textContent} ${word} `
            textContainer.prepend(newSpan)


            // Update the array of words, and the total guessed words, as well as the current index
            setTextObject((curr: WordsHandleType) => {
                curr.actualWords.splice(0, 1)
                curr.currentIndex = location + word.length

                return { ...curr }
            })
            switchGameState((state: GameValuesType) => {
                state.guessedWords++

                return { ...state }
            })

            setTimeout(() => {
                input.value = ''

                // If the user typed every word (game finished) 
                if ( !(textObject.actualWords.length) ) {
                    switchGameState((state: GameValuesType) => {
                        state.time = getGameTime()
                        state.hasFinished = true

                        return { ...state }
                    })
                }

            }, 5)
        }
    }


    return (
        <div className="write-to-box">

            <input
                ref={inputRef}
                type='text'
                spellCheck='false'
                onChange={ keyHandler }
            />

            <BiPencil />

        </div>
    )
}


export default WriteToBox