import React from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import SubNavAbout from './SubNavAbout'

const jobs = [
  {
    id: Math.floor(Math.random()*100),
    imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2019/08/pretty-barista-making-cup-coffee-shop-shutterstock_301690496.jpg',
    name: 'Baristas',
    // FIX THE LOCATION ID
    locationId: 'All',
    salaryRange: '$55-60/hour',
    description: 'Responsible for preparing and serving coffee and other beverages to customers. They must ensure the quality and consistency of the drinks, provide excellent customer service, and maintain a clean and organized workspace.',
    applyNow: 'https://youtu.be/dQw4w9WgXcQ'
  },
  {
    id: Math.floor(Math.random()*100),
    imageUrl: 'https://i.ibb.co/QnRQPm1/silly-coffee-photos-with-guy-and-his-computer.jpg',
    name: 'Website Developers',
    // FIX THE LOCATION ID
    locationId: 'Remote/Hybrid',
    salaryRange: '$300k-$350k',
    description: 'Currently hiring 4 entry-level full stack. Remote optional, but any travel to and from Paris, France will be reimbursed. No coding test. $300k + benefits. Feel free to apply below.',
    applyNow: 'https://youtu.be/dQw4w9WgXcQ'
  },
  {
    id: Math.floor(Math.random()*100),
    imageUrl: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/2-person-with-hand-full-of-coffee-beans-science-photo-library.jpg',
    name: 'SCA Coffee Buyers',
    // FIX THE LOCATION ID
    locationId: 'Cambridge',
    salaryRange: '$450k-$500k',
    description: "As a Specialty Coffee Association coffee buyer, you would be responsible for sourcing, selecting, and purchasing high-quality coffee beans from around the world. You would work closely with coffee producers and roasters to ensure that the beans meet the SCA's rigorous standards for specialty coffee.",
    applyNow: 'https://youtu.be/dQw4w9WgXcQ'
  },
]

const AboutCareers = () => {  return (
  <div>
    <SubNavAbout/>
    <h1 style={{textAlign:"center"}}>Available Positions:</h1>
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

{jobs.map(job => {
      return (
        <Card key={ job.id }sx={{ 
          maxWidth: 375,
          ':hover':{
            boxShadow: 5
          },
          display: 'flex', 
          flexDirection: 'column' 
          }}>
            {/* <Link to={`${location.id}`}> */}
            <CardMedia
              component="img"
              image={job.imageUrl}
              alt={job.name}
              sx={{ 
                aspectRatio: "4/5",
                objectFit: "cover",
                padding:"0", 
                borderRadius: ".5rem",
              }}
              />
              {/* </Link> */}
      <CardContent sx={{flexGrow: 1}}>
        <Typography gutterBottom variant="h5" component="div">
          {job.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <li style={{listStyleType: "none"}}>Location: {job.locationId}</li>
          <li style={{listStyleType: "none"}}>Salary Range: {job.salaryRange}</li>
          <li style={{listStyleType: "none"}}>Description: {job.description}</li>
        </Typography>
      </CardContent>
        <CardActionArea sx={{textAlign:'center'}}>
      <Button component='span' onClick={()=>window.open(job.applyNow)} size="small">Apply Now</Button>
    </CardActionArea>
  </Card>
      )
    })}
  </Box>
</div>
)
}
export default AboutCareers