import React from 'react'
import './Container1.css'
import Container from 'react-bootstrap/Container';


const Container1 = () => {
  return (
    
      <Container>
      <div class="cards-list">
  
  <div class="card 1" style={{height:'200px'}}>
    <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
    <div class="card_title title-white">
    </div>
      <p>Card Title</p>
  </div>
  
    <div class="card 2" style={{height:'200px'}}>
    <div class="card_image">
      <img src="https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg" />
      </div>
    <div class="card_title title-white">
      <p>Card Title</p>
    </div>
  </div>
  
  <div class="card 3" style={{height:'200px'}}>
    <div class="card_image">
      <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
    </div>
    <div class="card_title">
      <p>Card Title</p>
    </div>
  </div>
    
    <div class="card 4"style={{height:'200px'}}>
    <div class="card_image">
      <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
      </div>
    <div class="card_title title-black">
      <p>Card Title</p>
    </div>
    </div>
  
  </div>
  </Container>
      
  )
}

export default Container1

