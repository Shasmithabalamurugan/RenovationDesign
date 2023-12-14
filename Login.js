import React, { useState } from 'react'
import './Login.css'
import user_icon from '../Icons/user icon.png'
import email_icon from '../Icons/emailicon.png'
import Password_icon from '../Icons/passwrd icon.png'

const Login = () => {
  const [action,setAction] = useState("Sign Up");
  return (

    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      

      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
      <img src={user_icon}alt="" style={{width:'20px',height:'20px'}}></img>
      <input type="text" placeholder='   Name'required/>
    </div>}
      
      <div className="input">
      <img src={email_icon}alt=" "style={{width:'30px',height:'30px'}}></img>
      <input type="text"placeholder=' Email'required/>
    </div>
      <div className="input">
      <img src={Password_icon}alt=" "style={{width:'33px',height:'33px'}}></img>
      <input type="password"placeholder='Password'required/>
    </div>
    </div>
    {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password?<span>click here!</span></div>}
    
    <div className="submit-container">
    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
    <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
    
      
    </div>
    </div>
   
  )
}

export default Login;
