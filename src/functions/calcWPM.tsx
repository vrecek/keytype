const calcWPM = (words: number, time: number): number => Math.trunc(words / (time / 60))


export default calcWPM