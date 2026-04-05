import React from 'react'

const Navbar = (props) => {

  return (
    <div>
        <h1>this is {props.brand}</h1>
        {props.children}
    </div>
  )
}

export default Navbar