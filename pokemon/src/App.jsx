import React from 'react'
import './app.css'
import Navbar from './components/navbar'; 
import Baner from './components/Baner';
import Marquee from './components/marquee1';
import Skills from './components/skills';
import SectionHeading from './components/sectionHeading';
// import Footer from './components/footer';


const App = () => {
  return (
    <div>
      <div className="container">
      <Navbar />
      <Baner/> 
      <SectionHeading Head="PROJECTS"/>
      <SectionHeading Head="SKILLS"/>
      <Skills skillName="React Js" skillLevel="Intermediate"/>
      <Skills skillName="C++ and DSA" skillLevel="Beginner"/>
      <Skills skillName="Tailwind CSS" skillLevel="Intermediate"/>
      <Skills skillName="JavaScript" skillLevel="Beginner"/>
      <Skills skillName="HTML5" skillLevel="Expert"/>
      <Skills skillName="CSS" skillLevel="Expert"/>
      <SectionHeading Head="SERVICES"/>
      <Marquee/>
      <SectionHeading Head="CONTACT"/>
      {/* <Footer/> */}
      </div>
    </div>
  )
  
}

export default App;