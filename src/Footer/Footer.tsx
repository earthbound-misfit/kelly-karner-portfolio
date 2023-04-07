import React from 'react'
import { createStyles } from '@mantine/core';


const useStyles = createStyles(() => ({
  wrapper: {
   fontFamily: 'Bavista',
   backgroundColor: 'black', 
   width: '100%',
   textAlign: 'center',
   color: 'white', 
   display: 'flex', 
   flexDirection: 'column', 
   borderRadius: '10px',
   height: '25rem',
  },
   
}));

export const Footer = () => {
  const { classes } = useStyles();


  return (
    <div className={classes.wrapper}>Footer</div>
  )
}

