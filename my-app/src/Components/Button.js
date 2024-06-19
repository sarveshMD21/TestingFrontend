import React from 'react'

const Button = ({setCounter,counter}) => {
  const handleClick=()=>{
    setCounter(counter+1);
  }
  return (
    <button onClick={handleClick} > Click Me</button>
  )
}

export default Button