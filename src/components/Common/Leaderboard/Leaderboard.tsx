import { LeaderboardDisplayBtn, LeaderboardRecord } from "@/interfaces/Leaderboards/LeaderboardsTypes"
import Button from "../Button"
import LeaderboardList from "./LeaderboardList"
import '@/css/Leaderboard.css'
import NoDataToDisplay from "./NoDataToDisplay"
import rankingSort from "@/functions/rankingSort"


const Leaderboard = ({ showResetBtn, shortVersion }: LeaderboardDisplayBtn) => {
    const leaderboardItems: LeaderboardRecord[] = JSON.parse(localStorage.getItem('leaderboard') ?? '[]')
    leaderboardItems.sort(rankingSort)


    const resetTheLeaderboard = (): void => {
        localStorage.removeItem('leaderboard')
        window.location.reload()
    }


    return (
        <section className="leaderboard">

            <div>

                <p className="header">LEADERBOARD</p>
                {
                    showResetBtn && (
                        leaderboardItems.length
                            ? <Button clickFn={ resetTheLeaderboard }>Reset</Button>
                            : <></>
                    ) 
                }

            </div>

            {
                leaderboardItems.length
                    ? <LeaderboardList 
                        listObject={ shortVersion ? leaderboardItems.slice(0, 4) : leaderboardItems } 
                      />
                    : <NoDataToDisplay />
            }

        </section>
    )
}


export default Leaderboard