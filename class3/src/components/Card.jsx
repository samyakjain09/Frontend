import React from 'react'

const card = (prop) => {
    console.log()
  return (
    <div className='bg-white px-5 rounded py-3 w-fit m-3 text-2xl'> Card
        {prop.user} 
    </div>
  )
}

export default card