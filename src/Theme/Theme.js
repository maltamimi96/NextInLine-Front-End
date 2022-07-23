import {createTheme } from '@mui/material/styles';


 export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#2d4656',
        },
        secondary: {
          main: '#f50057',
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

    }

  });

