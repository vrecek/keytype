import '@/css/GameSummary.css'
import { GameContext } from '../Game'
import React from 'react'
import { GameValuesType } from '@/interfaces/Game/GameTypes'
import EntryHeaders from './EntryHeaders'
import Statistics from './Statistics/Statistics'
import Button from '@/components/Common/Button'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { LeaderboardRecord } from '@/interfaces/Leaderboards/LeaderboardsTypes'
import rankingSort from '@/functions/rankingSort'
import calcWPM from '@/functions/calcWPM'


const GameSummary = () => {
    const n: NavigateFunction = useNavigate()
    const stats = React.useContext(GameContext)!.gameState as GameValuesType


    const reloadPage = (): void => window.location.reload()

    const saveToLeaderboard = (): void => {
        const record: LeaderboardRecord = {
            username: 'Me',
            time: stats.time,
            words: stats.guessedWords,
            wpm: calcWPM(stats.guessedWords, stats.time)
        }
        
        const prevItems: LeaderboardRecord[] = JSON.parse(localStorage.getItem('leaderboard') ?? '[]')

        if (prevItems.length === 10) {
            prevItems.sort(rankingSort)
            prevItems.pop()
        }

        localStorage.setItem('leaderboard', JSON.stringify([...prevItems, record]))

        n('/leaderboards', { replace: true })
    }


    return (
        <section className="game-summary">

            <EntryHeaders />
            <Statistics words={ stats.guessedWords } time={ stats.time } />

            <div className='buttons'>

                <Button cname='restart' clickFn={ reloadPage }>Play again</Button>
                <Button cname='save' clickFn={ saveToLeaderboard }>Save to the ranking</Button>

            </div>

        </section>
    )
}


export default GameSummary