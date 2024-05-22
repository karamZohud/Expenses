import { grey } from '@mui/material/colors';


   const darkTheme = (mode) => ({
        palette: {
            mode,
            ...(mode === 'light'
              ? {
                  karam:{
            main:"teal",
            
          },
          side:{
            main:grey[300]
          }
                }
              : {
                 
                side:{
                  main:grey[900]
                }
                }),
              
              
      
      
          },
      });
      export  default  darkTheme;