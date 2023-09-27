import '@/css/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LayoutNavigation from './components/Layout/LayoutNavigation'
import LayoutFooter from './components/Layout/LayoutFooter'


function App() {
    return (
        <>
            <BrowserRouter>

                <LayoutNavigation />

                <Routes>

                    <Route path='/' element={<>home</>} />
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
