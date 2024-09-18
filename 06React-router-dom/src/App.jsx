import React from 'react'

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

const App=()=> {
  return (
   <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
   </>
  )
}

export default App