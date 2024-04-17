import React from 'react'
import { Link } from 'react-router-dom'
import "../components/style.css"

const Contact = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3s" className='contact'>
       <h1 className='cn'>CONTACT</h1>
        <div className='cnbox'>
        <div className="ready">
             <h1>READY</h1>
             <h1>TO START</h1>
             <h1>THE PROJECT ?</h1>
         <a href="syash8811@gmail.com">syash8811@gmail.com</a>
        </div>
        <div className="cnForm">
            <h1>FORM</h1>
            <input type="text" placeholder='Enter Your Name' name='name' />
            <textarea name="Comment" id="" cols="30" rows="10" placeholder='Comments'></textarea>
            <button name='submit'>Submit</button>
        </div>
        </div>
    </div>
  )
}

export default Contact