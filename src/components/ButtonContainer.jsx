import React from 'react'
import Button from '../utils/Button'

const ButtonContainer = () => {
  return (
    <div className='flex justify-center mt-10'>
      <Button theme={"btn1"} className='!bg-blue-500'>Follow  <i className="fa-solid fa-plus ps-3"></i></Button>
      <Button theme={"btn2"} className="bg-white">Message  <i className="fa-regular fa-message"></i></Button>
    </div>
  )
}

export default ButtonContainer
