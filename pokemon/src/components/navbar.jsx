import React from 'react'
// import { Link } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div>
       <h1>Yash <br />Sharma</h1>
       <ul>
         <Link to="#priya">Contact</Link>
       </ul>
    </div>
  )
}

export default Navbar