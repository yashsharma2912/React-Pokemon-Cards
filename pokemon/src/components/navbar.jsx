import React from 'react'
import  "../components/navbar.css"

const Navbar = () => {
  return (
     <>
     <div className="navbar flex">
        <h1>Yash Sharma</h1>
        <div className="nav-items">
           <ul className='flex'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Contact</a></li>
           </ul>
        </div>
        <div className="resume">
           <h2>Resume <span><a href="#"></a></span></h2>
        </div>
     </div>
     </>
  )
}

export default Navbar