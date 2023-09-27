import Icon from "@/components/Common/Icon"
import openGithubTab from "@/functions/openGithubTab"
import { BiCodeAlt } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'


const ContactIcons = () => {
    return (
        <section>

            <Icon
                src={ <BsGithub /> }
                clickFn={ () => openGithubTab('') }
            />

            <Icon
                src={ <BiCodeAlt /> }
                clickFn={ () => openGithubTab('/keytype') }
            />

        </section>
    )
}


export default ContactIcons