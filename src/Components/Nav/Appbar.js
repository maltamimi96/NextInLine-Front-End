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
import Tooltip from "@mui/material/Tooltip";

import SortIcon from '@mui/icons-material/Sort';
const settings = ['Login', 'Register'];
function Appbar() {

  const pages = ["Products", "Pricing", "Blog"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>

        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            fontWeight: 400,
            letterSpacing: ".3rem",
            textDecoration: "none",
            mr: 2,
            display: { xs: "none", md: "flex" }
          }}
        >
          NEXT IN LINE
        </Typography>


        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            fontWeight: 500,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1
          }}
        >
          NEXT IN LINE
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white",fontWeight:'500', display: "block" }}
              href={`/${page}`}
            >
              {page}
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <SortIcon
                sx={{ color: "white" }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
              />{" "}
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((pages) => (
              <MenuItem key={pages} onClick={handleCloseUserMenu}>
                <Typography textAlign="center" href={`/${pages}`} sx={{color:'black'}}>{pages}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Appbar

{/* <AppBar position="static"  color='primary'>
<Container maxWidth='xl'>
<Toolbar disableGutters>
    <Box sx={{display:'flex',justifyContent:'space-between'}}>
    <Box sx={{paddingLeft:10}}>
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
    <Box sx={{display:'flex'}}>
      <Button color='secondary'>Login</Button>
      <Button color='secondary'>Register</Button>
    </Box>
       
</Box>
</Toolbar>
</Container>
</AppBar> */}