import React from 'react'
import Navbar from './component/Navbar'
import Women from './component/Women'
import Men from './component/Men'

const App = () => {
  const user1={
    name:"Rahul",
    age:"22",
    Gender:"male"

  }
  const user2={
    name:"Shreya",
    age:"24",
    Gender:"female"

  }
  return (
    <div>
      {user2.Gender=="male"?<Men/>:<Women/>}
    </div>
  )
}

export default App