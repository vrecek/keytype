import { BiPencil } from "react-icons/bi"


const WriteToBox = () => {
    return (
        <div className="write-to-box">

            <input
                type='text'
                spellCheck='false'
            />

            <BiPencil />

        </div>
    )
}


export default WriteToBox