import React from 'react'
import './app.css'
import Navbar from './components/navbar'; 
import Baner from './components/Baner';
import Marquee from './components/marquee1';
import Skills from './components/skills';
// import Footer from './components/footer';


const App = () => {
  return (
    <div>
      <div className="container">
      <Navbar />
      <Baner/> 
      
      <Skills skillName="React" skillLevel="Intermediate"/>
      <Skills skillName="C++ and DSA" skillLevel="Beginner"/>
      <Skills skillName="Tailwind CSS" skillLevel="Intermediate"/>
      <Skills skillName="JavaScript" skillLevel="Beginner"/>
      <Skills skillName="HTML5" skillLevel="Expert"/>
      <Skills skillName="CSS" skillLevel="Expert"/>
      <Marquee/>
      {/* <Footer/> */}
      </div>
    </div>
  )
  
}

export default App;