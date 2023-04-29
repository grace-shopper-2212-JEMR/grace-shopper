import React from 'react'
import { Typography } from '@mui/material'
import SubNavAbout from './SubNavAbout'

const AboutCareers = () => {
  return (
    <div>
      <SubNavAbout/>
       <Typography
       sx={{
        textAlign: 'center',
        fontFamily: 'verdana',
        fontSize: '1.5rem',
        mx: 'auto',
        marginTop: '2rem',
        marginBottom: '1rem',
        maxWidth: '60%'
       }}>
        Currently hiring 4 entry-level full stack. Remote optional, but any travel to and from Paris, France will be reimbursed. No coding test. $300k + benefits. Please contact us for further details and to apply.

        </Typography>
    </div>
  )
}

export default AboutCareers