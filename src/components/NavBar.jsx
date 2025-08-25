import React from 'react'


const NavBar = () => {
  return (
    <nav className='flex justify-between'>
        <div className="logo-content">
            <div className="logo"><img src="../assets/react.svg" alt="" /></div>
        </div>
        <div className="nav-content">
            <ul className='flex gap-3 '>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Location</li>
            </ul>
        </div>
        <div className="info-content">
          <div className="search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          

          
        </div>
    </nav>
  )
}

export default NavBar
