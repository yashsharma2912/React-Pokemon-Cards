import React from 'react'
import "../components/colors.css"
import ProjCard from './projectComp/ProjCard'

const data = [
   {
   id:1,
   Title:"Fiverr-Clone",
   imgUrl:"",
   cTag: "Fiverr",
   color: "green",
   tags:{
      one: "react.js",
      two: "Node.js",
      three: "Express",
   },
  },
   {
   id:2,
   Title:"Pinterest-Clone",
   imgUrl:"",
   cTag: "Pinterest",
   color: "red",
   tags:{
      one: "Html",
      two: "Tailwind",
      three: "Express",
   },
  },
   {
   id:3,
   Title:"SociaBot",
   imgUrl:"",
   cTag: "SociaBot",
   color: "blue",
   tags:{
      one: "Node.js",
     
   },
  },

];
const Projects = () => {
   return (
    <div data-scroll data-scroll-section data-scroll-speed="0.8s" className='projcont'>
       <h2>Here's a glimpse into the heartfelt experiences of my incredible projects. <br />
Your trust fuels my passion. ❤️</h2>
   <div className='Project'>
      {data.map((item) => <ProjCard 
      key={item.id}
      name={item.Title}
      screen={item.cTag}
      color={item.color}
      one={item.tags.one}
      two={item.tags.two}
      three={item.tags.three}
      /> )}
   </div>

   </div>
  )
}

export default Projects