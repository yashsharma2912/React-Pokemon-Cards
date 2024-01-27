import React from 'react'
import '../components/style.css'
import { FaReact } from "react-icons/fa";



const Skills = (props) => {
  return (
    <div className='skills'>
       
       <div className="skillBox">
          <div className='skill'>
            <div className="over"></div>
             <div className='skilltag'>
               <h2>{props.skillName} </h2>
               <span>{props.icon}</span>
             </div>
              <h3>{props.skillLevel}</h3>
            </div>
          </div>
    </div>
  )
}

export default Skills