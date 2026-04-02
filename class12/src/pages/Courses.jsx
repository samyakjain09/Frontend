import React from 'react'
import { Outlet } from 'react-router-dom'

const courses = () => {
  return (
    <div>
        <h1>
            Courses page
        </h1>
        <Outlet/>
    </div>
  )
}

export default courses