import React from 'react'
import { useState } from 'react'
import '../style.css'
import { motion } from 'framer-motion'
import p1 from "../../assets/p1.png"

const ProjCard = ({Props}) => {
   const[hover,setHover] = useState(false);
   
  return (
    <motion.div whileHover={{ scale: 1.04 }}
    onHoverStart={e => {}}
    onHoverEnd={e => {}} className='Projcard'>
      
          <li>Fiverr Clone</li>
          <div className="imgbox" onMouseEnter={() => setHover(true) } onMouseLeave={() => setHover(false)}>
           { hover && ( <motion.h3  initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 0.8 }}
              transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}>FIVERR</motion.h3> )}
           { hover && ( <div className="po"></div> )}
              <img src={p1} alt=""  />
          </div>
          {/* <div className="cardDesc">
             <li>This Project based on React.js</li>
             <li>I used Framer motion for animation</li>
             <li>This Project based on React.js</li>
          </div> */}
          <div className="botcard">
              <span>React.js</span>
              <span>Framer-Motion</span>
              <span>Locomotive.js</span>
          </div>
       
    </motion.div>
  )
}

export default ProjCard