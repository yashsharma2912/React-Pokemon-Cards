import React from 'react'
import Projectcard from './projcomp/card'

const Projects = () => {
  const text1 = "Created using HTML CSS and JavaScript. For getting real time news here i have used newsapi.org it has included searching and paging feature, It is a dynamic web project and fully responsive"
  return (
    <div className="Projects">
        <div className="topProject">
           <div className="projectgrid">
             <Projectcard name="News-App-Using-Js" date="DEC 2023" para={ text1 }/>
             <Projectcard name="Pinterest-Using-React" date="Jan 2024" para={ text1 }/>
             <Projectcard name="News-App-Using-Js" date="DEC 2023" para={ text1 }/>
           </div>
        </div>
        
    </div>
  )
}

export default Projects