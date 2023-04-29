import React from 'react'
import { Typography } from '@mui/material'
import SubNavAbout from './SubNavAbout'

const AboutLocations = () => {
  return (
    <div>
      <SubNavAbout/>
        <Typography
       sx={{
        textIndent: '3rem',
        fontFamily: 'verdana',
        fontSize: '1.3rem',
        mx: 'auto',
        marginTop: '1rem',
        marginBottom: '1rem',
        maxWidth: '75%'
       }}>
        <h3>Computing Tabulating Recording Company</h3>
         <ul>
         
         <li style={{listStyleType: 'none'}}>1701 North Street</li>
         <li style={{listStyleType: 'none'}}>Endicott, New York</li>
         <li style={{listStyleType: 'none'}}>Hours:</li>
         <ul>
         <li style={{listStyleType: 'none'}}>Mon-Fri: 8-6</li>
         <li style={{listStyleType: 'none'}}>Sat-Sun: 8-5</li>
         </ul>
         </ul>
        <h3>Micro-Soft</h3>
         <ul>
         
         <li style={{listStyleType: 'none'}}>199 California St NE</li>
         <li style={{listStyleType: 'none'}}>Albuquerque, NM</li>
         <li style={{listStyleType: 'none'}}>Hours:</li>
         <ul>
         <li style={{listStyleType: 'none'}}>Mon-Fri: 7-6</li>
         <li style={{listStyleType: 'none'}}>Sat-Sun: 7-4</li>
         </ul>
         </ul>

         <h3>The Facebook</h3>
         <ul>
         
         <li style={{listStyleType: 'none'}}>95 Dunster St</li>
         <li style={{listStyleType: 'none'}}>Cambridge, MA</li>
         <li style={{listStyleType: 'none'}}>Hours:</li>
         <ul>
         <li style={{listStyleType: 'none'}}>Mon-Fri: 6-6</li>
         <li style={{listStyleType: 'none'}}>Sat-Sun: 7-6</li>
         </ul>
         </ul>
</Typography>
      
    </div>
  )
}

export default AboutLocations