import React from 'react'
import '../components/style.css'

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

import "./colors.css"

import ed1 from "../assets/ed1.jpeg"





const Skills = (props) => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.5s" >
      
      <h3 className='set'>Skills & Education: Equipping myself with essential expertise and academic prowess to pave <br />the path toward success and continuous growth.</h3>
    <div  className='skills'>
      
        <div className="skillBox">
            <div className="skillcard">
               <FaNodeJs className='icon'/>
            </div>
            <div className="skillcard">
               <FaReact className='icon cyan'/>           
            </div>
            <div className="skillcard">
               <SiExpress className='icon black'/>           
            </div>
            <div className="skillcard">
               <SiMongodb className='icon'/>           
            </div>
            <div className="skillcard">
               <SiMysql className='icon'/>           
            </div>
            <div className="skillcard">
               <TbBrandCpp className='icon blue'/>           
            </div>
            <div className="skillcard">
               <SiJavascript className='icon yellow'/>           
            </div>
            <div className="skillcard">
               <FaHtml5 className='icon orange'/>           
            </div>
            <div className="skillcard">
               <SiTailwindcss className='icon cyan'/>           
            </div>
        </div>
        <div className="edu">
                
              <div className="edubox">
                  <div className="edutext">
                  <p className="edTitle">
                      Brihan Maharashtra College of Commerce
                  </p>
                  <p className="edDesc">
                      BBA - Computer Applications 
                      <span>(2020 - 2023)</span>
                  </p>

                  <ul>
                     <li>I have learned Core concepts of web development</li>
                     <li>Along with Coursework i have learned c++ as <br />a programing language</li>
                     <li>And basic concepts of project management</li>
                  </ul>
                  </div>
              </div>
              <div className="edubox">
                  <div className="edutext">
                  <p className="edTitle">
                      S.P.C.A.S
                  </p>
                  <p className="edDesc">
                     H.S.C 
                      <span>(2020 - 2023)</span>
                  </p>

                  <ul>
                     <li>Gained curiosity in Maths & Physics</li>
                     <li>Uderstanding of Programming Language</li>
            
                  </ul>
                  </div>
              </div>
        </div>         

    </div>
    </div>
  )
}

export default Skills