import React from 'react'
import '../components/style.css'
import 'remixicon/fonts/remixicon.css'

const Baner = () => {
 
  return (
    <>
     <div className="baner flex">
         <div className="left-baner">
            <h1>I Am a <span className='titleTag'>Web Developer</span></h1>
            <p>
            Committed to a recent BBA graduate 
            specializing in computer applications, poised to embark on 
            a dynamic career in web development.
            Recent academic achievements include 
            bringing fresh perspectives and a solid
            foundation in computer science to innovative projects.
            </p> 
             <div className="socialicons">
             <a target='_blank' href="https://www.linkedin.com/in/yash-sharma-aa249b206/"><i className="ri-linkedin-box-fill linkedin sc"></i></a>
             <a target='_blank' href="https://github.com/yashsharma2912?tab=overview&from=2024-01-01&to=2024-01-26"><i className="ri-github-fill github sc"></i></a>
             <a target='_blank' href=" https://wa.me/message/B2VRY6NSNN23D1"><i className="ri-whatsapp-fill whatsapp sc"></i></a>
             <a target='_blank' href="https://twitter.com/yashsha78513053"><i className="ri-twitter-x-fill twitter sc"></i></a>
             <a target='_blank' href="https://twitter.com/yashsha78513053"><i className="ri-medium-fill sc twitter"></i></a>
             </div>
         </div>
         <div className="right-baner">
                   {/* <div className="circle1">

                   </div> */}
            <img className='banerImg' src="../../src/assets/images/Baner-img.png" alt="yash image"  width='500px'/>
         </div>
     </div>
         {/* <div className="overlay">
         </div> */}
    </>
  )
}

export default Baner