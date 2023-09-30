import Button from "@/components/Common/Button"
import IntroTextType from "@/interfaces/Home/ImageTextSectionTypes"


const IntroductionTextSection = ({ header, text, btnText, btnClickFn }: IntroTextType) => {
    return (
        <section className="text-section">

            <p className="header">{ header }</p>
            <p className="text">{ text }</p>

            <Button clickFn={ btnClickFn }>
                { btnText }
            </Button>

        </section>
    )
}


export default IntroductionTextSection