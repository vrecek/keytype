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
                text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni non, aspernatur sapiente ducimus dolorum quam quis ipsum laboriosam pariatur!'
                btnText="Let's get started"
                btnClickFn={ () => redirectToGame(n) }
            />

        </section>
    )
}


export default WhatIsThisAbout