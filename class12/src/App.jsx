import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Courses  from './pages/Courses'
import Koder from "./pages/koder";
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>

      <Route path='/' element={<Home/> } />
      <Route path='/courses' element={<Courses/>}>
        <Route path='/courses/koder' element={<Koder/>} />
      </Route>
      

      </Routes>
      <Footer/>
    </div>
  )
}

export default App