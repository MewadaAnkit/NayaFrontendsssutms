import React from 'react'
import MainNavbar from './Navbar'
import Navbar2 from './Navbar2';
import Footer from './Footer';
import Box from './Box';
import Container from './Container';
import Container1 from './Container1';
import Slider from './Slider';
import Sliderimage from './Sliderimage';
import Event from './Event';
import Sl from './Sl';
import Gallery from './Gallery';
import N from './N';
import Spread from './Spread';
import Message from './Message';




function MainPage() {
  return (
    <div>
      <MainNavbar />
     <N/>
      <Slider />
      <Container />
      <Event /><br/> <br/>  <br/> <br/>  
      <Gallery/><br/> <br/> 
      <Message/> 
      <Spread/>
      <Sliderimage /><br/> <br/>  
    
      <Sl/><br/> <br/>   
      <Footer />
    </div>
  )
}

export default MainPage
