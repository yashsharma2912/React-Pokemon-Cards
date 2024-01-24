import React from 'react'
import '../components/style.css'
import { FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <div>
       <div id='skills'>
            <h1 className='sectionHeading'> Skills</h1>
       </div>
       <div className="skillBox">
         <FaReact className='reactIcon' />
         <p>React js</p>
       </div>
    </div>
  )
}

export default Skills