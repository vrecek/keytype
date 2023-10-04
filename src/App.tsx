import '@/css/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutNavigation from './components/Layout/LayoutNavigation/LayoutNavigation'
import LayoutFooter from './components/Layout/LayoutFooter/LayoutFooter'
import Home from './components/Home/Home'
import Game from './components/Game/Game'
import ArrowScroll from './components/Layout/ArrowScroll'
import React from 'react'
import Leaderboards from './components/Leaderboards/Leaderboards'
import Error from './components/Error/Error'


function App() {
    React.useEffect(() => {
        const arrow: HTMLElement = document.querySelector('.layout-arrow-scroll') as HTMLElement,
              nav: HTMLElement = document.querySelector('.layout-navigation') as HTMLElement

        let scrollCheck: boolean = true


        window.addEventListener('scroll', () => {
            if (scrollCheck && window.scrollY >= 250) {
                arrow.classList.add('visible')
                nav.classList.add('visible')

                scrollCheck = false
            }

            else if (!scrollCheck && window.scrollY < 250) {
                arrow.classList.remove('visible')
                nav.classList.remove('visible')

                scrollCheck = true
            }
        })

    }, [])


    return (
        <>
            <BrowserRouter>

                <LayoutNavigation />

                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/game' element={<Game />} />
                    <Route path='/leaderboards' element={<Leaderboards />} />
                    <Route path='*' element={<Error />} />

                </Routes>

                <LayoutFooter />

                <ArrowScroll />

            </BrowserRouter>
        </>
    )
}


export default App
