import React, { useState } from 'react'

const Login = ({switchToRegister}) => {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  return (
    <center>
      <form onSubmit={e=>e.preventDefault()}>
        <div className="input-content">
            <label htmlFor="">Email </label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="input-content">
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        </div>
        <div className="btn-content">
          <button type='submit'>Sign in</button>
        </div>
        <div className="option">
          <p className='text-sm'>Create an accouunt <span onClick={switchToRegister}>Register</span></p>
        </div>
      </form>
    </center>
  )
}

export default Login
