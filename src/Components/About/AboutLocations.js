import React from 'react'

import { Typography } from '@mui/material'
import SubNavAbout from './SubNavAbout'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';


const locations = [
  {
    id: Math.floor(Math.random()*100),
    imageUrl: 'https://freight.cargo.site/t/original/i/039d199c7b1541b3e338143ee06a962c079d35889632996a874dabdd19b95282/devo.JPG',
    name: 'Computing Tabulating Recording Company',
    streetAddress: '1701 North Street',
    city: 'Endicott',
    state: 'New York',
    mfHours: '8am - 6pm',
    ssHours: '8am - 5pm',
    historyUrl: 'https://en.wikipedia.org/wiki/Computing-Tabulating-Recording_Company',
    googleMaps: 'https://goo.gl/maps/51zks8TzavEm2Nbk6'
  },
  {
    id: Math.floor(Math.random()*100),
    imageUrl: 'https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2018/03/10121937/58586699_10157279130757783_3633541610861494272_o.jpg',
    name: 'Micro-Soft',
    streetAddress: '199 California St., NE',
    city: 'Albuquerque',
    state: 'New Mexico',
    mfHours: '6am - 6pm',
    ssHours: '7am - 4pm',
    historyUrl: 'https://en.wikipedia.org/wiki/History_of_Microsoft',
    googleMaps: 'https://goo.gl/maps/x3eaxiC121Y2gUx99'

  },
  {
    id: Math.floor(Math.random()*100),
    imageUrl: 'https://d3emaq2p21aram.cloudfront.net/media/cache/venue_roundup_single_image_flex/uploads/%200Regular_Roundup/2018/4-April/SFCoffee/SightglassCoffee-AdamSzafranski-01.jpg',
    name: 'FaceMash',
    streetAddress: '95 Dunster St.',
    city: 'Cambridge',
    state: 'Massachusetts',
    mfHours: '6am - 6pm',
    ssHours: '7am - 6pm',
    historyUrl: 'https://en.wikipedia.org/wiki/History_of_Facebook',
    googleMaps: 'https://goo.gl/maps/PhUSEzvLMRXAouAi6'
  },
]


const AboutLocations = () => {
  return (
    <div>
      <SubNavAbout/>
    <Box
      sx={{
        m: 5,
        mx: 'auto',
        px: '1rem',
        maxWidth: 1200,
        display: 'grid',
        columnGap: 1,
        rowGap: '1rem',
        gridTemplateColumns: 'repeat(3, 1fr)',
        borderColor: 'primary.main',
        borderRadius: "2rem",
      }}>  

  {locations.map(location => {
        return (
          <Card key={ location.id }sx={{ 
            maxWidth: 375,
            ':hover':{
              boxShadow: 5
            },
            display: 'flex', 
            flexDirection: 'column' 
            }}>
              <CardMedia
                component="img"
                image={location.imageUrl}
                alt={location.name}
                sx={{ 
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  padding:"0", 
                  borderRadius: ".5rem",
                }}
                />
        <CardContent  sx={{flexGrow: 1}}>
          <Typography gutterBottom variant="h5" component="div">
            {location.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <li style={{listStyleType: "none"}}>{location.streetAddress}</li>
            <li style={{listStyleType: "none"}}>{location.city}, {location.state}</li>
            <li style={{listStyleType: "none"}}>Monday - Friday: {location.mfHours}</li>
            <li style={{listStyleType: "none"}}>Saturday - Sunday: {location.ssHours}</li>
          </Typography>
        </CardContent>
          <CardActionArea sx={{textAlign:'center'}}>
        <Button component='span' onClick={()=>window.open(location.historyUrl)} size="small">Location History</Button>
        <Button component='span' onClick={()=>window.open(location.googleMaps)} size="small">Google Maps</Button>
      </CardActionArea>
    </Card>
        )
      })}
    </Box>
  </div>
  )
}

export default AboutLocations