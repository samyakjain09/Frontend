import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Link, Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <div className='flex justify-between px-8 py-4 bg-pink-900 mb-10'>
        <h1>
          Navbar
        </h1>
      </div>

      <div>
          <Link to='/'>Home</Link>
          <Link to='/about'>about</Link>
          <Link to='/store'>store</Link>
          <Link to='/course'>course</Link>
      </div>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about /id:' element={<About/>}/>
    </Routes>
    </div>
    
  )
}

export default App