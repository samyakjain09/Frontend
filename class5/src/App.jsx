import React, { useState } from 'react'

const App = () => {
const [num, setnum] = useState([20,25,27,92,58,33]) 
let clicked=function(){
  const newnum=num.map(function(elem){
    return elem+5
})
  setnum(newnum)
}
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={clicked}>click me</button>
    </div>
    
  )
}

export default App