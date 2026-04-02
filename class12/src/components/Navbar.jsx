import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <NavLink to="/" style={({isActive})=>({
        color:isActive?'red':'yellow'
      })}>Home</NavLink>
      <Link to="/courses">Courses</Link>
    </div>
  )
}

export default Navbar