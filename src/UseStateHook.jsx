import React from 'react'
import { useState } from 'react'

const UseStateHook = () => {
    const[count,setCount]=useState(0)

   const increment=()=>{

    // setCount(count+1)
    // setCount(count+1) ye direct update he

    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)  /**ye functional upadate he */

    }
  return (
     <div className='box'>
      <p>Buttton clicked-{count} time</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseStateHook
/**
 * RULES
 * must be written in inside function components
 * must be import in componnet
 * must be call at top lewvel
 * cannot be conditional
 */
/**
 * ui update hona chahiye state change hone pr isliye usestate ka use kiya
 * 
 */


/**
 * kabhi kbhi direct update inappropriate behave krta he 
 * 
 * functioanal update stale state issue ko solve krta he 
 */

/**
 * jb bhi kbhi   array ya object ka use krna ho USESTATE ke sath to set use function me copy bna lo phle spread operator ke sath
 * 
 * 
 * 2. lazy initialization--usestate me function directly call mt kro use as call back function
 */