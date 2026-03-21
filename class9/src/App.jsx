import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [allData, setallData] = useState([])
  const getdata=async()=>{
    const response=await(axios.get("https://jsonplaceholder.typicode.com/users"))
    setallData(response.data)
  }
  return (
    <div>
      <button onClick={getdata}>Get Data</button>

      {allData.map(function(elem,idx){
        return <h1 key={idx}>Hello guys</h1>
      })}
    </div>
  )
}

export default App