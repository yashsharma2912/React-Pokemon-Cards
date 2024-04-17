import React from 'react'
import ProjCard from './projectComp/ProjCard'

const Projects = () => {
   return (
    <div data-scroll data-scroll-section data-scroll-speed="0.4s">
       <h2>Here are some </h2>
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