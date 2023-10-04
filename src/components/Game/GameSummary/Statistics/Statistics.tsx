import { StatisticsDetails } from "@/interfaces/Game/SummaryTypes"
import Stat from "./Stat"
import secondsToStringTime from "@/functions/secondsToStringTime"
import calcWPM from "@/functions/calcWPM"


const Statistics = ({ time, words }: StatisticsDetails) => {
    const WPM: number = calcWPM(words, time)

    
    return (
        <section className="statistics">

            <Stat what="Time" value={ secondsToStringTime(time) } />
            <Stat what="Total words" value={ words } />
            <Stat what="WPM" value={ WPM } divCname="wpm" />

        </section>
    )
}


export default Statistics