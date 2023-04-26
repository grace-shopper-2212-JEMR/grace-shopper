import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function SubNavDrinks() {
 
  return (
    <AppBar position="static">
      <Container sx={{ 
        maxWidth: "xl",
        maxHeight:"32px"
        }}>

        <Toolbar disableGutters>
        
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/drinks/coffee"
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
            Coffee
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/drinks/tea"
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
            Tea
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/drinks/mugs"
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
            Shots
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default SubNavDrinks;