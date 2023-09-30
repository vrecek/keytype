import Image from '@/components/Common/Image'
import '@/css/ImageTextSection.css'
import typingImage from '@/images/home-typing.png'
import IntroductionTextSection from './IntroductionTextSection'


const WhatIsThisAbout = () => {
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
            />

        </section>
    )
}


export default WhatIsThisAbout