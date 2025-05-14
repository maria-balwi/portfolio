import {  BrowserRouter, Route, Routes } from 'react-router'
// import Home from './pages/Home'
// import About from './pages/About'
// import Portfolio from './pages/Portfolio'
// import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'

export default function Router() {
    return (
        <BrowserRouter>
            <div className='flex flex-col min-h-screen'>
                <Header />
                <div className='flex-1'>
                    <Routes>
                        <Route path='/' element={<Landing />}></Route>
                        {/* <Route path='/about' element={<About />}></Route>
                        <Route path='/portfolio' element={<Portfolio />}></Route>
                        <Route path='/contact' element={<Contact />}></Route> */}
                        <Route path='/*' element={<NotFound />}></Route>
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}