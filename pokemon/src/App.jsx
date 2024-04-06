import React,{ useRef } from 'react'
import './app.css'

import '../src/utils/mediaQuery.css'
import Navbar from './components/Navbar'; 
import Baner from './components/Baner';
import Projects from './components/Projects';
import Marquee from './components/Marquee';
import Skills from './components/Skills';
import SectionHeading from './components/SectionHeading';
// import Footer from './components/footer';
import Education from './components/Education';
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  const mainDiv = useRef(null);
  return (
    <div>
      
      <div className="container" ref={mainDiv}>
      <Navbar />
      <Baner/> 
      <Marquee/>
      <SectionHeading id="projectss" Head="FEATURED PROJECTS"/>
      <Projects/>
     <hr />
      <SectionHeading Head="SKILLS & EDUCATION"  id="skills"/>
      <Skills  skillName="React Js" skillLevel="Intermediate"/>
      <Skills  skillName="C++ and DSA" skillLevel="Beginner"/>
      <Skills  skillName="Tailwind CSS" skillLevel="Intermediate"/>
      <Skills  skillName="JavaScript" skillLevel="Beginner"/>
      <Skills  skillName="HTML5" skillLevel="Expert"/>
      <Skills  skillName="CSS" skillLevel="Expert"/>

      <SectionHeading Head="SERVICES"/>
      
      <SectionHeading Head="SKILLS & EDUCATION"/>
      <Education/>
       {/* <Footer/> */}
      </div>
    </div>
  )
  
}

export default App;