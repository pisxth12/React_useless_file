import React from 'react'
import Icon from './ui/Icon'

const iconList = [
  {
    icon:<i className="fa-solid fa-heart"></i>,
    title:"heart"

  },
   {
    icon:<i className="fa-solid fa-eye"></i>,
    title:"heart"

  },
   {
    icon:<i className="fa-solid fa-pencil"></i>,
    title:"heart"

  },
   {
    icon:<i className="fa-solid fa-star"></i>,
    title:"heart"

  },
   {
    icon:<i className="fa-solid fa-gun"></i>,
    title:"heart"

  },
 
]

const IconContainer = () => {
  return (
    <div className='!flex justify-center bg-white  rounded-3xl h-fit gap-4 p-5'>
        {iconList.map((item, index)=>(
          <Icon key={index}>
            {item.icon} 
          </Icon>
        ))}
      
    </div>
  )
}

export default IconContainer
