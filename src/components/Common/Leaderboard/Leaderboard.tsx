import LeaderboardList from "./LeaderboardList"
import '@/css/Leaderboard.css'


const Leaderboard = () => {
    return (
        <section className="leaderboard">

            <p className="header">LEADERBOARD</p>

            <LeaderboardList />

        </section>
    )
}


export default Leaderboard