import '../components/Style.css'
import React from 'react'
import {motion} from "framer-motion"

const Marquee = () => {
  return (
    <motion.div
     
    className="mark">
         <div className="con">
             <h1>Web Developement</h1>
             <div className="dot"></div>
             <h1>Web Page Designing</h1>
             <div className="dot"></div>
             <h1>1 : 1 Teaching</h1>
             <div className="dot"></div>
             <h1>Graphic Designing</h1>
             <div className="dot"></div>
         </div>
         <div className="con">
             <h1>Web Developement</h1>
             <div className="dot"></div>
             <h1>Web Page Designing</h1>
             <div className="dot"></div>
             <h1>1 : 1 Teaching</h1>
             <div className="dot"></div>
             <h1>Graphic Designing</h1>
             <div className="dot"></div>
         </div>
         <div className="con">
             <h1>Web Developement</h1>
             <div className="dot"></div>
             <h1>Web Page Designing</h1>
             <div className="dot"></div>
             <h1>1 : 1 Teaching</h1>
             <div className="dot"></div>
             <h1>Graphic Designing</h1>
             <div className="dot"></div>
         </div>
    </motion.div>
  )
}

export default Marquee