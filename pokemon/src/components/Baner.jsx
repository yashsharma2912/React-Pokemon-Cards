import React from 'react'
import '../components/style.css'

const Baner = () => {
  return (
    <>
     <div className="baner flex">
         <div className="left-baner">
            <h1>I Am a Web Developer</h1>
            <p>
            Committed to a recent BBA graduate 
            specializing in computer applications, poised to embark on 
            a dynamic career in web development.
            Recent academic achievements include 
            bringing fresh perspectives and a solid
            foundation in computer science to innovative projects.
            </p> 
            <div className="whatsapp">
           <button className='wp-btn'>Let's Chat on Whatsapp</button>
         </div>
         </div>
         <div className="right-baner">
                   
            <img className='banerImg' src="../../src/assets/images/Baner-img.png" alt="yash image"  width='500px'/>
         </div>
     </div>
         {/* <div className="overlay">
         </div> */}
    </>
  )
}

export default Baner