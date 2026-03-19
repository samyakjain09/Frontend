import React from 'react'
import Navbar from './component/Navbar'
import Women from './component/Women'
import Men from './component/Men'

const App = () => {
    const abc= function(){
      console.log("hello")
    }
  return (
    <div>
      <button onClick={abc}>Click me</button>
    </div>
  )
}

export default App