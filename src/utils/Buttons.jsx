import React from 'react'

const Buttons = ({ children, handleClick }) => {
  return (
    <button onClick={handleClick} className='btn bg-blue-400'>
      {children}
    </button>
  )
}

export default Buttons
