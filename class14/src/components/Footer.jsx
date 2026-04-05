import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Footer = () => {
    const data=useContext(UserDataContext)
    console.log(data)

  return (
    <div>{data}</div>
  )
}

export default Footer