import texts from '@/data/possibleTexts.json'


const generateRandomText = (): string => {
    if (!Array.isArray(texts))
        return 'Error'

    return texts[Math.floor(Math.random() * texts.length)] as string 
}


export { generateRandomText }