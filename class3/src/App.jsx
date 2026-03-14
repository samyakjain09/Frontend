import React from 'react'
import Card from './components/Card'
const App = () => {
  const arr=["samy","hello","jain"]
  return (
    <div className='p-10 bg-black h-screen '>
      {arr.map(function(elem){
        return <Card user={elem}/>
      })}
    </div>
  )
}

export default App