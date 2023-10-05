import Button from '@/components/Common/Button'
import Image from '@/components/Common/Image'
import headerBg from '@/images/home-header.jpg'
import HeaderText from './HeaderText'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import redirectToGame from '@/functions/redirectToGame'


const Header = () => {
    const n: NavigateFunction = useNavigate()


    return (
        <header>
            
            <Image 
                src={ headerBg }
                altTxt='Header'
            />

            <HeaderText />
            <p>Check how many Words Per Minute you can achieve, by playing on this official website's typing test</p>
            <Button clickFn={() => redirectToGame(n)}>
                Get started
            </Button>

        </header>
    )
}


export default Header