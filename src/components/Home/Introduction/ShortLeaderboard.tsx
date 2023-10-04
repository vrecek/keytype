import IntroductionTextSection from "./IntroductionTextSection"
import '@/css/ImageTextSection.css'
import Leaderboard from "@/components/Common/Leaderboard/Leaderboard"
import { NavigateFunction, useNavigate } from "react-router-dom"


const ShortLeaderboard = () => {
    const n: NavigateFunction = useNavigate()

	const redirectToLeaderboards = (): void => n('/leaderboards', { replace: true })

	
	return (
		<section className="image-text-section short-leaderboard">

			<Leaderboard shortVersion={ true } />

			<IntroductionTextSection
				header='Get your best results saved on the leaderboard'
				text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni non, aspernatur sapiente ducimus dolorum quam quis ipsum laboriosam pariatur!'
				btnText="View the leaderboard"
                btnClickFn={ redirectToLeaderboards }
			/>

		</section>
	)
}


export default ShortLeaderboard