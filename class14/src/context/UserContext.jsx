import React, { createContext } from 'react'
export const UserDataContext=createContext()

const UserContext = (props) => {

    const user='samyak this side SDE'
  return (
    <UserDataContext.Provider value={user}>
        {props.children}
    </UserDataContext.Provider>
  )
}

export default UserContext