import React from 'react'
import Buttons from '../utils/Buttons'

const Button2Content = () => {
  function handleClick() {
    alert("Hello there")
  }

  return (
    <div>
      <Buttons handleClick={handleClick}>Following</Buttons>
      <Buttons handleClick={() => alert("Follower button clicked")}>Follower</Buttons>
    </div>
  )
}

export default Button2Content
