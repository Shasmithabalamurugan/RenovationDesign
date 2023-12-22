import React from "react";

import { Outlet } from "react-router-dom";
import DrawerAppBar from "./Navbar";

const home = () =>{
  return(
    
    <div >
     <DrawerAppBar/>

      <Outlet/>
    </div>
  )
}
export default home;