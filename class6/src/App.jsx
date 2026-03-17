import React, { useState } from 'react'

const App = () => {
  let submit=(e)=>{
    e.preventDefault()
    const newarr=[...arr]
    newarr.push(title)
    console.log(newarr)
  }
  const [arr, setarr] = useState([])
  const [num, setnum] = useState("")
  return (
    <div>
      <form onSubmit={(e)=>{
        submit(e)
      }}
      onChange={(e)=>{
        console.log(e.target.value)

        }}
      
      >
        <input type='text' placeholder='Enter name' className='p-0.5' value={title}
        onChange={(e)=>{
        setnum(e.target.value)
        }}
        required
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App