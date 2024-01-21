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
            <li><a href="#skills">Skills</a></li>
            <li><a href="#">Education</a></li>
            <li><a href="#">Contact</a></li>
           </ul>
        </div>
        <div className="resume">
           <h3>Resume/CV <span> <button className='download'>Download</button></span></h3>
        </div>
     </div>
     </>
  )
}

export default Navbar