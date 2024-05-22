import React, { useEffect, useMemo, useState } from 'react'
import Dashborad from './Dashboard/Dashborad'
import { Outlet } from 'react-router-dom'
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import darkTheme from './styles/styleTheme';

export default function Root() {
  const [mode, setmode] = useState("light");
  const [toggleMenu,setToggle]=useState("none");
const dr=240;
useEffect(()=>{
  setmode(window.localStorage.getItem("mode"));
},[])

const darkThemes =useMemo(() => createTheme(darkTheme(mode)), [mode]);
 
  return (
    <ThemeProvider theme={darkThemes}>  
<CssBaseline />
   
<Dashborad mode={mode} toggleMenu={toggleMenu} setToggle={setToggle} setmode={setmode} />

<Box sx={{marginLeft:{md:`${dr}px`,xs:toggleMenu=="block"?`${dr}px`:0}}}>
<Outlet/>
</Box>



    </ThemeProvider>
  )
}
