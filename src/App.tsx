import '@/css/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutNavigation from './components/Layout/LayoutNavigation/LayoutNavigation'
import LayoutFooter from './components/Layout/LayoutFooter/LayoutFooter'
import Home from './components/Home/Home'


function App() {
    return (
        <>
            <BrowserRouter>

                <LayoutNavigation />

                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/game' element={<>game</>} />
                    <Route path='/contact' element={<>contact</>} />
                    <Route path='*' element={<>Not found</>} />

                </Routes>

                <LayoutFooter />

            </BrowserRouter>
        </>
    )
}


export default App
