// import React, { useEffect } from 'react';
// import Home from './Home';
// import Login from './Login';
// import Cart from './Cart';
// import { loginWithToken, fetchCart } from '../store';
// import { Link, Routes, Route } from 'react-router-dom';

// const App = ()=> {
  
//   return (
//     <div>
//       {
//         auth.id ? <Home /> : <Login />
//       }
//       {
//         !!auth.id  && (
//           <div>
//             <nav>
//               <Link to='/'>Home</Link>
//               <Link to='/cart'>Cart</Link>
//             </nav>
//             {/* <Routes>
//               <Route path='/cart' element={ <Cart /> } />
//             </Routes> */}
//           </div>
//         )
//       }
//     </div>
//   );
// };

// export default Nav;

// to install MUI styles and icons copy this to terminal: npm install @mui/icons-material @mui/material @emotion/styled @emotion/react



import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CoronavirusSharpIcon from '@mui/icons-material/CoronavirusSharp';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../store/auth';
import Logout from './Logout'


export default function Nav() {
  const { auth } = useSelector(state => state);
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  if(auth){console.log(auth)}
    const pages = ['Home', 'Menu', 'Merch', 'About'];
    let settings = []
    auth.id ? (settings = ['Account', 'Cart', 'Logout']) : (settings = ['Account', 'Cart', 'Login'])

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

  const navigateTo = (page) => {
    navigate(`/${page.toLowerCase()}`)
  }



  return (
    <AppBar position="static" style={{ background: '#004C60' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <EmojiFoodBeverageIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Script for Java
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => navigateTo(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <EmojiFoodBeverageIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Script for Java 
          </Typography>
            
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigateTo(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex'},
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
            {!auth.id ? (<a href={`https://github.com/login/oauth/authorize?client_id=${window.client_id}`} style={{color: 'white', textDecoration: 'none'  }}>Github Login</a>):(<Link element={<Logout/>} style={{color: 'white', textDecoration: 'none'  }}>Github Logout</Link>)}
            
          </Typography>

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none'},
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '.05rem',
              color: 'white',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
            {!auth.id ? (<a href={`https://github.com/login/oauth/authorize?client_id=${window.client_id}`} style={{color: 'white', textDecoration: 'none'  }}>Github Login</a>):(<Link element={<Logout/>}  style={{color: 'white', textDecoration: 'none'  }}>Github Logout</Link>)}
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Dwight Avatar" src="/static/images/avatarDS.jpeg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => navigateTo(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

