import React from 'react'
import './Debounce.css'
import { useState } from 'react'
import { useEffect } from 'react'

const Debounce = () => {
    const[searchTerm,setSearchTerm]=useState("")

    const[debounceTerm,setDebounceTerm]=useState("")

    useEffect(()=>{
        //api call
        const timeout=setTimeout(()=>{
            setDebounceTerm(searchTerm)
        },500)

        return ()=>clearTimeout(timeout)

    },[searchTerm])
  return (
    <div>

        <h1>UseEffect debounce project</h1>
       <input type="text"
       value={searchTerm}
       onChange={(e)=>setSearchTerm(e.target.value)}
       placeholder='search...' /> 
      <p>{debounceTerm}</p>
    </div>
  )
}

export default Debounce
