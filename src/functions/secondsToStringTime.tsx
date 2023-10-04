const secondsToStringTime = (seconds: number): string => {
    const m: number = Math.floor(seconds / 60),
          s: number = seconds % 60

          
    return `0${m}`.slice(-2) + ":" +`0${s}`.slice(-2)
}


export default secondsToStringTime