import {createTheme } from '@mui/material/styles';


 export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: 'rgb(14, 10, 5) ',
        },
        secondary: {
          main: '#F0FFFF',
        },
        background: {
          default: '#e4e4e3',
        },
      }, 
    typography:{
        fontFamily: "Quicksand",
                    fontWeightLight:400,
                    fontWeightRegular:500,
                    fontWeightMedium:600,
                    fontWeightBold:700, 
                    
      body1:{color: 'white'},
      body2:{color: 'black'},
      h4:{color: 'white'},
      h2:{color: 'white'},
      h6:{color: 'white'},
      h5:{color: 'white'}



    },

    button:{
      
    }
   



  });

