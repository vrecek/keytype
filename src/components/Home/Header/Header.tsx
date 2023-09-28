import Button from '@/components/Common/Button'
import Image from '@/components/Common/Image'
import headerBg from '@/images/home-header.jpg'
import HeaderText from './HeaderText'


const Header = () => {
    const gameRedirect = () => console.log('start')


    return (
        <header>
            
            <Image 
                src={ headerBg }
                altTxt='Header'
            />

            <HeaderText />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quia veniam alias magni necessitatibus.</p>
            <Button clickFn={gameRedirect}>
                Get started
            </Button>

        </header>
    )
}


export default Header