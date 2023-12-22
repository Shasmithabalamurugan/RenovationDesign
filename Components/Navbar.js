import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import logo from '../Icons/logo.png'

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo}style={{width:'45px',height:'45px'}}></img>
        </div>
        <div className='home'>
          <Link to="/">Homepage</Link>
        </div>
        <div className='working'>
          <Link to="/Working">Working</Link>
        </div>
        <div className='offerings'>
          <Link to="/Offerings">Offerings</Link>
        </div>
       
        <div className='login'>
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </div>
  
  )
}

export default Navbar;
