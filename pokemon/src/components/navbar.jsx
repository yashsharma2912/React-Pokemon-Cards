import React from 'react'
import  "../components/style.css"

const Navbar = () => {
  return (
     <>
     <div className="navbar flex">
        <h1>Yash Sharma</h1>
        <div className="navItems">
           <ul className='flex'>
            <li><h4><a href="#">Home</a></h4></li>
            <li><h4><a href="#">Projects</a></h4></li>
            <li><h4><a href="#skills">Skills</a></h4></li>
            <li><h4><a href="#">Education</a></h4></li>
            <li><h4><a href="#">Contact</a></h4></li>
           
           </ul>
        </div>
        <div className="resume">
           <h4><a href="#">Resume</a></h4>
        </div>
     </div>
     </>
  )
}

export default Navbar