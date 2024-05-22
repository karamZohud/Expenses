import React, { useState } from 'react'
import Side from "./SideBar"
import Topbar from './Topbar'
import './dashborad.css'

export default function Dashborad({setmode,mode,toggleMenu,setToggle}) {
  const drawerWidth=240;
 
  return (
 <div>
  <Side setmode={setmode} toggleMenu={toggleMenu} setToggle={setToggle} mode={mode}/>
<div  >
<Topbar toggleMenu={toggleMenu} setToggle={setToggle}/>

</div>

 </div>
      
    






  )
}
