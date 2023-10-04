import { StatsItem } from '@/interfaces/Game/SummaryTypes'


const Stat = ({ what, value, divCname }: StatsItem) => {
    return (
        <div className={ divCname }>

            <p>{ what }</p>
            <p>{ value }</p>

        </div>
    )
}


export default Stat