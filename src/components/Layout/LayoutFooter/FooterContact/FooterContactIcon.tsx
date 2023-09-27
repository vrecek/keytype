import Icon from "@/components/Common/Icon"
import openGithubTab from "@/functions/openGithubTab"


const FooterContactIcon = ({ src, text, redirectLink }: FooterContactIconType) => {
    return (
        <div>

            <p>{ text }</p>

            <Icon
                src={ src }
                clickFn={ () => openGithubTab(redirectLink) }    
            />

        </div>
    )
}


export default FooterContactIcon