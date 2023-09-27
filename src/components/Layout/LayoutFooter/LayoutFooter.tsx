import FooterContact from "./FooterContact/FooterContact"
import FooterInformations from "./FooterInformations"
import '@/css/LayoutFooter.css'
import InfoParagraph from "./InfoParagraph"


const LayoutFooter = () => {
    return (
        <footer className="layout-footer">

            <div className="wrap">

                <FooterInformations />

                <FooterContact />

            </div>

            <InfoParagraph />

        </footer>
    )
}


export default LayoutFooter