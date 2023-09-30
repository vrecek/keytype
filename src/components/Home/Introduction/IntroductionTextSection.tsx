import Button from "@/components/Common/Button"
import IntroTextType from "@/interfaces/Home/ImageTextSectionTypes"


const IntroductionTextSection = ({ header, text, btnText }: IntroTextType) => {
    return (
        <section className="text-section">

            <p className="header">{ header }</p>
            <p className="text">{ text }</p>

            <Button clickFn={() => {console.log('start')}}>
                { btnText }
            </Button>

        </section>
    )
}


export default IntroductionTextSection