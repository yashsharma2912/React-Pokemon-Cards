import React from 'react'
import '../projcomp/card.css'
const Projectcard = (props) => {
  return (
    <div className="projectcards">
        <div className="cardimg">
            <img src="../src/assets/images/1.jpg" alt="project 1" className='pcimg' />
        </div>
        <div className="cardinfo">
           <h1>{props.name}</h1>
           <div className="infolink">
           <h2>{props.date}<span><a target='_blank' href="https://github.com/yashsharma2912?tab=overview&from=2024-01-01&to=2024-01-26"><i class="ri-github-fill github sc"></i></a></span></h2>
          
           </div>
           <p>{props.para}</p>
        </div>
    </div>
  )
}

export default Projectcard