import '@/css/HomeStyles.css'
import Header from "./Header/Header"
import WhatIsThisAbout from './Introduction/WhatIsThisAbout'
import ShortLeaderboard from './Introduction/ShortLeaderboard'
import React from 'react'


const Home = () => {
    React.useEffect(() => window.scrollTo(0, 0), [])


    return (
        <main className="home-page">

            <Header />           
            <WhatIsThisAbout />
            <ShortLeaderboard />

        </main>
    )
}


export default Home