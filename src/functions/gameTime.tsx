const getGameTime = (): number => parseInt(JSON.parse(localStorage.getItem('time') ?? '0'))

const incrementGameTime = (): void => {
    const currentTime: number = getGameTime()

    localStorage.setItem('time', JSON.stringify(currentTime + 1))
}

const initGameTime = (): void => localStorage.setItem('time', JSON.stringify(0))


export {
    getGameTime,
    initGameTime,
    incrementGameTime
}