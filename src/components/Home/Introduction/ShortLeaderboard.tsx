import IntroductionTextSection from "./IntroductionTextSection"
import '@/css/ImageTextSection.css'
import Leaderboard from "@/components/Common/Leaderboard/Leaderboard"


const ShortLeaderboard = () => {
	return (
		<section className="image-text-section short-leaderboard">

			<Leaderboard />

			<IntroductionTextSection
				header='Get your best results saved on the leaderboard'
				text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni non, aspernatur sapiente ducimus dolorum quam quis ipsum laboriosam pariatur!'
				btnText="View the leaderboard"
			/>

		</section>
	)
}


export default ShortLeaderboard