import React from 'react'
import { about } from '../Portfolio'
import { createStyles } from '@mantine/core';
import '../../src/main.css'


const useStyles = createStyles(() => ({
  wrapper: {
   fontFamily: 'Bavista',
   backgroundColor: 'black', 
   color: 'white', 
   display: 'flex', 
   flexDirection: 'column', 
   height: '100%', 
   borderRadius: '10px',
  },
   
}));

export const About = () => {

  const { classes } = useStyles()

  return (
    <>
   
      <div className={classes.wrapper}>
        <div style={{display: 'flex', flexDirection: 'row', padding: '1rem'}}>

          <h3 style={{ width: '100%', alignSelf: 'flex-start'}}>
            KK
          </h3>
          <h3 style={{alignSelf: 'flex-start'}}>
            Projects
          </h3>

        </div>

        <div style={{textAlign: 'center'}}>
          <h1 style={{fontFamily: 'Bavista',fontSize: '3.5rem'}} id="name">
            Kelly Karner
          </h1>
        
          <h3 id="role">
            Front End Developer
          </h3>
            
        </div>
      </div>
     
 
   
    
    </>
  )
}

