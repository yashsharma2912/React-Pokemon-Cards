import React from 'react'
import '../projcomp/card.css'
const Projectcard = (props) => {
  return (
    <div className="projectcards">
      <div className="cardover">
      </div>
        <div className="cardimg">
            <img src={props.img} alt="project 1" className='pcimg' />
        </div>
        <div className="cardinfo">
           <h1>{props.name}</h1>
           <div className="infolink">
           <h2>{props.date}</h2>
           </div>
           <p>{props.para}</p>
           <div className="cardNav">
           <a href={props.link1 }><i class={props.icon1}> </i></a>
           <a href={props.link2 }><i class={props.icon2}> </i></a>
           <a href={props.link3 }><i class={props.icon3}> </i></a>
           <a href={props.link4 }><i class={props.icon4}> </i></a>
           <a href={props.link5 }><i class={props.icon5}> </i></a>
           </div>
        </div>
        
    </div>
  )
}

export default Projectcard