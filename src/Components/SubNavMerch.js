import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function SubNavMerch() {
 
  return (
    <AppBar position="static">
      <Container sx={{ 
        maxWidth: "xl"
        }}>

        <Toolbar disableGutters>
        
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/merch/shirts"
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
            Shirts
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/merch/hats"
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
            Hats
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/merch/mugs"
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
            Mugs
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/merch/shirts"
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
            Shirts
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/merch/hats"
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
            Hats
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/merch/mugs"
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
            Mugs
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default SubNavMerch;