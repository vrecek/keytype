import LeaderboardElement from "./LeaderboardElement"
import LeaderboardListDesc from "./LeaderboardListDesc"

const LeaderboardList = () => {
	return (
		<ul>

			<LeaderboardListDesc />

			<LeaderboardElement />
			<LeaderboardElement />
			<LeaderboardElement />

		</ul>
	)
}

export default LeaderboardList