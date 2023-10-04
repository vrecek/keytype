import { NavigateFunction, useNavigate } from 'react-router-dom'
import Button from '../Button'
import redirectToGame from '@/functions/redirectToGame'


const NoDataToDisplay = () => {
    const n: NavigateFunction = useNavigate()


    return (
        <section className='no-data-wrap'>

            <h4>No data to display</h4>
            <Button clickFn={() => redirectToGame(n)}>
                Start the game
            </Button>

        </section>

    )
}


export default NoDataToDisplay