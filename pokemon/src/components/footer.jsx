import React from 'react'
import '../components/footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer flex'>
         <div className="left">
            <h1 className=''>About</h1>
            <p className='aboutText'>Committed to a recent BBA graduate 
            specializing in computer applications, poised to embark on 
            a dynamic career in web development.
             Recent academic achievements include 
             bringing fresh perspectives and a solid
              foundation in computer science to innovative projects.</p>
            <div className="social-links">
               <a href="#"> LinkedIN</a>
               <a href="#"> Github</a>
               <a href="#"> Twitter</a> <br />
            </div>
         </div>
         <div className="middle flex">
              <div className="mid-left">
                  <h1>Links</h1>
                  <ul className='link-items'>
                     <li><a href="#">Home</a></li>
                     <li><a href="#">Projects</a></li>
                     <li><a href="#">Skills</a></li>
                     <li><a href="#">Education</a></li>
                  </ul>
              </div>
              <div className="mid-right">
              <h1>Services</h1>
                  <ul className='service-items'>
                     <li><a href="#">Web Developement</a></li>
                     <li><a href="#">Web page designing</a></li>
                     <li><a href="#">Graphics designing</a></li>
                     <li><a href="#">one on one teaching</a></li>
                  </ul>
              </div>
         </div>
         <div className="right">
            <h1>Have any Question ?</h1>
            <ul className='contact-items'>
              <li>Amravati Highway, Nagpur <br /> Maharashtra, India</li>
              <li>+91 8855974714 / 9284516302</li>
              <li>syash8811@gmail.com</li>
            </ul>
      <h3 className='cr'>Made With ❤️ by <a href="https://www.linkedin.com/in/yash-sharma-aa249b206/" target='#blank_'>Yash Sharma</a></h3>
         </div>
      </div>
    </>
  )
}

export default Footer