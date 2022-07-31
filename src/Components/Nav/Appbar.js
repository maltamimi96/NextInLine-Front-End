import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import Link from '@mui/material/Link';
import SortIcon from '@mui/icons-material/Sort';
const settings = ['Dashboard', 'Logout'];
function Appbar() {


  return (
    <AppBar position="sticky"  color='primary'>
      <Container maxWidth="xl">
        <Toolbar>
          <Box>
                  <SortIcon
                    sx={{color:"white"}}
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                  >
                  </SortIcon>
                  <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    fontWeight: 500,
                    letterSpacing: '.3rem',
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  NEXT IN LINE
                </Typography>
 
          </Box>
             


        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Appbar