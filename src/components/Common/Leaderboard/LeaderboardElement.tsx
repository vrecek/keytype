import secondsToStringTime from "@/functions/secondsToStringTime"
import { RecordElement } from "@/interfaces/Leaderboards/LeaderboardsTypes"


const LeaderboardElement = ({ nr, username, words, time, wpm }: RecordElement) => {
    return (
        <li>

            <p>{ nr }.</p>
            <p>{ username }</p>
            <p>{ words }</p>
            <p>{ secondsToStringTime(time) }</p>
            <p>{ wpm }</p>

        </li>
    )
}


export default LeaderboardElement