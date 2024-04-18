import React from 'react'
import ProjCard from './projectComp/ProjCard'

const Projects = () => {
   return (
    <div data-scroll data-scroll-section data-scroll-speed="0.6s" className='projcont'>
       <h2>Here's a glimpse into the heartfelt experiences of my incredible projects. <br />
Your trust fuels my passion. ❤️</h2>
   <div className='Project'>
       <ProjCard/>
       <ProjCard/>
       <ProjCard/> 
       <ProjCard/>
       <ProjCard/>
       <ProjCard/>     
   </div>

   </div>
  )
}

export default Projects