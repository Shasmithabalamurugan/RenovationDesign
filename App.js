import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import Working from './Components/Working';
import Offerings from './Components/Offerings';


const App = () => {
  return (
    <>
    <Navbar/>
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Working' element={<Working/>}/>
        <Route path='/offerings' element={<Offerings/>}/>
       <Route path='/Login' element={<Login/>}/>

        
        
        
      </Routes>
    </div>
    </>
  )
}


export default App
