import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/slices/counter'
const App = () => {

  const num=useSelector((state)=>state.counter.value)
  const theme=useSelector((state)=>state.theme.value)

  const dispatch=useDispatch()
  return (
    <>
      <h1>{num},{theme}</h1>
      <button onClick={()=>{
        dispatch(increment())
      }}>Increment</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>Decrement</button>
    </>
      
  )
}

export default App