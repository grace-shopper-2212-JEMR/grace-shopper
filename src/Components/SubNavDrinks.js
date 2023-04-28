import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import DrinksCoffees from './DrinksCoffees';
import DrinksTeas from './DrinksTeas';
import DrinksSmoothies from './DrinksSmoothies';
import Merch from './Merch';

function SubNavDrinks() {
 
  return (
    <AppBar position="static">
      <Container sx={{ 
        maxWidth: "xl"
        }}>

        <Toolbar disableGutters>
        
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
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
            <Link to='../menu/coffee' element={<DrinksCoffees/>} style={{ textDecoration: 'none', color: 'inherit' }}>Coffee</Link>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
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
            <Link to='../menu/tea' element={<DrinksTeas/>} style={{ textDecoration: 'none', color: 'inherit' }}>Tea</Link>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
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
            <Link to='../menu/smoothies' element={<DrinksSmoothies/>} style={{ textDecoration: 'none', color: 'inherit' }}>Smoothies</Link>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
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
            <Link to='../menu/coffee' element={<DrinksCoffees/>} style={{ textDecoration: 'none', color: 'inherit' }}>Coffee</Link>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
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
            <Link to='../menu/tea' element={<DrinksTeas/>} style={{ textDecoration: 'none', color: 'inherit' }}>Tea</Link>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
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
            <Link to='../menu/smoothies' element={<DrinksSmoothies/>} style={{ textDecoration: 'none', color: 'inherit' }}>Smoothies</Link>
          </Typography>



        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default SubNavDrinks;
