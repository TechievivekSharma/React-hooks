import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffectHook = () => {
const[count,setCount]=useState(0)
  useEffect(()=>{
   const interval= setInterval(()=>{
      // setCount((prev)=>prev+1)

    },1000)

    return ()=>{clearInterval(interval)}
    
  },[count])
  return (
    <div>
      <h1>learning useEffect</h1>
      <div>timer:{count}</div>
      {/* <button onClick={()=>setCount(count+1)}>incremettt</button> */}
    </div>
  )
}

export default UseEffectHook

/**
 * use to perform side efect in function
 * fetching dat
 * ruunning timer
 * updatinf dom
 * list useer action scrolling
 */

/**
 * 
 * functional componnet has not life cycle method that why fulling filing there use we use useeffect
 * 
 * 
 * ise hmko import krna hota he 
 * it has two parameter callback fnc and dependancy array
 */

/**
 * debouning me useeffect ka use ktte he
 * 
 * useeffect ke anadr set time out use krke set debounce likho
 */
