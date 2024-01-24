import React from 'react'
import '../components/style.css'
import { FaReact } from "react-icons/fa";

const Skills = (props) => {
  return (
    <div className='skills'>
       
       <div className="skillBox">
          <div className='skill'>
            <div className="over"></div>
             <h2>{props.skillName} <span></span></h2>
              <h3>{props.skillLevel}</h3>
            </div>
          </div>
    </div>
  )
}

export default Skills