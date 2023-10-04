import { NavigateFunction, useNavigate } from "react-router-dom"
import Button from "../Common/Button"
import '@/css/ErrorStyles.css'


const Error = () => {
    const n: NavigateFunction = useNavigate()


    return (
        <main className="error-page">

            <h1>404</h1>
            <h2>Not found</h2>
            <Button clickFn={() => n('/', { replace: true })}>
                Back to homepage
            </Button>

        </main>
    )
}


export default Error