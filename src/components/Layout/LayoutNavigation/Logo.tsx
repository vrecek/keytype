import Image from "@/components/Common/Image"
import { NavigateFunction, useNavigate } from "react-router-dom"
import logoImg from '@/images/logo.png'


const Logo = () => {
    const n: NavigateFunction = useNavigate()

    
    return (
        <Image
            src={ logoImg }
            altTxt="Keytype"
            clickFn={ () => n('/') }
        />
    )
}


export default Logo