import { ListObject } from "@/interfaces/Leaderboards/LeaderboardsTypes"
import LeaderboardElement from "./LeaderboardElement"
import LeaderboardListDesc from "./LeaderboardListDesc"


const LeaderboardList = ({ listObject }: ListObject) => {
	return (
		<ul>

			<LeaderboardListDesc />

			{
				listObject.map((x, i) => (
					<LeaderboardElement 
						key={ i }
						nr={ i + 1 }
						time={ x.time }
						username={ x.username }
						words={ x.words }
						wpm={ x.wpm }
					/>
				))
			}

		</ul>
	)

}


export default LeaderboardList