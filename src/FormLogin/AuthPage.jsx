import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

const AuthPage = () => {
    const [isLogin , setIsLogin] = useState(true)

    const handleSwitch = () =>{
        setIsLogin(!isLogin)
    }
  return (
    <div className='authpages'>
        {isLogin?(
            <Login switchToRegister={handleSwitch}/>
        ):(
            <Register switchToLogin={handleSwitch}/>
        )}
        
      
    </div>
  )
}

export default AuthPage
