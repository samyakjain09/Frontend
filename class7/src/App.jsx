import React, { useState } from 'react'
import Card from './components/card'

const App = () => {
  const [UserName, setUserName] = useState("")
  const [userRole, setuserRole] = useState("")
  const [imageURL, setimageURL] = useState("")
  const [Description, setDescription] = useState("")
  const [allUsers, setallUsers] = useState([])
  
  const submitHnadler=(e)=>{
    e.preventDefault()
    
    

    setallUsers([...allUsers,{userRole,UserName,imageURL,Description}])

    setDescription("")
    setUserName("")
    setimageURL("")
    setuserRole("")
  }

  const deleteHandler=(idx)=>{
    const copyuser=[...allUsers]
    copyuser.splice(idx,1)
    setallUsers(copyuser)
  }

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHnadler(e)
      }} className='px-2 py-2 flex flex-wrap'>


        <input 
        value={UserName}
        onChange={(e)=>{
          setUserName(e.target.value)
        }}
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]' 
        type="text" 
        placeholder='Enter your Name'/>

        <input
        value={imageURL}
        onChange={(e)=>{
          setimageURL(e.target.value)
        }} 
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]' 
        type="text" 
        placeholder='Pic url'/>

        <input 
        value={userRole}
        onChange={(e)=>{
          setuserRole(e.target.value)
        }}
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]' 
        type="text" 
        placeholder='Enter Role'/>

        <input 
        value={Description}
        onChange={(e)=>{
          setDescription(e.target.value)
        }}
        className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]' 
        type="text" 
        placeholder='Enter Description'/>

        <button className='px-5 py-2 text-xl font-semibold active:scale-95 cursor-alias rounded m-2 text-xl font-semibold bg-emerald-500 w-[97%]'>Create User</button>
      </form>
      <div className='px-2 py-10 flex flex-wrap gap-4'>

        {allUsers.map(function(elem,idx){
          return <div key={idx} className='lg:w-[24vw] md:w-[30vw] sm:w-[45vw] rounded-xl py-8 px-8 text-center flex flex-col items-center bg-white text-black'>
        <img className='h-24 w-24 rounded-full' src={elem.imageURL}  alt=''></img>
        <h1 className='text-2xl font-bold m-2'>{elem.UserName}</h1>
        <h5 className=' text-blue-500 font-semibold m-2 text-lg'>{elem.userRole}</h5>
        <p className='text-sm font-medium leading-tight'>{elem.Description}</p>
        <button onClick={()=>{
          deleteHandler(idx)
        }} className="px-4 py-2 rounded bg-red-600 text-xs cursor-pointer active:scale-95 text-white font-semibold mt-3">Remove</button>
    </div>
        })}
      </div>
    
    </div>
    
  )
}

export default App