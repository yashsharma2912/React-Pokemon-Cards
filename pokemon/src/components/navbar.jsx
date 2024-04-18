import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom"
import  "../components/style.css"

import { FaGithub } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

import 'remixicon/fonts/remixicon.css'


const Navbar = () => {

   const menuBox = useRef(null);
    const [toggle,setToggle] = useState(true);
  return (
     <>
     
      
     <div className="navbar flex">
        <h1>Yash <br/> Sharma <span> </span></h1>
        
        <div className="navItems bg-red-700">
         
           <ul className='show-list'>
            <li className='list'><h4 className='navEle'><a href="#abc">Projects</a></h4></li>
            <li className='list'><h4 className='navEle'><a href="#skills">Skills</a></h4></li>
            <li className='list'><h4 className='navEle'><a href="#">Education</a></h4></li>
            <li className='list'><h4 className='navEle'><a href="#">Contact</a></h4></li>
           </ul>
        </div>
        {/* <div className="resume font-bold underline">
           <h4><a target='_blank' href="https://drive.google.com/file/d/11C0iGhvOV7GyBIX0ivCbM40DTQP3MNbd/view?usp=drive_link">Resume</a></h4>

        </div> */}
       
          <div className="menu-btn">
             <span onClick={()=>(toggle ? setToggle(false) : setToggle(true))}> {toggle ? <CiMenuFries /> : <IoCloseOutline className='closebtn'/> }</span>
          </div>
        {!toggle &&  (<div className={!toggle ? "activeMenu" : "menu"}>
            <div className="menuOpenbox">
            <div className="openLinks">
            <Link className='link'>Projects</Link>
            <Link className='link'>Skills & Education</Link>
            <Link className='link'>Services</Link>
            <Link className='link'>Contact</Link>
            </div>
            <div className="openbtn">
                 <button><a href="">Github <span><FaGithub /></span></a></button>
                 <button><a href="">Resume</a></button>
            </div>
            </div>
          </div>) }
        </div>
        
     </>
  )
}

export default Navbar