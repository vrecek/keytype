import { Text } from "@/interfaces/Common/CommonTypes"


const ParagraphHeader = ({ children }: Text) => {
    return (
        <p className="side-header">
            { children }
        </p>
    )
}


export default ParagraphHeader