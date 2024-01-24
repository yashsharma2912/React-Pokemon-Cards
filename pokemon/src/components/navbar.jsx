import React from 'react'
import  "../components/style.css"

const Navbar = () => {
  return (
     <>
     <div className="navbar flex">
        <h1>Yash <br/> Sharma <span> </span></h1>
        
        <div className="navItems">
           <ul className=''>
            <li className='list'><h4 className='navEle'><a href="#">Projects</a></h4></li>
            <li className='list'><h4 className='navEle'><a href="#skills">Skills</a></h4></li>
            <li className='list'><h4 className='navEle'><a href="#">Education</a></h4></li>
            <li className='list'><h4 className='navEle'><a href="#">Contact</a></h4></li>
           
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