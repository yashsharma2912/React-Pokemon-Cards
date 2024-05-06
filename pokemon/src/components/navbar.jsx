import React, { useState } from 'react'
import { FaClosedCaptioning } from 'react-icons/fa';
import { TbMenu } from 'react-icons/tb'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  const[menu,setMenu] = useState(true);
  return (
    <div className='navbar'>
       <h1>Yash <br />Sharma</h1>
       <ul>
        <Link className='link' to=""> Work </Link>
        <Link className='link' to="#edun"> Skills & Education </Link>
        <Link className='link' to=""> Contact </Link>
        <Link className='link' target='_blank' to="https://www.npmjs.com/package/react-router-hash-link "> Resume/CV </Link>
       </ul>
        <Link className='link' onClick={()=>setMenu(!menu)}>{menu ? <TbMenu className='menu-btn'/> : "X" }</Link>
    </div>
  )
}

export default Navbar