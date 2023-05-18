
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Readmore from './pages/Readmore'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Header />

      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/about' element= {<About/>} />
        <Route path='/blogs' element= {<Blogs />} />
        <Route path= '/readmore' element= {<Readmore />}/>


      </Routes>
    <Footer />

    </BrowserRouter>
    
      
    </>
  )
}

export default App
