import React from 'react'
import { useState } from 'react'

const InpuBox = () => {
  const [data,setData]=useState("username");
  return (
    <div data-testid="custom-inputbox">
        <input type="text" placeholder='enter your username' value= {data} onChange={(e)=>setData(e.target.value)}/>
    </div>
  )
}

export default InpuBox