import React, { useEffect,useState } from 'react'
import axios from "axios"
const App = () => {
  const [counter, setcounter] = useState(0)
  useEffect(function(){
    console.log("hello Samyak")
  },[counter])

  const getdata=async()=>{
    const response=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response)
  }

  useEffect(function(){
    getdata()
  })



  return (
    <div>

      <h1>{counter}</h1>

      <button onClick={()=>{
        setcounter(counter+1)

      }}>increase</button>
    </div>
  )
}

export default App