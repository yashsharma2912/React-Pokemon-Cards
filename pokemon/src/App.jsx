import React from 'react'
import './app.css'
import '../src/utils/mediaQuery.css'
import Navbar from './components/navbar'; 
import Baner from './components/Baner';
import Projects from './components/projects';
import Marquee from './components/marquee1';
import Skills from './components/skills';
import SectionHeading from './components/sectionHeading';
import Footer from './components/footer';


const App = () => {
  return (
    <div>
      <div className="container">
      <Navbar />
      <Baner/> 

      <SectionHeading id="projectss" Head="PROJECTS"/>
      <Projects/>
     
      <SectionHeading Head="SKILLS"  id="skills"/>
      <Skills  skillName="React Js" skillLevel="Intermediate"/>
      <Skills  skillName="C++ and DSA" skillLevel="Beginner"/>
      <Skills  skillName="Tailwind CSS" skillLevel="Intermediate"/>
      <Skills  skillName="JavaScript" skillLevel="Beginner"/>
      <Skills  skillName="HTML5" skillLevel="Expert"/>
      <Skills  skillName="CSS" skillLevel="Expert"/>

      <SectionHeading Head="SERVICES"/>
      <Marquee/>
      
       <Footer/>
      </div>
    </div>
  )
  
}

export default App;