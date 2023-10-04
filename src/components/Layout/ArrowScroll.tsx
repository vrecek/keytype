import { BsFillArrowUpSquareFill } from "react-icons/bs"
import Icon from "../Common/Icon"
import scr from "react-scroll"


const ArrowScroll = () => {
    const scrollTop = (): void => scr.animateScroll.scrollTo(0, {
        duration: 500
    })


    return (
        <Icon
            src={<BsFillArrowUpSquareFill />}
            clickFn={scrollTop}
            cname="layout-arrow-scroll"
        />
    )
}


export default ArrowScroll