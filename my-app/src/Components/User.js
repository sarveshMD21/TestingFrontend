import React from 'react'

const User = ({name,handlefunc}) => {
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={handlefunc}>Click</button>
    </div>
  )
}

export default User