import { BsGithub } from 'react-icons/bs'
import FooterContactIcon from './FooterContactIcon'
import { BiCodeAlt } from 'react-icons/bi'


const FooterContact = () => {
    return (
        <section className="contact">

            <FooterContactIcon
                src={ <BsGithub /> }
                redirectLink=''
                text='Github'
            />

            <FooterContactIcon
                src={ <BiCodeAlt /> }
                redirectLink='/keytype'
                text='Source code'
            />

        </section>
    )
}


export default FooterContact