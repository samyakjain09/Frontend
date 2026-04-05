import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar brand='samyak'>
        <h1>Hello</h1>
      </Navbar>
      <Footer/>
    </div>
  )
}

export default App