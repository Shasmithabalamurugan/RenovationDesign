import React from 'react'
import './Homepage.css';
import Background from '../Icons/Background.mp4'
import Footer from './Footer';
function Homepage() {
  return (
    <div>
    <div className='video'>
      <video autoPlay loop muted id='video'>
<source src={Background} type='video/mp4'></source>
</video>
      <div className='content'>
    <h1>Need Experts Help to Create <h1>
     </h1> a Home that Resonates You?</h1>
<br></br>
<br></br>
     <h2>Personalized Interior Design</h2>
     <br></br>
     <h2>Seamless Execution</h2>
     <br></br>
     <h2>On - Time Delivery</h2>
     <br></br>
     <br></br>
     <h3>Contact us: 6382126708</h3>
    
    </div>
<Footer/>
</div>
      
      </div>
  )
}

export default Homepage
