import React, { useState } from 'react'

const Register = ({switchToLogin}) => {
    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")

  return (
    <center>
        <form onSubmit={e=>e.preventDefault()}>
               <div className="input-content">
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username} onChange={e=>setUsername(e.target.value)}/>
                </div>

                <div className="input-content">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={e=>setPassword(e.target.value)}/>
                </div>

                <div className="input-content">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                </div>

                <div className="input-content">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
                </div>
                <div className="agreement">
                    <p>I agree all statement <a href="">Terms of service</a></p>
                </div>
                <div className="btn-content">
                    <button type="submit">Sign up</button>
                </div>
                <div className="option">
                    <p className='text-sm'>Already have accouunt <span onClick={switchToLogin}>Login</span></p>
                </div>
        </form>
        
      
    </center>
  )
}

export default Register
