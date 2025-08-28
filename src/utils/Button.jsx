import React from 'react'

const Button = ({children , handleClickc , theme}) => {
  return (
    <div>
      <button className={`${theme} btn`}  > {children}</button>
    </div>
  )
}

export default Button
