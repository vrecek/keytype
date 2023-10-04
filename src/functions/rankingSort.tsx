import { LeaderboardRecord } from "@/interfaces/Leaderboards/LeaderboardsTypes"


const rankingSort = (a: LeaderboardRecord, b: LeaderboardRecord): number => {
    const [awords, bwords] = [a.words, b.words]

    return awords === bwords
        ? a.time - b.time
        : bwords - awords
}


export default rankingSort