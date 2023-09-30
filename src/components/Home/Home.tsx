import '@/css/HomeStyles.css'
import Header from "./Header/Header"
import WhatIsThisAbout from './Introduction/WhatIsThisAbout'
import ShortLeaderboard from './Introduction/ShortLeaderboard'


const Home = () => {
    // image-text -> 2nd - leaderboard - reversed

    return (
        <main className="home-page">

            <Header />           
            <WhatIsThisAbout />
            <ShortLeaderboard />

        </main>
    )
}


export default Home