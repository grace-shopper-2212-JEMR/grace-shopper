import React from 'react'
import { Typography } from '@mui/material'
import SubNavAbout from './SubNavAbout'


const About = () => {
  return (
    <div>
    <SubNavAbout/>

    <Typography
       sx={{
        textAlign: 'center',
        fontFamily: 'verdana',
        fontSize: '1.5rem',
        fontWeight: '500',
        mx: 'auto',
        marginTop: '2rem',
        marginBottom: '1rem',
        maxWidth: '70%'
       }}>
        Let me tell you, there's nothing quite like a good cup of coffee to get the brain humming and the ideas flowing. 
    </Typography>

      <div id = 'aboutDiv'>
      <div id = 'aboutDivLeft'>
        <img src='static\images\silly coffee photos with guy and his computer.jpg' style={{borderRadius: '1rem', maxWidth: "100%"}}></img>   
      </div>
      <div id = "aboutDivRight">
      <Typography
       sx={{
          textIndent: '3rem',
          fontFamily: 'verdana',
          fontSize: '1.2rem',
          mx: 'auto',
          marginTop: '1rem',
          marginBottom: '1rem',
          maxWidth: '90%'
       }}>
         When you add technology to the mix, well, you've got something truly special. As shown by the most current studies, the human race needs a prescription for coffee! That's where we come in.

        At Script For Java, we're not just brewing up a tasty cup of joe, oh no. We're combining the best of two worlds, the world of coffee and the world of tech, to create something truly remarkable.

        Every cup of coffee we serve is made with the finest beans, roasted to perfection, and brewed with care. Every customer who walks through our door is treated like a valued member of the community.

        But that's not all, my friend. Our coffee company is more than just a place to grab a cup of coffee. It's a hub for tech enthusiasts, a place where they can come together to exchange ideas, discuss the latest trends, and work on their projects.
        </Typography>
        <Typography
          sx={{
            textIndent: '3rem',
            fontFamily: 'verdana',
            fontSize: '1.3rem',
            mx: 'auto',
            marginTop: '1rem',
            marginBottom: '1rem',
            maxWidth: '95%'
          }}>
        So if you're looking for a place to fuel your mind and body, look no further than Script for Java. With every sip of our delicious brew, you'll be inspired to tackle the challenges of the day. With every visit, you'll be part of a vibrant community of like-minded individuals.

        Our company is the perfect blend of coffee and technology, and I can't think of a better way to start your day.
        </Typography>
    </div>
    </div>
    </div>

  )
}

export default About