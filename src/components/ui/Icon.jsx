import React from 'react'

const Icon = ({children}) => {
  return (
    <h1 className='pt-1  h-[60px] w-[60px] justify-center items-center rounded-full  flex  gap-6 icon'>
      {children}
    </h1>
  )
}

export default Icon
