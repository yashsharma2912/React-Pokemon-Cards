import React from 'react'
import './app.css'
import Navbar from './components/navbar'; 
import Footer from './components/footer';
import Baner from './components/Baner';


const App = () => {
  return (
    <>
      <Navbar />
      <Baner/>
      <Footer/>
    </>
  )
  
}

export default App;