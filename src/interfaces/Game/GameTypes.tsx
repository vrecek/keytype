import { generateRandomText } from "@/functions/randomText"

export type GameContextType = {
    gameState: GameValuesType
    switchGameState: React.Dispatch<React.SetStateAction<GameValuesType>>
}

export type GameValuesType = {
    hasStarted: boolean
    hasFinished: boolean
    text: string
    guessedWords: number
    time: number
}

export type CurrentText = {
    text: string    
}

export type GuessedNr = {
    guessedWords: number
}

export type WordsHandleType = {
    actualWords: string[]
    currentIndex: number
}


export const initGameObject: GameValuesType = {
    hasStarted: false,
    hasFinished: false,
    text: generateRandomText(),
    time: 0,
    guessedWords: 0
}