export type LeaderboardDisplayBtn = {
    showResetBtn?: boolean
    shortVersion?: boolean
}

export type LeaderboardRecord = {
    username: string
    time: number
    words: number
    wpm: number
}

export type ListObject = {
    listObject: LeaderboardRecord[]
}

export type RecordElement = LeaderboardRecord & {
    nr: number
}