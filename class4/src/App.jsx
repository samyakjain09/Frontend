import React from 'react'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div className='bg-black'>
      <Navbar user="Samyak" color="red" links={["home","about","acount","contact"]}/>
      <Navbar user="rahul" color="pink" links={["home","about","acount","contact"]}/>
      <Navbar user="Shyam" color="blue" links={["home","about","acount","contact"]}/>
    </div>
  )
}

export default App