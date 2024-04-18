import React,{ useRef } from 'react'
import './app.css'

import '../src/utils/mediaQuery.css'
import Navbar from './components/Navbar'; 
import Baner from './components/Baner';
import Projects from './components/Projects';
import Marquee from './components/Marquee';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SectionHeading from './components/SectionHeading';
import Footer from './components/Footer';
import Education from './components/Education';
import LocomotiveScroll from 'locomotive-scroll';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  const mainDiv = useRef(null);
  
  return (
      <BrowserRouter>
    <div>
      <div className="container" ref={mainDiv}>
      <Navbar />
      <Baner/> 
      <Marquee/>
      <SectionHeading id="projectss" Head="FEATURED PROJECTS"/>
      <hr />
      <Projects/>
     
     
      <SectionHeading Head="SKILLS & EDUCATION"  id="skills"/>
      <hr />
       <Skills/>
        <Contact/>
       
       <Footer/>
      
      </div>
      {/* <div className="hg">

      </div> */}
    </div>
    </BrowserRouter>
  )
  
}

export default App;