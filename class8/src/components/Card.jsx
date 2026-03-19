import React from 'react'

const Card = () => {
  return (
    <div className='w-[23vw] rounded-xl py-8 px-8 text-center flex flex-col items-center bg-white text-black'>
        <img className='h-24 w-24 rounded-full object-center object-cover' src='https://images.unsplash.com/photo-1773762159818-d929964ab226?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  alt=''></img>
        <h1 className='text-2xl font-bold m-2'>Samyak Jain</h1>
        <h5 className=' text-blue-500 font-semibold m-2 text-lg'>developer</h5>
        <p className='text-sm font-medium leading-tight'>I am a Frontend Developer . Building cool stuff</p>
        <button className="px-4 py-2 rounded bg-red-600 text-xs cursor-pointer active:scale-95 text-white font-semibold mt-3">Remove</button>
    </div>
  )
}

export default Card