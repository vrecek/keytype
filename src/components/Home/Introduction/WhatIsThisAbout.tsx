import Image from '@/components/Common/Image'
import '@/css/ImageTextSection.css'
import typingImage from '@/images/home-typing.png'
import IntroductionTextSection from './IntroductionTextSection'
import redirectToGame from '@/functions/redirectToGame'
import { NavigateFunction, useNavigate } from 'react-router-dom'


const WhatIsThisAbout = () => {
    const n: NavigateFunction = useNavigate()


    return (
        <section className="image-text-section what-is-this-about">

            <Image 
                src={ typingImage }
                altTxt='Typing'
            />

            <IntroductionTextSection 
                header='What exactly is this all about?'
                text='Have you ever wondered how fast would you type on a keyboard? Here, on this website, you can test it by yourself.'
                btnText="Let's get started"
                btnClickFn={ () => redirectToGame(n) }
            />

        </section>
    )
}


export default WhatIsThisAbout