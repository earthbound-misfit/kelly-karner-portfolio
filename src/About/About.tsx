import React from 'react'
import { about } from '../Portfolio'
import { createStyles, Flex, Col, Container } from '@mantine/core';
import '../../src/main.css'


const useStyles = createStyles(() => ({
  wrapper: {
    // subscribe to color scheme changes right in your styles
   color: 'black',
   fontFamily: 'Bavista',
    // Dynamic media queries, define breakpoints in theme, use anywhere
  },
   
}));

export const About = () => {

  const { classes } = useStyles()

  return (
    <>
   
      <div style={{backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'column', height: '100%', borderRadius: '10px'}}>
        <div style={{display: 'flex', flexDirection: 'row', padding: '1rem'}}>
          <h2 style={{ width: '100%', alignSelf: 'flex-start'}}>KK</h2>
          <h2 style={{alignSelf: 'flex-start'}}>Projects</h2>
        </div>

        <div style={{textAlign: 'center'}}>
          <h1 style={{fontFamily: 'Bavista',fontSize: '4rem'}} id="name">Kelly Karner</h1>
        
          <h2>Full Stack Developer</h2>
            
        </div>
      </div>
     
 
   
    
    </>
  )
}

