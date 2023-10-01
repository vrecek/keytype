export type GameContextType = {
    gameState: GameValuesType
    switchGameState: React.Dispatch<React.SetStateAction<GameValuesType>>
}

export type GameValuesType = {
    hasStarted: boolean
    hasFinished: boolean
}