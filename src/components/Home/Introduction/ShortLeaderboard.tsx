import IntroductionTextSection from "./IntroductionTextSection"
import '@/css/ImageTextSection.css'
import Leaderboard from "@/components/Common/Leaderboard/Leaderboard"
import redirectToGame from "@/functions/redirectToGame"
import { NavigateFunction, useNavigate } from "react-router-dom"


const ShortLeaderboard = () => {
    const n: NavigateFunction = useNavigate()


	return (
		<section className="image-text-section short-leaderboard">

			<Leaderboard />

			<IntroductionTextSection
				header='Get your best results saved on the leaderboard'
				text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni non, aspernatur sapiente ducimus dolorum quam quis ipsum laboriosam pariatur!'
				btnText="View the leaderboard"
                btnClickFn={ () => redirectToGame(n) }
			/>

		</section>
	)
}


export default ShortLeaderboard