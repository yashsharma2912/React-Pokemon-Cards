import React, { useRef } from 'react'
import  "../components/style.css"
import { MdClose } from "react-icons/md";
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
   const menu = useRef(null);
   const displayMenu = () => {
       menu.current.style.display = "flex";
       mainDiv.current.style.display = "none";
   }

  return (
     <>
     <div className="menuScreen" ref={menu}>
       <div className="close">
       <MdClose />
       </div>
         <ul>
           <li>home</li>
           <li>home</li>
           <li>home</li>
           <li>home</li>
         </ul>
      </div>
     <div className="navbar flex">
        <h1>Yash <br/> Sharma <span> </span></h1>
        
        <div className="navItems">
         
           <ul className=''>
            <li className='list'><h4 className='navEle'><a href="#projects">Projects</a></h4></li>
            <li className='list'><h4 className='navEle'><a href="#skills">Skills</a></h4></li>
            <li className='list'><h4 className='navEle'><a href="#">Education</a></h4></li>
            <li className='list'><h4 className='navEle'><a href="#">Contact</a></h4></li>
           
           </ul>
        </div>
        <div className="resume">
           <h4><a target='_blank' href="https://drive.google.com/file/d/11C0iGhvOV7GyBIX0ivCbM40DTQP3MNbd/view?usp=drive_link">Resume</a></h4>
        </div>
           <h3 className='menu' onClick={displayMenu}>Menu</h3>
     </div>
     </>
  )
}

export default Navbar