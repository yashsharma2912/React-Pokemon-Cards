import React from 'react'
import './app.css'
import Navbar from './components/navbar'; 
import Footer from './components/footer';
import Baner from './components/Baner';
import Skills from './components/skills';


const App = () => {
  return (
    <div>
      <div className="container">
      <Navbar />
      <Baner/>
      <Footer/>
      </div>
    </div>
  )
  
}

export default App;