import React from 'react'
import Leaderboard from '../Common/Leaderboard/Leaderboard'
import '@/css/LeaderboardsStyles.css'


const Leaderboards = () => {
    React.useEffect(() => window.scrollTo(0, 0), [])


    return (
        <main className="leaderboard-page">

            <Leaderboard showResetBtn={ true } />

        </main>
    )
}


export default Leaderboards