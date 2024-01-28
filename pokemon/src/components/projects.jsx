import React from 'react'
import Projectcard from './projcomp/card'

const Projects = () => {
  const text1 = "Created using HTML CSS and JavaScript. For getting real time news here i have used newsapi.org it has included searching and paging feature, It is a dynamic web project and fully responsive"
  return (
    <div className="Projects">
        <div className="topProject">
           <div className="projectgrid">

             <Projectcard 

              img = "../src/assets/images/1.jpg"
              name="News-App-Using-Js"
              date="DEC 2023" 
              para={ text1 }
             
              icon1="ri-github-fill github sc"   
              icon2="ri-javascript-fill sc"
              icon3="ri-css3-fill sc "
              icon4="ri-html5-fill sc"
              icon5=" "

              link1=" "
              link2=" "
              link3=" "
              link4=" "
              link5=" "
              />

              <Projectcard 

              img = "../src/assets/images/1.jpg"
              name="News-App-Using-Js"
              date="DEC 2023" 
              para={ text1 }
             
              icon1="ri-github-fill github sc"   
              icon2="ri-javascript-fill sc"
              icon3="ri-css3-fill sc "
              icon4="ri-html5-fill sc"
              icon5=" "

              link1=" "
              link2=" "
              link3=" "
              link4=" "
              link5=" "
              />


             </div>
        </div>
        
    </div>
  )
}

export default Projects