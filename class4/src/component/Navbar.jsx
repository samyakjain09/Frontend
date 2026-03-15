import React from 'react'

const Navbar = (props) => {
  return (
    <div style={{backgroundColor:props.color}}   className='bg-pink-700 mb-1 flex items-center justify-between px-2'>
          <h2>{props.user}</h2>
          <div className='flex gap-6'>
            {props.links.map(function(elem){
                return( <h1>{elem}</h1>)
            })}
          </div>
        </div>
  )
}

export default Navbar