import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import About from './About';
import AboutLocations from './AboutLocations';
import AboutCareers from './AboutCareers';
import AboutContact from './AboutContact';
import { Link } from 'react-router-dom';

function SubNavAbout() {
 
  return (
    <div id='subnav'>
    <AppBar position="static"
    style={{ background: '#029987' }}>
      <Container sx={{ 
        maxWidth: "xl"
        }}>

        <Toolbar disableGutters={true}>
        <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              component: 'a',
              display: { xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
            <Link to='../about/' element={<About/>} style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
          </Typography>
        
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              component: 'a',
              display: { xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
            <Link to='../about/locations' element={<AboutLocations/>} style={{ textDecoration: 'none', color: 'inherit' }}>Locations</Link>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              component: 'a',
              display: { xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
            <Link to='../about/contact' element={<AboutContact/>} style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
          </Typography>

          
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              component: 'a',
              display: { xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
            <Link to='../about/careers' element={<AboutCareers/>} style={{ textDecoration: 'none', color: 'inherit' }}>Careers</Link>
          </Typography>


          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              component: 'a',
              display: { xs: 'none', md: 'flex'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
          <Link to='../about/' element={<About/>} style={{ textDecoration: 'none', color: 'inherit' }}>About</Link>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              component: 'a',
              display: { xs: 'none', md: 'flex'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
            <Link to='../about/locations' element={<AboutLocations/>} style={{ textDecoration: 'none', color: 'inherit' }}>Locations</Link>
          </Typography>


          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              component: 'a',
              display: { xs: 'none', md: 'flex'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
            <Link to='../about/contact' element={<AboutContact/>} style={{ textDecoration: 'none', color: 'inherit' }}>Contact</Link>
          </Typography>
          
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              component: 'a',
              display: { xs: 'none', md: 'flex'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
            <Link to='../about/careers' element={<AboutCareers/>} style={{ textDecoration: 'none', color: 'inherit' }}>Careers</Link>
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default SubNavAbout;