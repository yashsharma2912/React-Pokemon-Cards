import React from 'react'
import '../components/style.css'

const SectionHeading = (props) => {
  return (
    <div className='sectionHead'>
        <h1>{props.Head}</h1>
    </div>
  )
}

export default SectionHeading